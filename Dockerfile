FROM node:18-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat python

# RUN apt-get update && apt-get install -y jq curl wget python
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

FROM base as builder

RUN apk update && apk add --no-cache git

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

### Get the latest release source code tarball
# RUN tarball_url=$(curl -s https://api.github.com/repos/troyeguo/koodo-reader/releases/latest | jq -r ".tarball_url") \
#     && wget -qO- $tarball_url \
#     | tar xvfz - --strip 1

### --network-timeout 1000000 as a workaround for slow devices
### when the package being installed is too large, Yarn assumes it's a network problem and throws an error
# RUN yarn --network-timeout 1000000

### Separate `yarn build` layer as a workaround for devices with low RAM.
### If build fails due to OOM, `yarn install` layer will be already cached.
# RUN yarn build

### Nginx or Apache can also be used, Caddy is just smaller in size
FROM caddy:latest
COPY --from=builder /app/build /usr/share/caddy
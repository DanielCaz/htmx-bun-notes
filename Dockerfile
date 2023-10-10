FROM oven/bun:latest as base

WORKDIR /usr/src/app

FROM base as build

COPY package.json .
COPY bun.lockb .

RUN bun install

COPY tailwind.config.js .
COPY ./src ./src
COPY tsconfig.json .

ARG MONGODB_URI
ENV MONGODB_URI=$MONGODB_URI

RUN bun build:tailwind
RUN bun build:server

FROM base as final

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/build ./build
COPY --from=build /usr/src/app/package.json .
COPY ./public ./public

CMD bun start
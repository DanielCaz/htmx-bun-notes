FROM oven/bun:latest

WORKDIR /app

ADD public public
ADD tailwind.config.js tailwind.config.js
ADD src src
ADD package.json package.json
ADD bun.lockb bun.lockb
RUN bun install

ARG MONGODB_URI
ENV MONGODB_URI=$MONGODB_URI

RUN bun build:tailwind
RUN bun build:server

EXPOSE $PORT

CMD ["bun", "start"]
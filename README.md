<img alt="icon" src=".diploi/icon.svg" width="32">

# Bun Component for Diploi

A generic Bun component that can be used to run any JS / TS app.

Uses the official [oven/bun](https://hub.docker.com/r/oven/bun) Docker image.

## Operation

### Development

Will run `bun install` when component is first initialized, and `bun dev` when deployment is started.

### Production

Will build a production ready image. Image runs `bun install` & `bun run build` when being created. Once the image runs, `bun start` is called.

## Links

- [Bun documentation](https://bun.sh/docs)

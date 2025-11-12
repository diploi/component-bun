<img alt="icon" src=".diploi/icon.svg" width="32">

# Bun Component for Diploi

[![launch with diploi badge](https://diploi.com/launch.svg)](https://diploi.com/component/bun)
[![component on diploi badge](https://diploi.com/component.svg)](https://diploi.com/component/bun)
[![latest tag badge](https://badgen.net/github/tag/diploi/component-bun)](https://diploi.com/component/bun)

Launch a trial, no card or registration required
https://diploi.com/component/bun

A generic Bun component that can be used to run any JS / TS app.

Uses the official [oven/bun](https://hub.docker.com/r/oven/bun) Docker image.

## Operation

### Getting started

1. In the Dashboard, click **Create Project +**
2. Under **Pick Components**, choose **Bun**
 You can add other frameworks from this page if you want to create a monorepo application, eg, Bun for API + React for frontend.
3. In **Pick Add-ons**, select any databases you need.
4. Choose **Create Repository**, which will generate a new GitHub repo.
5. Finally, click **Launch Stack**

Link the guide https://diploi.com/blog/hosting_bun_apps

### Development

Will run `bun install` when component is first initialized, and `bun dev` when deployment is started.

### Production

Will build a production ready image. Image runs `bun install` & `bun run build` when being created. Once the image runs, `bun start` is called.

## Links

- [Adding Bun to a project](https://docs.diploi.com/building/components/bun)
- [Bun documentation](https://bun.sh/docs)

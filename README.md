# soilio-landing

This is the "coming soon" landing page for [soil.io](http://soil.io).

A short post on this repository may be
[read here](http://blog.crushingpennies.com/creating-a-landing-page-with-npm-scripts.html).

## Install

```shell
npm install
```

This will install all dependencies into a local `node_modules` directory. Then,
use the `watch` job to start a local dev server on port 9000:

```shell
npm run watch
```

To build a minified distributable, use the `build` job:

```shell
npm run build
```

To deploy to an S3 bucket, use the `deploy` job:

```shell
npm run deploy
```

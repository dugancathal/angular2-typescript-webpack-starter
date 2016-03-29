# Angular2, TypeScript, and Webpack Starter

A starter pack for:

- Angular 2
- TypeScript
- Webpack

It uses:

- npm for dependencies
- TSC (TypeScript compiler) for TypeScript transpiling
- Webpack for bundling
- Karma-Jasmine for unit-tests
- Protractor for acceptance tests

## Setting up

On a Mac, you should only need to run:

```
bin/setup
```

If you're not on a Mac, you'll need to install:

- Node.js >= 5.9
- Java >= 1.7.0

And then run:

```
npm install
```

## Development workflow

There are a couple of npm scripts that will make your life easier:

- `npm run watch` - runs webpack in watch mode
- `npm start` - runs (and serves) the app through lite-server, which gives live-reloading
- `npm test` - compile and then run unit tests
- `npm run e2e` - run the end-to-end tests through protractor
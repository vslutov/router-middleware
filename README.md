# @vslutov/router-middleware

[![Build Status](https://travis-ci.org/vslutov/router-middleware.svg?branch=master)](https://travis-ci.org/vslutov/router-middleware)
[![npm version](https://badge.fury.io/js/%40vslutov%2Frouter-middleware.svg)](https://badge.fury.io/js/%40vslutov%2Frouter-middleware)
[![Greenkeeper badge](https://badges.greenkeeper.io/vslutov/router-middleware.svg)](https://greenkeeper.io/)
[![Coverage Status](https://coveralls.io/repos/github/vslutov/router-middleware/badge.svg?branch=master)](https://coveralls.io/github/vslutov/router-middleware?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Router middleware for [connected-react-router](https://github.com/supasate/connected-react-router) compatible with [redux-batch-middleware](https://github.com/mrydengren/redux-batch-middleware)

## Install
```sh
npm install @vslutov/router-middleware
```

## Code example

Drop-in replacement for router middleware from connected-react-router

Before:
```js
import { routerMiddleware } from 'connected-react-router'
```

After:
```js
import { routerMiddleware } from '@vslutov/router-middleware'
```

Now you can disbatch a batch of actions with history methods:
```js
store.dispatch([setSomeValues(value), push(someUrl)])
```

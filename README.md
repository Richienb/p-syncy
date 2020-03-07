# Promise Sync [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/p-sync/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/p-sync)

Resolve a promise synchronously.

[![NPM Badge](https://nodei.co/npm/p-sync.png)](https://npmjs.com/package/p-sync)

## Install

```sh
npm install p-sync
```

## Usage

```js
const pSync = require("p-sync");
const got = require("got");

pSync(got("https://google.com").text());
//=> "<!doctype html>..."

pSync(async () => {
	return "Hello World!"
})
//=> "Hello World!"
```

## API

### pSync(promise)

#### promise

Type: `promise or function returning promise`

The promise to resolve.

# p-syncy [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/p-syncy/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/p-syncy)

Resolve a promise synchronously.

[![NPM Badge](https://nodei.co/npm/p-syncy.png)](https://npmjs.com/package/p-syncy)

## Install

```sh
npm install p-syncy
```

## Usage

```js
const pSyncy = require("p-syncy");
const got = require("got");

pSyncy(got("https://google.com").text());
//=> "<!doctype html>..."

pSyncy(async () => {
	return "Hello World!"
})
//=> "Hello World!"
```

## API

### pSyncy(promise)

#### promise

Type: `promise or function returning promise`

The promise to resolve.

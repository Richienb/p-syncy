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

const { body } = pSyncy(got("https://google.com"));

console.log(body)
//=> "<!doctype html>..."

const result = pSyncy(async () => {
	return "Hello World!"
})

console.log(result)
//=> "Hello World!"
```

## API

### pSyncy(promise)

#### promise

Type: `promise or function returning promise`

The promise to resolve.

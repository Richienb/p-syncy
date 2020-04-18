"use strict"

const deasync = require("deasync")
const isPromise = require("p-is-promise")

const pSyncy = deasync((promise, callback) => {
	promise
		.then(data => callback(undefined, data))
		.catch(error => callback(error))
})

module.exports = promise => {
	if (typeof promise === "function") {
		promise = promise()
	}

	if (!isPromise(promise)) {
		throw new TypeError("A promise must be provided!")
	}

	return pSyncy(promise)
}

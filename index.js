"use strict"

const syncPromise = require("synchronized-promise")
const isPromise = require("p-is-promise")

// Suppress DEP0097
process.noDeprecation = true

module.exports = (promise) => {
	if (typeof promise === "function") promise = promise()
	if (!isPromise(promise)) throw new TypeError("A promise must be provided!")

	return syncPromise(() => promise)()
}

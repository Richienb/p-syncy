"use strict"

const deasync = require("deasync")
const isPromise = require("p-is-promise")

module.exports = (promise) => {
	if (typeof promise === "function") promise = promise()
	if (!isPromise(promise)) throw new TypeError("A promise must be provided!")

	let resolved = false
	let resolvedData

	let thrown = false
	let thrownError

	promise
		.then((data) => {
			resolvedData = data
			resolved = true
		})
		.catch((error) => {
			thrownError = error
			thrown = true
		})

	deasync.loopWhile(() => !resolved && !thrown)

	if (thrown) throw thrownError

	if (resolved) return resolvedData
}

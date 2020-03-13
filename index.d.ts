/**
 * Resolve a promise synchronously.
 * @param promise The promise to resolve.
 * @example
 * ```
 * const pSyncy = require("p-syncy");
 * const got = require("got");
 *
 * const { body } = pSyncy(got("https://google.com"));
 *
 * console.log(body)
 * //=> "<!doctype html>..."
 *
 * const result = pSyncy(async () => {
 * 	return "Hello World!"
 * })
 *
 * console.log(result)
 * //=> "Hello World!"
 * ```
*/
declare function pSyncy<PromiseValue>(promise: PromiseLike<PromiseValue> | (() => PromiseLike<PromiseValue>)): PromiseValue

export = pSyncy

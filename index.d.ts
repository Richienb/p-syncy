import { PromiseValue } from "type-fest"

/**
 * Resolve a promise synchronously.
 * @param promise The promise to resolve.
 * @example
 * ```
 * const pSyncy = require("p-syncy");
 * const got = require("got");
 *
 * pSyncy(got("https://google.com").text());
 * //=> "<!doctype html>..."
 * ```
*/
declare function pSyncy<PromiseType extends PromiseLike<any>>(promise: PromiseType | (() => PromiseType)): PromiseValue<PromiseType>

export = pSyncy

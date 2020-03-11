import { PromiseValue } from "type-fest"

/**
 * Resolve a promise synchronously.
 * @param promise The promise to resolve.
 * @example
 * ```
 * const pSync = require("p-sync");
 * const got = require("got");
 *
 * pSync(got("https://google.com").text());
 * //=> "<!doctype html>..."
 * ```
*/
declare function pSync<PromiseType extends PromiseLike<any>>(promise: PromiseType | (() => PromiseType)): PromiseValue<PromiseType>

export = pSync

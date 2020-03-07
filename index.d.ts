type PromiseReturnType<T> = T extends PromiseLike<infer U> ? U : T

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
declare function pSync<PromiseType extends PromiseLike>(promise: PromiseType | (() => PromiseType)): PromiseReturnType<PromiseType>

export = pSync

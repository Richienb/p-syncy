const test = require("ava")
const pSyncy = require(".")

test.cb("resolving promise", (t) => {
	const resolved = Promise.resolve("a")

	setImmediate(() => {
		t.is(pSyncy(resolved), "a")

		t.end()
	})
})

test.cb("rejecting promise", (t) => {
	const rejected = Promise.reject(new Error("a"))

	setImmediate(() => {
		t.throws(() => pSyncy(rejected), {
			instanceOf: Error,
			message: "a",
		})

		t.end()
	})
})

const test = require("ava")
const pSync = require(".")

test.cb("resolving promise", (t) => {
	const resolved = Promise.resolve("a")

	setImmediate(() => {
		t.is(pSync(resolved), "a")

		t.end()
	})
})

test.cb("rejecting promise", (t) => {
	const rejected = Promise.reject(new Error("a"))

	setImmediate(() => {
		t.throws(() => pSync(rejected), {
			instanceOf: Error,
			message: "a",
		})

		t.end()
	})
})

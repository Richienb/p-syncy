const test = require("ava")
const execa = require("execa")
const normalizeNewline = require("normalize-newline")

test("main", async (t) => {
	t.is((await execa("node", ["fixtures/resolved"])).stdout, "a")
	t.is(normalizeNewline((await execa("node", ["fixtures/rejected"], { reject: false })).stderr).split("\n")[4], "Error: a")
})

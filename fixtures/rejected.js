const pSync = require("..")

console.log(pSync(Promise.reject(new Error("a"))))

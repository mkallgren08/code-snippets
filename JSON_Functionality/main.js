const fs = require("fs");
const getopts = require("getopts")
const jsonMod = require("./modifyJSON.js")

console.log(jsonMod)
console.log("Reading args from main.js file")
console.log(jsonMod.opts)

jsonMod.run()
import chalk from "chalk"
import yargs from "yargs"
import {hideBin} from "yargs/helpers"
import getNotes from "./src/notes.js"
const yarg = yargs(hideBin(process.argv))

yarg.version("1.1.0")

yarg.command({
    command: "add",
    describe: "Add a new note",
    handler: function () {
        console.log("Adding a new note")
    }
})

console.log(yarg.argv)
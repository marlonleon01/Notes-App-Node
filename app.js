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

yarg.command({
    command: "remove",
    describe: "Remove a note",
    handler: function() {
        console.log("Removing the note")
    }
})

yarg.command({
    command: "list",
    describe: "List your notes",
    handler: function () {
        console.log("Listing out all notes")
    }
})

yarg.command({
    command: "read",
    describe: "Read a note",
    handler: function () {
        console.log("Reading a note")
    }
})

console.log(yarg.argv)
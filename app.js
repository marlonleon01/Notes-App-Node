import yargs from "yargs"
import {hideBin} from "yargs/helpers"
import {getNotes, addNotes, removeNotes} from "./notes.js"
const yarg = yargs(hideBin(process.argv))

yarg.version("1.1.0")

yarg.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        addNotes(argv.title, argv.body)
    }
})

yarg.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        removeNotes(argv.title)
    }
})

yarg.command({
    command: "list",
    describe: "List your notes",
    handler: () => {
        console.log("Listing out all notes")
    }
})

yarg.command({
    command: "read",
    describe: "Read a note",
    handler: () => {
        console.log("Reading a note")
    }
})

yarg.parse()
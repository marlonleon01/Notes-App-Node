import chalk from "chalk"
import fs from "fs"

function addNotes(title, body) {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })    
        saveNotes(notes)
        console.log(chalk.bgGreen("New note added"))
    } else {
        console.log(chalk.bgRed("Note title taken"))
    }
}

function removeNotes(title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    
    if (notesToKeep.length !== notes.length) {
        saveNotes(notesToKeep)
        console.log(chalk.bgGreen("Note remove"))
    } else {
        console.log(chalk.bgRed("No note found"))
    }
}

function listNotes() {
    const notes = loadNotes()
    
    console.log(chalk.bgGreen("Your Notes"))
    notes.forEach(note => {
        console.log(note.title)
    });
}

function readNotes(title) {
    const notes = loadNotes()

    const foundNote = notes.filter(note => note.title === title)

    if (foundNote.length > 0) {
        console.log(chalk.green(foundNote[0].title))
        console.log(foundNote[0].body)
    } else {
        console.log(chalk.red("No note found"))
    }
}

function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)   
    } catch (error) {
        return []
    }
}

function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

export {addNotes, removeNotes, listNotes, readNotes}
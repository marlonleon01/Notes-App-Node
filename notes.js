import chalk from "chalk"
import fs from "fs"

function getNotes() {
    return "Your notes"
}

function addNotes(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
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
    
    console.log(chalk.green("Your Notes"))
    notes.forEach(note => {
        console.log(note.title)
    });
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

export {getNotes, addNotes, removeNotes, listNotes}
import fs from "fs"

function getNotes() {
    return "Your notes"
}

function addNotes(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })    
        console.log("New note added")
        saveNotes(notes)
    } else {
        console.log("Note title taken")
    }
}

function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

function removeNotes(title) {
    console.log(title)
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

export {getNotes, addNotes, removeNotes}
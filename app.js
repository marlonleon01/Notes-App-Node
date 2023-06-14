import chalk from "chalk"
import getNotes from "./src/notes.js"

const msg = getNotes()
const greenMsg = chalk.blue.bold.inverse("Success")

console.log(msg);
console.log(greenMsg)
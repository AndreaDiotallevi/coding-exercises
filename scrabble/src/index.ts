import { Rack, Word } from "./word"

const myConst = false

export { myConst }

const word = new Word("GUARDIAN")
const score = word.calculateScore()
console.log("word: ", word.letters)
console.log("score: ", score)

const rack = new Rack()
const tiles = rack.assignTiles()
console.log("Tiles assigned to payer rack: ", tiles)

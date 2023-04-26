import { Bag, Rack, Word } from "./word"

describe("Word", () => {
    it("should calcuate the score of 0 for an empty word", () => {
        const word = new Word()
        const score = word.calculateScore()

        expect(score).toBe(0)
    })

    it("should return a score of 10 for the word GUARDIAN", () => {
        const word = new Word("GUARDIAN")
        const score = word.calculateScore()

        expect(score).toBe(10)
    })
})

describe("Rack", () => {
    it("should assign 7 tiles", () => {
        const rack = new Rack()
        const tiles = rack.assignTiles()

        expect(tiles.length).toBe(7)
    })

    it("should select 7 random tiles from the english alpahbet", () => {
        const rack = new Rack()
        const tiles = rack.assignTiles()

        const englishAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase()

        for (let i = 0; i < tiles.length; i++) {
            expect(englishAlphabet.includes(tiles[i])).toBe(true)
        }
    })
})

describe("Bag", () => {
    it("should extract 7 tiles", () => {
        const bag = new Bag()
        const tiles = bag.extractTiles()

        expect(tiles.length).toBe(7)
    })

    it("should extract 7 tiles in accordance with bag distribution", () => {
        const bag = new Bag()
        const tiles = bag.extractTiles()

        // const gCount =
    })
})

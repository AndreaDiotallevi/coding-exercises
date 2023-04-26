export class Word {
    letters: string

    constructor(letters: string = "") {
        this.letters = letters
    }

    calculateScore(): number {
        const LetterPointMapping = {
            G: 2,
            U: 1,
            A: 1,
            R: 1,
            D: 2,
            I: 1,
            N: 1,
        }

        let score = 0

        for (let i = 0; i < this.letters.length; i++) {
            score += LetterPointMapping[this.letters[i]]
        }

        return score
    }
}

export class Rack {
    assignTiles(): string {
        const englishAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase()

        let tiles = ""

        for (let i = 0; i < 7; i++) {
            const randomInteger = Math.floor(Math.random() * englishAlphabet.length)
            tiles += englishAlphabet[randomInteger]
        }

        return tiles
    }
}

export class Bag {
    tilesDistribution = {
        G: 3, // 11%
        U: 4, // 14%
        A: 9,
        R: 6,
        D: 4,
        I: 9,
        N: 6,
    }

    // G weight 3 / total number of tiles
    // full total of weights 1

    // const test = {
    //     "sf":"A",
    //     "jkfg":"A",
    //     "skj":"A",
    //     "skjdf":"B"
    // }

    extractTiles(): string {
        const englishAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase()

        let tiles = ""

        for (let i = 0; i < 7; i++) {
            const randomInteger = Math.floor(Math.random() * englishAlphabet.length)

            const letter = englishAlphabet[randomInteger]
            if (this.tilesDistribution[letter] > 0) {
                tiles += englishAlphabet[randomInteger]
                this.tilesDistribution[letter] = this.tilesDistribution[letter] - 1
            } else {
                // Do nothing
            }

            // Check if letter at that index is available
            // if
        }

        return tiles
    }
}

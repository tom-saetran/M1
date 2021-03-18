const numCells = 75 //15x5
const numberArray = []

const createBoard = () => {
    let parent = document.getElementById("bingoboard")

    for (let i = 0; i < numCells; i++) {
        let child = document.createElement("div")
        parent.appendChild(child)
        child.classList.add("cell")
        child.innerText = i + 1
    }
}

const drawNumber = () => {
    if (numberArray < 1)
        return

    let x = Math.floor(Math.random() * numberArray.length)
    document.getElementById("bingoboard").children[numberArray[x]].classList.add("drawn")
    numberArray.splice(x,1)
}

window.onload = () => {
    for (let i = 0; i < numCells; i++) {
        numberArray.push(i)
    }
    createBoard()
}
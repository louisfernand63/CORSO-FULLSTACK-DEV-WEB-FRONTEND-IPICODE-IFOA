
let tombola = () => {
    let table = document.querySelector(".main-board");
    for (let i = 0; i < 76; i++) {
        table.innerHTML += `<div class='cell'>${i + 1}</div>`;
    }
}
tombola();

let fillArray = function () {
    let arr = []
    for (let i = 0; i < 76; i++) {
        arr.push(i + 1);
    }
    return arr
}
fillArray();

let getRandomNumber = () => {
    let randIndex = Math.floor(Math.random() * range.length);
    let random = range.length.splice(randIndex, 1)[0];
    return random;
}
getRandomNumber();

let generateRandNumber = (range) => {
    let randNumber = getRandomNumber(range);
    let randNumDiv = document.querySelector('randNum');
    randNumDiv.innerText = 'Numero: ' + randNumber;

    let cells = document.querySelectorAll('.main-board .cell');
    cells[random - 1].classList.add('highlight');

    let userCells = document.querySelectorAll('.user-board .cell')
    userCells.forEach((cell) => {
        if (parseInt(cell.innerText) === random) {
            cell.classList.add('highlight')
        }
    })
}
generateRandNumber();

let generateUserBoards = () => {
    let usersNumber = document.querySelector('#usersNumber').value
    let container = document.querySelector('.container')
    if (parseInt(usersNumber) > 0) {
        for (let i = 0; i < parseInt(usersNumber); i++) {
            let range = fillArray()
            let board = document.createElement('div')
            board.className = 'board user-board'
            for (let i = 0; i < 24; i++) {
                let random = getRandomNum(range)
                board.innerHTML += `<div class='cell'>${random}</div>`
            }
            container.appendChild(board)
        }
    }
}

window.onload = function () {
    tombola();
    let randBtn = document.querySelector('#randBtn');
    let range = fillArray();
    randBtn.addEventListener('click', function () {
      generateRandNumber(range);
    })
    let userBoardBtn = document.querySelector('#userBoardBtn')
    userBoardBtn.onclick = generateUserBoards;
  }
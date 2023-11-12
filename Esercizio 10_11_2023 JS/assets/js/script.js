/* DA COMPLETARE PER FAR FUNZIONARE */
const generateMainBoard = function () {
    const board = document.querySelector('.main-board');
    for (let i = 0; i < 76; i++) {
        board.innerHTML += `<div class='cell'>${i + 1}</div>`;
    }
}
generateMainBoard();

const fillArray = function () {
    const arr = [];
    for (let i = 0; i < 76; i++) {
        arr.push(i + 1);
    }
    //console.log(arr);
    return arr;
}
fillArray();

const getRandomNum = function () {
    const arr = [];
    for (let i = 0; i < 76; i++) {
        arr.push(i + 1);
    }
    //console.log(arr);
    //return arr;

    const randIndex = Math.floor(Math.random() * arr.length);
    //const randIndex = Math.ceil(Math.random() * 76);
    //console.log(randIndex);
    let random = arr.splice(randIndex, 1)[0];
    //console.log(random);
    return random;
}
getRandomNum();

const generateRandNumber = function () {
    const random = getRandomNum();
    //console.log(random);

    const randNumDiv = document.getElementById('randNum');
    //randNumDiv.innerText = 'Numero: ' + random;
    randNumDiv.innerText = `Numero: ${random}`;
    //console.log(randNumDiv);

    const cells = document.querySelectorAll('.main-board .cell');
    cells[random - 1].classList.add('highlight');

    const userCells = document.querySelectorAll('.user-board .cell');
    userCells.forEach((cell) => {
        if (parseInt(cell.innerText) === random) {
            cell.classList.add('highlight');
        }
    })
}
generateRandNumber();

const generateUserBoards = function () {
    const usersNumber = document.getElementById('usersNumber').value;
    const container = document.querySelector('.container');
    if (parseInt(usersNumber) > 0) {
        for (let i = 0; i < parseInt(usersNumber); i++) {
            const range = fillArray();
            console.log(range);

            const board = document.createElement('div');
            board.className = 'board user-board';
            for (let i = 0; i < 24; i++) {
                const random = getRandomNum(range);
                board.innerHTML += `<div class='cell'>${random}</div>`;
            }
            container.appendChild(board);
        }
    }
}
generateUserBoards();




window.onload = function () {
    generateMainBoard();
    const randBtn = document.getElementById('randBtn');
    const range = fillArray();
    randBtn.addEventListener('click', function () {
        generateRandNumber(range);
    })
    const userBoardBtn = document.getElementById('userBoardBtn');
    userBoardBtn.onclick = generateUserBoards;
}
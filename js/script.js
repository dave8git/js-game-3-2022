
function playGame(playerInput) {
//let playerInput =  //prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
clearMessages(); 
let randomNumber = Math.floor(Math.random() * 3 + 1); 

function getMoveName(number) {
    let move = 'Nieznany ruch';
    if(number == 1){
        move = 'kamień';
    } else if (number == 2) {
        move = 'papier';
    } else if (number == 3) {
        move = 'nożyce';
    }
    return move;
}

const computerMove = getMoveName(randomNumber);
console.log(computerMove);
const playerMove = getMoveName(playerInput);
console.log(playerMove);

function displayResult(computerMove, playerMove) {
    if((computerMove == 'kamień' && playerMove == 'papier') || (computerMove == 'papier' && playerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'kamień')) {
        printMessage('Wygrywasz');
        yourVictory++;
    } else if (computerMove ==  playerMove) {
        printMessage('Remis')
    } else if (playerMove == 'Nieznany ruch') {
        printMessage('Wpisz poprawną liczbę od 1 do 3');
    } else {
        printMessage('Komputer wygrywa');
        computerVictory++;
    }
}

displayResult(computerMove, playerMove);
printMessage('Mój ruch to: ' + computerMove);
printMessage('Twój ruch to: ' + playerMove);

}

let yourVictory = 0; 
let computerVictory = 0; 
for (let i = 0; i < 3000; i++) {
    let playerInput = Math.floor(Math.random() * 3 + 1); 
    playGame(playerInput);
}

document.getElementById('messages').innerHTML = 'Wygrane ' + yourVictory + ' Przegrane ' + computerVictory;

console.log(yourVictory);
console.log(computerVictory);
// document.getElementById('play-rock').addEventListener('click', function() {playGame(1)});
// document.getElementById('play-paper').addEventListener('click', function() { playGame(2)});
// document.getElementById('play-scissors').addEventListener('click', function() { playGame(3) })


//playGame(3);

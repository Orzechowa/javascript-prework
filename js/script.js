let playerScore = 0;
let computerScore = 0;

function playGame(playerInput){
  
  function getMoveName(argMoveId){
    if(argMoveId == 1) return 'kamień'
    if(argMoveId == 2) return 'papier'
    if(argMoveId == 3) return 'nożyce'
  }

  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if((argComputerMove == 'kamień' && argPlayerMove =='papier') || 
    (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') || 
    (argComputerMove == 'papier' && argPlayerMove == 'nożyce')) {
     printMessage('Wygrywasz');
     playerScore++;
     printMessage(playerScore + ':' + computerScore);
  }
  else if(argComputerMove == argPlayerMove) {
     printMessage('Remis!');
  } else {
    printMessage('Przegrywasz!');
    computerScore++;
    printMessage(playerScore + ':' + computerScore);
  }

  }

// PROCES GRY

// wyczść diva z wiadomościami
clearMessages();

// wylosuj wybór gracza i skonwertuj go do zapisu tekstowego (1 --> papier)
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  printMessage('Mój ruch to: ' + computerMove);

// ustal wybó gracza (1 --> papier)

  let playerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + playerMove);


  displayResult(computerMove, playerMove);
}
  
document.getElementById('play-rock').addEventListener('click', function(){
  playGame('1');
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame('2');
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame('3');
});
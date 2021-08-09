function playGame(playerInput){
  clearMessages();
  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    if(argMoveId == 2){
      return 'papier'
    }
    if(argMoveId == 3){
      return 'nożyce'
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);
  /*
  if(randomNumber == 1){
    computerMove = 'kamień';
  }
  if(randomNumber == 2) {
    computerMove = 'papier';
  }
  if(randomNumber == 3) {
    computerMove = 'nożyce'
  }
  */
  printMessage('Mój ruch to: ' + computerMove);


  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  /*
  if(playerInput == '1'){
    playerMove = 'kamień';
  }
  if(playerInput == '2'){
    playerMove = 'papier';
  }
  if(playerInput == '3'){
    playerMove = 'nożyce'
  }
  */

  printMessage('Twój ruch to: ' + playerMove);

  let argComputerMove = getMoveName(randomNumber);

  let argPlayerMove = getMoveName(playerInput);

  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem' + argComputerMove + ', a Ty' + argPlayerMove);
  }
  if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis!');
  }
  if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Przegrywasz!');
  }
  if(argComputerMove == 'kamień' && argPlayerMove =='papier'){
    printMessage( 'Wygrywasz')
  }
  if(argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
    printMessage('Wybierz poprawną opcje!');
  }
  if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis!');
  }
  if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Przegrywasz!');
  }
  if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }
  if(argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
    printMessage('Wybierz poprawną opcje!');
  }
  if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Przegrywasz!');
  }
  if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }
  if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis!');
  }
  if(argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
    printMessage('Wybierz poprawną opcje!');
  }
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
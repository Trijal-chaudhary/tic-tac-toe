const buttons = document.querySelectorAll('.card');
const xTurn = document.querySelector('.js-xturn');
const oTurn = document.querySelector('.js-oturn')
//set opasity of o turn 0;
// oTurn.classList.add('opacity0');
let player2 = true;
buttons.forEach((button)=>{
  button.addEventListener('click', ()=>{
    if(!checkWinner()){
      if(player2){
        button.innerHTML = 'X'
        button.disabled = true;
        player2 = false;
        checkWinner()
        xTurn.classList.add('opasity0');
        oTurn.classList.remove('opasity0')
      }else{
        button.innerHTML = 'O'
        button.disabled = true;
        player2 = true;
        checkWinner()
        oTurn.classList.add('opasity0');
        xTurn.classList.remove('opasity0')
      }
    }
  })
  
})
//pattern
const winPatern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]];
//check winner
function checkWinner(){
  for(let i = 0; i < winPatern.length; i++){
    let patern = winPatern[i]
    let first = patern[0];
    let second = patern[1];
    let third = patern[2];
    if(buttons[first].innerHTML != '' && buttons[second].innerHTML != '' && buttons[third].innerHTML != ''){
      if(buttons[first].innerHTML === buttons[second].innerHTML && buttons[second].innerHTML === buttons[third].innerHTML){
        console.log('mil gaya winner')
        //add a background to winner pattern
        buttons[first].classList.add('win');
        buttons[second].classList.add('win');
        buttons[third].classList.add('win');
        //change backbround color of losser player
        if(buttons[first].innerHTML === 'X'){
          document.querySelector('.js-player1').classList.add('loser');
        }else{
          document.querySelector('.js-player2').classList.add('loser');
        }
        return true;
      }
    }
  }
  return false;
};
//add a event listioner to reset button
document.querySelector('.js-reset').addEventListener('click', ()=>{
  reset();
})
function reset(){
  //set player2 true;
  player2 = true;
  buttons.forEach((button)=>{
    button.innerHTML = '';
    if (button.disabled) {
      button.disabled = false; // Enable the button
    }
    if(button.classList.contains('win')){
      button.classList.remove('win');
    }
  })
  //reset the color of the players
  const playero = document.querySelector('.js-player1');
  const playerx = document.querySelector('.js-player2');
  if(playero.classList.contains('loser')){
    playero.classList.remove('loser');
  }
  if(playerx.classList.contains('loser')){
    playerx.classList.remove('loser');
  }
  if(xTurn.classList.contains('opasity0')){
    xTurn.classList.remove('opasity0');
    oTurn.classList.add('opasity0');
  }
}
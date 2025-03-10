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
        return true;
      }
    }
  }
  return false;
};

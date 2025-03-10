const buttons = document.querySelectorAll('.card');
const xTurn = document.querySelector('.js-xturn');
const oTurn = document.querySelector('.js-oturn')
//set opasity of o turn 0;
// oTurn.classList.add('opacity0');
let player2 = true;
buttons.forEach((button)=>{
  button.addEventListener('click', ()=>{
    if(player2){
      button.innerHTML = 'X'
      button.disabled = true;
      player2 = false;
      xTurn.classList.add('opasity0');
      oTurn.classList.remove('opasity0')
    }else{
      button.innerHTML = 'O'
      button.disabled = true;
      player2 = true;
      oTurn.classList.add('opasity0');
      xTurn.classList.remove('opasity0')
    }
  })
})
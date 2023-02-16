const buttons = document.getElementById('button');

const changeButton = () => {
  buttons.style.backgroundColor = 'black';
  buttons.style.color = 'white';
}

const changeBk = () => {
  buttons.style.backgroundColor = 'white';
  buttons.style.color = 'black';
}

buttons.addEventListener('mouseover', changeButton);
buttons.addEventListener('mouseout', changeBk);

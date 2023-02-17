const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');


const changeButton = () => {
  button1.style.backgroundColor = 'black';
  button1.style.color = 'white';
}

const changeButton2 = () => {
  button2.style.backgroundColor = 'black';
  button2.style.color = 'white';
}

const changeButton3 = () => {
  button3.style.backgroundColor = 'black';
  button3.style.color = 'white';
}

const changeBk = () => {
  button1.style.backgroundColor = 'white';
  button1.style.color = 'black';
}

const changeBk2 = () => {
  button2.style.backgroundColor = 'white';
  button2.style.color = 'black';
}

const changeBk3 = () => {
  button3.style.backgroundColor = 'white';
  button3.style.color = 'black';
}

button1.addEventListener('mouseover', changeButton);
button1.addEventListener('mouseout', changeBk);
button2.addEventListener('mouseover', changeButton2);
button2.addEventListener('mouseout', changeBk2);
button3.addEventListener('mouseover', changeButton3);
button3.addEventListener('mouseout', changeBk3);

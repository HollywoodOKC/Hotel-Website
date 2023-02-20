const button = document.getElementById('button');

const changeBtn = () => {
  button.style.backgroundColor = 'black';
  button.style.color = 'white';
}

const changeBack = () => {
  button.style.backgroundColor = 'white';
  button.style.color = 'black';
}

const randoColor = () => {
  let val = 0xFFFFFF;
  let randoNum = Math.floor(Math.random() * val);
  randoNum = randoNum.toString(16);
  let randColor = randoNum.padStart(6, 0);
  document.body.style.backgroundColor = `#${randColor.toUpperCase()}`;
}

button.addEventListener('mouseover', changeBtn);
button.addEventListener('mouseout', changeBack);
button.addEventListener('click', randoColor);

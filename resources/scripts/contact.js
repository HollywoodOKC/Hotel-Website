const button = document.getElementById('button');
const color = document.getElementById('color');

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
  color.innerHTML = `#${randColor.toUpperCase()}`;
  document.body.style.backgroundColor = `#${randColor.toUpperCase()}`;

  axios.get(`https://www.thecolorapi.com/id?hex=${randColor}`)
    .then(response => {
      const apiResponse = response.data;
      console.log(apiResponse);
      document.getElementById('colorName').innerHTML = `${apiResponse.name.value}`;
    }).catch(error => {
      console.log(error);
    })
}

button.addEventListener('mouseover', changeBtn);
button.addEventListener('mouseout', changeBack);
button.addEventListener('click', randoColor);

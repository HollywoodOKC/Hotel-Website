//alert("Welcome to the Hotel California!");
const roomPic = document.getElementById('roomPic');
const form = document.getElementById('form');
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById('roomType').innerHTML = "Select Room";

const theDay = () => {
  d = new Date();
  document.getElementById("clockDisplay").innerHTML = days[d.getDay()];
};

theDay();

const showTime = () => {
  const time = new Date();
  const hours = time.getHours();
  const mins = time.getMinutes();
  const secs = time.getSeconds();
  const wholeTime = `${hours}:${mins}:${secs}`;
  document.getElementById("time").innerHTML = wholeTime;
  setTimeout(showTime, 1000);
};

showTime();


const showRoom = () => {
  let rooms;
  if (document.getElementById("monroe").checked) {
    rooms = document.getElementById("roomType").innerHTML = "Monroe Suite";
    roomPic.src = "./resources/images/monroe suite.jpg";
    roomPic.alt = "The Monroe Suite";
  } else if (document.getElementById("tropicana").checked) {
    rooms = document.getElementById("roomType").innerHTML = "Tropicana Suite";
    roomPic.src = "./resources/images/tropicana suite.jpg";
    roomPic.alt = "The Tropicana Suite";
  } else if (document.getElementById("roosevelt").checked) {
    rooms = document.getElementById("roomType").innerHTML = "Roosevelt Suite";
    roomPic.src = "./resources/images/roosevelt suite.jpeg";
    roomPic.alt = "The Roosevelt Suite";
  } else if (document.getElementById("normal").checked) {
    rooms = document.getElementById("roomType").innerHTML = "Normal H.C. Suite";
    roomPic.src = "./resources/images/normal suite.jpg";
    roomPic.alt = "Normal HC Suite";
  } else {

    roomPic.src = "";
  }
  document.getElementById('roomType').innerHTML = rooms;
};

form.addEventListener('click', showRoom);
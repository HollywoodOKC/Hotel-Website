//alert("Welcome to the Hotel California!");
const roomPic = document.getElementById('roomPic');
const form = document.getElementById('form');
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function theDay() {
  d = new Date();
  document.getElementById("clockDisplay").innerHTML = days[d.getDay()];
};

theDay();

function showTime() {
  const time = new Date();
  let hours = time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();
  hours = checkTime(hours);
  mins = checkTime(mins);
  secs = checkTime(secs);
  const wholeTime = `${hours}:${mins}:${secs}`;
  document.getElementById("time").innerHTML = wholeTime;
  setTimeout(showTime, 1000);
};

showTime();

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

const hotel = {
  name: 'Hotel California',
  rooms: 210,
  booked: 133,
  gym: true,
  hotTub: true,
  roomTypes: ["Monroe", "Tropicana", "Roosevelt", "Normal"],
  checkAvailability: function () {
    return this.rooms - this.booked;
  }
};

function showRoom() {
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
    roomPic.src = "Try clicking room button";
  }
  document.getElementById('roomType').innerHTML = rooms;
};

form.addEventListener('click', showRoom);
document.getElementById('name').innerHTML = hotel.name;
document.getElementById('roomType').innerHTML = "Select a suite";
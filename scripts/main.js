alert("Welcome to the Hotel California!");

const days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];

const theDay = () => {
  d = new Date();
  document.getElementById("clockDisplay").innerHTML = days[d.getDay()];
}

theDay();

const showTime = () => {
  const time = new Date();
  const hours = time.getHours();
  const mins = time.getMinutes();
  const secs = time.getSeconds();
  const wholeTime = `${hours}:${mins}:${secs}`;
  document.getElementById("time").innerHTML = wholeTime;
  setTimeout(showTime, 1000);
}

showTime();

const showRoom = () => {
  let rooms;
  if (document.getElementById("monroe").checked) {
    rooms = document.getElementById("roomType").innerHTML = "Monroe Suite";
  } else if (document.getElementById("tropicana").checked) {
    rooms = document.getElementById("roomType").innerHTML = "Tropicana Suite";
  } else if (document.getElementById("roosevelt").checked) {
    rooms = document.getElementById("roomType").innerHTML = "Roosevelt Suite";
  } else if (document.getElementById("normal").checked) {
    rooms = document.getElementById("roomType").innerHTML = "Normal H.C. Suite";
  } else {
    rooms = document.getElementById('roomType').innerHTML = "Select Room";
  }
  document.getElementById('roomType').innerHTML = rooms;
  setTimeout(showRoom, 1000);
}

showRoom();

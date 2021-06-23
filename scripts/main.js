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
  if (document.getElementById("king").checked) {
    rooms = document.getElementById("roomType").innerHTML = "King Suite";
  } else if (document.getElementById("queen").checked) {
    rooms = document.getElementById("roomType").innerHTML = "Queen Suite";
  } else if (document.getElementById("suite").checked) {
    rooms = document.getElementById("roomType").innerHTML = "Luxury Suite";
  } else if (document.getElementById("budget").checked) {
    rooms = document.getElementById("roomType").innerHTML = "Cheap Room";
  } else {
    rooms = document.getElementById('roomType').innerHTML = "Select Room";
  }
  document.getElementById('roomType').innerHTML = rooms;
  setTimeout(showRoom, 1000);
}

showRoom();

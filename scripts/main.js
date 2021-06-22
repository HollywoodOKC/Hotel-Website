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
  if (document.getElementById('king').checked) {
    room = document.getElementById('king').value;
  } else if (document.getElementById('queen').checked) {
    room = document.getElementById('queen').value;
  } else if (document.getElementById('suite').checked) {
    room = document.getElementById('suite').value;
  } else if (document.getElementById('budget').checked) {
    room = document.getElementById('budget').value;
  } else {
    room = document.innerHTML = "Room";
  }

  document.getElementById('roomType').innerHTML = room;
}

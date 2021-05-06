alert("Welcome to the Hotel California!");

function showTime() {
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  let time = `${h}:${m}:${s} ${session}`;
  document.getElementById("time").innerText = time;
  document.getElementById("time").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();


function timeOfDay() {
  const theTime = new Date();
  const theHour = theTime.getHours();

  if (theHour >= 6 && theHour <= 11) {
    document.getElementById("clockDisplay").innerHTML = `Good Morning`;
  } else if (theHour >= 12 && theHour <= 18) {
    document.getElementById("clockDisplay").innerHTML = "Good Afternoon";
  } else if (theHour >= 19 && theHour <= 23) {
    document.getElementById("clockDisplay").innerHTML = "Good Evening";
  } else {
    document.getElementById("clockDisplay").innerHTML = "Good Day";
  }

  setTimeout(timeOfDay, 1000);
}

timeOfDay();

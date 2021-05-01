alert("Welcome to the Hotel California");

let hotel = {
  name: 'Hotel California',
  rooms: 200,
  booked: 97,
  roomTypes: ['twin', 'double', 'suite'],
  cost: [230, 400, 700],
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
};

let elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

let elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();

let myTime = new Date();
let myHour = myTime.getHours();
document.getElementById("name").innerHTML = "The Hotel California" + "myHour";

function timeOfDay() {
  const theTime = new Date();
  const theHour = theTime.getHours();

  if (theHour >= 6 && theHour <= 11) {
    document.getElementById("time").innerHTML = "Good Morning";
  } else if (theHour >= 12 && theHour <= 18) {
    document.getElementById("time").innerHTML = "Good Afternoon";
  } else if (theHour >= 19 && theHour <= 23) {
    document.getElementById("time").innerHTML = "Good Evening";
  } else {
    document.getElementById("time").innerHTML = "Good Day";
  }
}

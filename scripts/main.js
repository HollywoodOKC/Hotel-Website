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

alert("Welcome to Hotel California");

let myTime = new Date();
let myHour = myTime.getHours();
document.getElementById("name").innerHTML = "<h3>The Hotel California" + myHour + "</h3>";

function timeOfDay() {
  const theTime = new Date();
  const theHour = theTime.getHours();

  if (theHour >= 6 && theHour <= 11) {
    return "Morning";
  } else if (theHour >= 12 && theHour <= 18) {
    return "Afternoon";
  } else if (theHour >= 19 && theHour <= 23) {
    return "Evening";
  } else {
    return "Day";
  }
}
document.getElementById("time").innerHTML = theHour;

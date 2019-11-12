
function setDate() {
  const now = new Date();
  
  
  // ! seconds
  const secondHand = document.querySelector(".second-hand");
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg )`;
  
  //  ! minutes
  const minHand = document.querySelector(".min-hand");
  const minutes = now.getMinutes();
  const minDegrees = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegrees}deg )`;
  
  //  ! hours
  const hoursHand = document.querySelector(".hour-hand");
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg )`;

}

setInterval(setDate, 1000);

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondsDegrees = returnDegrees(seconds, 60);
  const minutesDegrees = returnDegrees(minute, 60);
  const hoursDegrees = returnDegrees(hour, 12);

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

function returnDegrees(integerNumber, factorNumber) {
  return (integerNumber / factorNumber) * 360;
}

 setInterval(setDate, 1000);
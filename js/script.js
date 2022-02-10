let countDownDate = new Date("2022-06-24T18:00:00").getTime(); // Set the date we're counting down to

const x = setInterval(function () {
  // Update the count down every 1 second

  let now = new Date().getTime(); // Get today's date and time
  let distance = countDownDate - now; // Find the distance between now and the count down date

  let days = Math.floor(distance / (1000 * 60 * 60 * 24)); // Time calculations for days, hours, minutes and seconds
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";     // Display the result in the element with id="demo"
  const daysLocation = document.querySelector(".days .numbers");
  daysLocation.innerText = days;
  const hoursLocation = document.querySelector(".hours .numbers");
  hoursLocation.innerText = hours;
  const minutesLocation = document.querySelector(".minutes .numbers");
  minutesLocation.innerText = minutes;
  const secondsLocation = document.querySelector(".seconds .numbers");
  secondsLocation.innerText = seconds;

  if (distance < 0) {
    // If the count down is finished, write some text
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function toggleLanguagePL() {
  const ticketsLocation = document.querySelector(".tickets a");
  ticketsLocation.innerText = "Bilety";
  const statuteLocation = document.querySelector(".statute a");
  statuteLocation.innerText = "Regulamin";
}

document.querySelector(".pl").addEventListener("click", toggleLanguagePL);

function toggleLanguageEN() {
  const ticketsLocation = document.querySelector(".tickets a");
  ticketsLocation.innerText = "Tickets";
  const statuteLocation = document.querySelector(".statute a");
  statuteLocation.innerText = "Terms and Conditions";
}

document.querySelector(".en").addEventListener("click", toggleLanguageEN);

// LIGHTBOX

const lightbox = document.querySelector("#lightbox");
const closeBtn = lightbox.querySelector(".close-btn");
const statuteBtn = document.querySelector(".statute");
const statuteTextBoxPL = lightbox.querySelector(".text-box-pl");
const statuteTextBoxEN = lightbox.querySelector(".text-box-en");

statuteBtn.addEventListener("click", () => {
  const statusHidePL = lightbox
    .querySelector(".text-box-pl")
    .classList.contains("hide");
  const statusHideEN = lightbox
    .querySelector(".text-box-en")
    .classList.contains("hide");

  lightbox.classList.add("active");
  let statuteTitle = document.querySelector(".statute a").innerText;

  if (statuteTitle == "REGULAMIN") {
    statusHidePL && statuteTextBoxPL.classList.remove("hide");
    !statusHideEN && statuteTextBoxEN.classList.add("hide");
    statuteTextBoxPL.scrollTop = 0;
  } else if (statuteTitle == "TERMS AND CONDITIONS") {
    !statusHidePL && statuteTextBoxPL.classList.add("hide");
    statusHideEN && statuteTextBoxEN.classList.remove("hide");
    statuteTextBoxEN.scrollTop = 0;
  }
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

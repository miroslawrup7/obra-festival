// COUNTDOWN

function countdown() {
  let countDownDate = new Date("2022-06-24T18:00:00").getTime();

  const x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".days .numbers").innerText = days;
    document.querySelector(".hours .numbers").innerText = hours;
    document.querySelector(".minutes .numbers").innerText = minutes;
    document.querySelector(".seconds .numbers").innerText = seconds;

    let statuteTitle = document.querySelector(".statute a").innerText;

    let daysDesc = document.querySelector(".counter .days .description");
    let hoursDesc = document.querySelector(".counter .hours .description");
    let minutesDesc = document.querySelector(".counter .minutes .description");
    let secondsDesc = document.querySelector(".counter .seconds .description");

    if (statuteTitle == "REGULAMIN") {
      days === 1 && (daysDesc.innerText = "dzień");
      (days > 1 || days === 0) && (daysDesc.innerText = "dni");
      hours === 1 && (hoursDesc.innerText = "godzina");
      hours > 1 && hours < 5 && (hoursDesc.innerText = "godziny");
      (hours === 5 || hours > 5 || hours === 0) &&
        (hoursDesc.innerText = "godzin");
      minutes === 1 && (minutesDesc.innerText = "minuta");
      minutes > 1 && minutes < 5 && (minutesDesc.innerText = "minuty");
      (minutes === 5 || minutes > 5 || minutes === 0) &&
        (minutesDesc.innerText = "minut");
      seconds === 1 && (secondsDesc.innerText = "sekunda");
      seconds > 1 && seconds < 5 && (secondsDesc.innerText = "sekundy");
      (seconds === 5 || seconds > 5 || seconds === 0) &&
        (secondsDesc.innerText = "sekund");
    } else if (statuteTitle == "TERMS AND CONDITIONS") {
      days === 1 && (daysDesc.innerText = "day");
      (days > 1 || days === 0) && (daysDesc.innerText = "days");
      hours === 1 && (hoursDesc.innerText = "hour");
      (hours > 1 || hours === 0) && (hoursDesc.innerText = "hours");
      minutes === 1 && (minutesDesc.innerText = "minute");
      (minutes > 1 || minutes === 0) && (minutesDesc.innerText = "minutes");
      seconds === 1 && (secondsDesc.innerText = "minute");
      (seconds > 1 || seconds === 0) && (secondsDesc.innerText = "minutes");
    }

    if (distance < 0) {
      // If the count down is finished, write some text
      clearInterval(x);
      // document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
}

// LANGUAGE

function toggleLanguagePL() {
  document.querySelector(".tickets a").innerText = "Bilety";
  document.querySelector(".statute a").innerText = "Regulamin";
  countdown();
}

document.querySelector(".pl").addEventListener("click", toggleLanguagePL);

function toggleLanguageEN() {
  document.querySelector(".tickets a").innerText = "Tickets";
  document.querySelector(".statute a").innerText = "Terms and Conditions";
  countdown();
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

countdown();

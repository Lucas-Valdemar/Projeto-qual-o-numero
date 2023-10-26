const btn = document.querySelector("#submit");
const form = document.querySelector("#digite");
const dtx = document.querySelector("#dtx");
const LEDS = document.querySelector(".LEDS");
const LED3 = document.querySelector(".ledc");
const LED2 = document.querySelector(".ledb");
const LED1 = document.querySelector(".leda");
const stscode = document.querySelector(".stscode");
const url =
  "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300";
const again = document.querySelector(".again");

three_digit_number = null;
hundreds = null;
tens = null;
ones = null;
data = null;
palpite = null;
again.style.display = "none";

const led1a = document.querySelector(".led1a");
const led2a = document.querySelector(".led2a");
const led3a = document.querySelector(".led3a");
const led4a = document.querySelector(".led4a");
const led4aR = document.querySelector(".led4aR");
const led4aL = document.querySelector(".led4aL");
const led5a = document.querySelector(".led5a");
const led6a = document.querySelector(".led6a");
const led7a = document.querySelector(".led7a");

const led1b = document.querySelector(".led1b");
const led2b = document.querySelector(".led2b");
const led3b = document.querySelector(".led3b");
const led4b = document.querySelector(".led4b");
const led4bR = document.querySelector(".led4bR");
const led4bL = document.querySelector(".led4bL");
const led5b = document.querySelector(".led5b");
const led6b = document.querySelector(".led6b");
const led7b = document.querySelector(".led7b");

const led1c = document.querySelector(".led1c");
const led2c = document.querySelector(".led2c");
const led3c = document.querySelector(".led3c");
const led4c = document.querySelector(".led4c");
const led4cR = document.querySelector(".led4cR");
const led4cL = document.querySelector(".led4cL");
const led5c = document.querySelector(".led5c");
const led6c = document.querySelector(".led6c");
const led7c = document.querySelector(".led7c");

if (palpite == null) {
  stscode.style.display = "none";
  led1a.style.borderTopColor = "#262a34";
  led2a.style.borderLeftColor = "#262a34";
  led3a.style.borderRightColor = "#262a34";
  led5a.style.borderLeftColor = "#262a34";
  led6a.style.borderRightColor = "#262a34";
  led7a.style.borderBottomColor = "#262a34";
}
LED2.remove();
LED3.remove();

function disablepalpite() {
  btn.disabled = true;
  form.disabled = true;
  dtx.disabled = true;
}
function LEDERROR() {
  led1a.style.borderTopColor = "#cc3300";
  led3a.style.borderRightColor = "#cc3300";
  led4a.style.backgroundColor = "#cc3300";
  led4aR.style.borderLeftColor = "#cc3300";
  led4aL.style.borderRightColor = "#cc3300";
  led5a.style.borderLeftColor = "#cc3300";
  led7a.style.borderBottomColor = "#cc3300";

  led1b.style.borderTopColor = "#cc3300";
  led2b.style.borderLeftColor = "#cc3300";
  led3b.style.borderRightColor = "#cc3300";
  led5b.style.borderLeftColor = "#cc3300";
  led6b.style.borderRightColor = "#cc3300";
  led7b.style.borderBottomColor = "#cc3300";

  led1c.style.borderTopColor = "#cc3300";
  led2c.style.borderLeftColor = "#cc3300";
  led4c.style.background = "#cc3300";
  led4cR.style.borderLeftColor = "#cc3300";
  led4cL.style.borderRightColor = "#cc3300";
  led6c.style.borderRightColor = "#cc3300";
  led7c.style.borderBottomColor = "#cc3300";
}
function LEDGREEN() {
  if (ones == 1) {
    led3a.style.borderRightColor = "#32bf00";
    led6a.style.borderRightColor = "#32bf00";
  }
  if (ones == 2) {
    led1a.style.borderTopColor = "#32bf00";
    led3a.style.borderRightColor = "#32bf00";
    led4a.style.backgroundColor = "#32bf00";
    led4aR.style.borderLeftColor = "#32bf00";
    led4aL.style.borderRightColor = "#32bf00";
    led5a.style.borderLeftColor = "#32bf00";
    led7a.style.borderBottomColor = "#32bf00";
  }
  if (ones == 3) {
    led1a.style.borderTopColor = "#32bf00";
    led3a.style.borderRightColor = "#32bf00";
    led4a.style.background = "#32bf00";
    led4aR.style.borderLeftColor = "#32bf00";
    led4aL.style.borderRightColor = "#32bf00";
    led6a.style.borderRightColor = "#32bf00";
    led7a.style.borderBottomColor = "#32bf00";
  }
  if (ones == 4) {
    led2a.style.borderLeftColor = "#32bf00";
    led3a.style.borderRightColor = "#32bf00";
    led4a.style.background = "#32bf00";
    led4aR.style.borderLeftColor = "#32bf00";
    led4aL.style.borderRightColor = "#32bf00";
    led6a.style.borderRightColor = "#32bf00";
  }
  if (ones == 5) {
    led1a.style.borderTopColor = "#32bf00";
    led2a.style.borderLeftColor = "#32bf00";
    led4a.style.background = "#32bf00";
    led4aR.style.borderLeftColor = "#32bf00";
    led4aL.style.borderRightColor = "#32bf00";
    led6a.style.borderRightColor = "#32bf00";
    led7a.style.borderBottomColor = "#32bf00";
  }
  if (ones == 6) {
    led1a.style.borderTopColor = "#32bf00";
    led2a.style.borderLeftColor = "#32bf00";
    led4a.style.background = "#32bf00";
    led4aR.style.borderLeftColor = "#32bf00";
    led4aL.style.borderRightColor = "#32bf00";
    led5a.style.borderLeftColor = "#32bf00";
    led6a.style.borderRightColor = "#32bf00";
    led7a.style.borderBottomColor = "#32bf00";
  }
  if (ones == 7) {
    led1a.style.borderTopColor = "#32bf00";
    led3a.style.borderRightColor = "#32bf00";
    led6a.style.borderRightColor = "#32bf00";
  }
  if (ones == 8) {
    led1a.style.borderTopColor = "#32bf00";
    led2a.style.borderLeftColor = "#32bf00";
    led3a.style.borderRightColor = "#32bf00";
    led4a.style.background = "#32bf00";
    led4aR.style.borderLeftColor = "#32bf00";
    led4aL.style.borderRightColor = "#32bf00";
    led5a.style.borderLeftColor = "#32bf00";
    led6a.style.borderRightColor = "#32bf00";
    led7a.style.borderBottomColor = "#32bf00";
  }
  if (ones == 9) {
    led1a.style.borderTopColor = "#32bf00";
    led2a.style.borderLeftColor = "#32bf00";
    led3a.style.borderRightColor = "#32bf00";
    led4a.style.background = "#32bf00";
    led4aR.style.borderLeftColor = "#32bf00";
    led4aL.style.borderRightColor = "#32bf00";
    led6a.style.borderRightColor = "#32bf00";
    led7a.style.borderBottomColor = "#32bf00";
  }
  if (ones == 0) {
    led1a.style.borderTopColor = "#32bf00";
    led2a.style.borderLeftColor = "#32bf00";
    led3a.style.borderRightColor = "#32bf00";
    led5a.style.borderLeftColor = "#32bf00";
    led6a.style.borderRightColor = "#32bf00";
    led7a.style.borderBottomColor = "#32bf00";
  }

  if (tens == 1) {
    led3b.style.borderRightColor = "#32bf00";
    led6b.style.borderRightColor = "#32bf00";
  }
  if (tens == 2) {
    led1b.style.borderTopColor = "#32bf00";
    led3b.style.borderRightColor = "#32bf00";
    led4b.style.background = "#32bf00";
    led4bR.style.borderLeftColor = "#32bf00";
    led4bL.style.borderRightColor = "#32bf00";
    led5b.style.borderLeftColor = "#32bf00";
    led7b.style.borderBottomColor = "#32bf00";
  }
  if (tens == 3) {
    led1b.style.borderTopColor = "#32bf00";
    led3b.style.borderRightColor = "#32bf00";
    led4b.style.background = "#32bf00";
    led4bR.style.borderLeftColor = "#32bf00";
    led4bL.style.borderRightColor = "#32bf00";
    led6b.style.borderRightColor = "#32bf00";
    led7b.style.borderBottomColor = "#32bf00";
  }
  if (tens == 4) {
    led2b.style.borderLeftColor = "#32bf00";
    led3b.style.borderRightColor = "#32bf00";
    led4b.style.background = "#32bf00";
    led4bR.style.borderLeftColor = "#32bf00";
    led4bL.style.borderRightColor = "#32bf00";
    led6b.style.borderRightColor = "#32bf00";
  }
  if (tens == 5) {
    led1b.style.borderTopColor = "#32bf00";
    led2b.style.borderLeftColor = "#32bf00";
    led4b.style.background = "#32bf00";
    led4bR.style.borderLeftColor = "#32bf00";
    led4bL.style.borderRightColor = "#32bf00";
    led6b.style.borderRightColor = "#32bf00";
    led7b.style.borderBottomColor = "#32bf00";
  }
  if (tens == 6) {
    led1b.style.borderTopColor = "#32bf00";
    led2b.style.borderLeftColor = "#32bf00";
    led4b.style.background = "#32bf00";
    led4bR.style.borderLeftColor = "#32bf00";
    led4bL.style.borderRightColor = "#32bf00";
    led5b.style.borderLeftColor = "#32bf00";
    led6b.style.borderRightColor = "#32bf00";
    led7b.style.borderBottomColor = "#32bf00";
  }
  if (tens == 7) {
    led1b.style.borderTopColor = "#32bf00";
    led3b.style.borderRightColor = "#32bf00";
    led6b.style.borderRightColor = "#32bf00";
  }
  if (tens == 8) {
    led1b.style.borderTopColor = "#32bf00";
    led2b.style.borderLeftColor = "#32bf00";
    led3b.style.borderRightColor = "#32bf00";
    led4b.style.background = "#32bf00";
    led4bR.style.borderLeftColor = "#32bf00";
    led4bL.style.borderRightColor = "#32bf00";
    led5b.style.borderLeftColor = "#32bf00";
    led6b.style.borderRightColor = "#32bf00";
    led7b.style.borderBottomColor = "#32bf00";
  }
  if (tens == 9) {
    led1b.style.borderTopColor = "#32bf00";
    led2b.style.borderLeftColor = "#32bf00";
    led3b.style.borderRightColor = "#32bf00";
    led4b.style.background = "#32bf00";
    led4bR.style.borderLeftColor = "#32bf00";
    led4bL.style.borderRightColor = "#32bf00";
    led6b.style.borderRightColor = "#32bf00";
    led7b.style.borderBottomColor = "#32bf00";
  }
  if (tens == 0) {
    led1b.style.borderTopColor = "#32bf00";
    led2b.style.borderLeftColor = "#32bf00";
    led3b.style.borderRightColor = "#32bf00";
    led5b.style.borderLeftColor = "#32bf00";
    led6b.style.borderRightColor = "#32bf00";
    led7b.style.borderBottomColor = "#32bf00";
  }

  if (hundreds == 1) {
    led3c.style.borderRightColor = "#32bf00";
    led6c.style.borderRightColor = "#32bf00";
  }
  if (hundreds == 2) {
    led1c.style.borderTopColor = "#32bf00";
    led3c.style.borderRightColor = "#32bf00";
    led4c.style.background = "#32bf00";
    led4cR.style.borderLeftColor = "#32bf00";
    led4cL.style.borderRightColor = "#32bf00";
    led5c.style.borderLeftColor = "#32bf00";
    led7c.style.borderBottomColor = "#32bf00";
  }
  if (hundreds == 3) {
    led1c.style.borderTopColor = "#32bf00";
    led3c.style.borderRightColor = "#32bf00";
    led4c.style.background = "#32bf00";
    led4cR.style.borderLeftColor = "#32bf00";
    led4cL.style.borderRightColor = "#32bf00";
    led6c.style.borderRightColor = "#32bf00";
    led7c.style.borderBottomColor = "#32bf00";
  }
  if (hundreds == 4) {
    led2c.style.borderLeftColor = "#32bf00";
    led3c.style.borderRightColor = "#32bf00";
    led4c.style.background = "#32bf00";
    led4cR.style.borderLeftColor = "#32bf00";
    led4cL.style.borderRightColor = "#32bf00";
    led6c.style.borderRightColor = "#32bf00";
  }
  if (hundreds == 5) {
    led1c.style.borderTopColor = "#32bf00";
    led2c.style.borderLeftColor = "#32bf00";
    led4c.style.background = "#32bf00";
    led4cR.style.borderLeftColor = "#32bf00";
    led4cL.style.borderRightColor = "#32bf00";
    led6c.style.borderRightColor = "#32bf00";
    led7c.style.borderBottomColor = "#32bf00";
  }
  if (hundreds == 6) {
    led1c.style.borderTopColor = "#32bf00";
    led2c.style.borderLeftColor = "#32bf00";
    led4c.style.background = "#32bf00";
    led4cR.style.borderLeftColor = "#32bf00";
    led4cL.style.borderRightColor = "#32bf00";
    led5c.style.borderLeftColor = "#32bf00";
    led6c.style.borderRightColor = "#32bf00";
    led7c.style.borderBottomColor = "#32bf00";
  }
  if (hundreds == 7) {
    led1c.style.borderTopColor = "#32bf00";
    led3c.style.borderRightColor = "#32bf00";
    led6c.style.borderRightColor = "#32bf00";
  }
  if (hundreds == 8) {
    led1c.style.borderTopColor = "#32bf00";
    led2c.style.borderLeftColor = "#32bf00";
    led3c.style.borderRightColor = "#32bf00";
    led4c.style.background = "#32bf00";
    led4cR.style.borderLeftColor = "#32bf00";
    led4cL.style.borderRightColor = "#32bf00";
    led5c.style.borderLeftColor = "#32bf00";
    led6c.style.borderRightColor = "#32bf00";
    led7c.style.borderBottomColor = "#32bf00";
  }
  if (hundreds == 9) {
    led1c.style.borderTopColor = "#32bf00";
    led2c.style.borderLeftColor = "#32bf00";
    led3c.style.borderRightColor = "#32bf00";
    led4c.style.background = "#32bf00";
    led4cR.style.borderLeftColor = "#32bf00";
    led4cL.style.borderRightColor = "#32bf00";
    led6c.style.borderRightColor = "#32bf00";
    led7c.style.borderBottomColor = "#32bf00";
  }
  if (hundreds == 0) {
    led1c.style.borderTopColor = "#32bf00";
    led2c.style.borderLeftColor = "#32bf00";
    led3c.style.borderRightColor = "#32bf00";
    led5c.style.borderLeftColor = "#32bf00";
    led6c.style.borderRightColor = "#32bf00";
    led7c.style.borderBottomColor = "#32bf00";
  }
}
function algorithm() {
  three_digit_number = parseInt(palpite);
  ones = three_digit_number % 10;
  tens = (three_digit_number % 100) - ones;
  hundreds = (three_digit_number % 1000) - tens - ones;
  hundreds = hundreds / 100;
  tens = tens / 10;
  hundreds.value = hundreds;
  ones.value = ones;
  tens.value = tens;

  console.log(hundreds, tens, ones);
}
function ledA() {
  led1a.style.borderTopColor = "#ddd";
  led2a.style.borderLeftColor = "#ddd";
  led3a.style.borderRightColor = "#ddd";
  led4a.style.background = "#ddd";
  led4aR.style.borderLeftColor = "#ddd";
  led4aL.style.borderRightColor = "#ddd";
  led5a.style.borderLeftColor = "#ddd";
  led6a.style.borderRightColor = "#ddd";
  led7a.style.borderBottomColor = "#ddd";

  if (ones == 1) {
    led3a.style.borderRightColor = "#262a34";
    led6a.style.borderRightColor = "#262a34";
  }
  if (ones == 2) {
    led1a.style.borderTopColor = "#262a34";
    led3a.style.borderRightColor = "#262a34";
    led4a.style.backgroundColor = "#262a34";
    led4aR.style.borderLeftColor = "#262a34";
    led4aL.style.borderRightColor = "#262a34";
    led5a.style.borderLeftColor = "#262a34";
    led7a.style.borderBottomColor = "#262a34";
  }
  if (ones == 3) {
    led1a.style.borderTopColor = "#262a34";
    led3a.style.borderRightColor = "#262a34";
    led4a.style.background = "#262a34";
    led4aR.style.borderLeftColor = "#262a34";
    led4aL.style.borderRightColor = "#262a34";
    led6a.style.borderRightColor = "#262a34";
    led7a.style.borderBottomColor = "#262a34";
  }
  if (ones == 4) {
    led2a.style.borderLeftColor = "#262a34";
    led3a.style.borderRightColor = "#262a34";
    led4a.style.background = "#262a34";
    led4aR.style.borderLeftColor = "#262a34";
    led4aL.style.borderRightColor = "#262a34";
    led6a.style.borderRightColor = "#262a34";
  }
  if (ones == 5) {
    led1a.style.borderTopColor = "#262a34";
    led2a.style.borderLeftColor = "#262a34";
    led4a.style.background = "#262a34";
    led4aR.style.borderLeftColor = "#262a34";
    led4aL.style.borderRightColor = "#262a34";
    led6a.style.borderRightColor = "#262a34";
    led7a.style.borderBottomColor = "#262a34";
  }
  if (ones == 6) {
    led1a.style.borderTopColor = "#262a34";
    led2a.style.borderLeftColor = "#262a34";
    led4a.style.background = "#262a34";
    led4aR.style.borderLeftColor = "#262a34";
    led4aL.style.borderRightColor = "#262a34";
    led5a.style.borderLeftColor = "#262a34";
    led6a.style.borderRightColor = "#262a34";
    led7a.style.borderBottomColor = "#262a34";
  }
  if (ones == 7) {
    led1a.style.borderTopColor = "#262a34";
    led3a.style.borderRightColor = "#262a34";
    led6a.style.borderRightColor = "#262a34";
  }
  if (ones == 8) {
    led1a.style.borderTopColor = "#262a34";
    led2a.style.borderLeftColor = "#262a34";
    led3a.style.borderRightColor = "#262a34";
    led4a.style.background = "#262a34";
    led4aR.style.borderLeftColor = "#262a34";
    led4aL.style.borderRightColor = "#262a34";
    led5a.style.borderLeftColor = "#262a34";
    led6a.style.borderRightColor = "#262a34";
    led7a.style.borderBottomColor = "#262a34";
  }
  if (ones == 9) {
    led1a.style.borderTopColor = "#262a34";
    led2a.style.borderLeftColor = "#262a34";
    led3a.style.borderRightColor = "#262a34";
    led4a.style.background = "#262a34";
    led4aR.style.borderLeftColor = "#262a34";
    led4aL.style.borderRightColor = "#262a34";
    led6a.style.borderRightColor = "#262a34";
    led7a.style.borderBottomColor = "#262a34";
  }
  if (ones == 0) {
    led1a.style.borderTopColor = "#262a34";
    led2a.style.borderLeftColor = "#262a34";
    led3a.style.borderRightColor = "#262a34";
    led5a.style.borderLeftColor = "#262a34";
    led6a.style.borderRightColor = "#262a34";
    led7a.style.borderBottomColor = "#262a34";
  }
}
function ledB() {
  led1b.style.borderTopColor = "#ddd";
  led2b.style.borderLeftColor = "#ddd";
  led3b.style.borderRightColor = "#ddd";
  led4b.style.background = "#ddd";
  led4bR.style.borderLeftColor = "#ddd";
  led4bL.style.borderRightColor = "#ddd";
  led5b.style.borderLeftColor = "#ddd";
  led6b.style.borderRightColor = "#ddd";
  led7b.style.borderBottomColor = "#ddd";

  if (tens == 1) {
    led3b.style.borderRightColor = "#262a34";
    led6b.style.borderRightColor = "#262a34";
  }
  if (tens == 2) {
    led1b.style.borderTopColor = "#262a34";
    led3b.style.borderRightColor = "#262a34";
    led4b.style.background = "#262a34";
    led4bR.style.borderLeftColor = "#262a34";
    led4bL.style.borderRightColor = "#262a34";
    led5b.style.borderLeftColor = "#262a34";
    led7b.style.borderBottomColor = "#262a34";
  }
  if (tens == 3) {
    led1b.style.borderTopColor = "#262a34";
    led3b.style.borderRightColor = "#262a34";
    led4b.style.background = "#262a34";
    led4bR.style.borderLeftColor = "#262a34";
    led4bL.style.borderRightColor = "#262a34";
    led6b.style.borderRightColor = "#262a34";
    led7b.style.borderBottomColor = "#262a34";
  }
  if (tens == 4) {
    led2b.style.borderLeftColor = "#262a34";
    led3b.style.borderRightColor = "#262a34";
    led4b.style.background = "#262a34";
    led4bR.style.borderLeftColor = "#262a34";
    led4bL.style.borderRightColor = "#262a34";
    led6b.style.borderRightColor = "#262a34";
  }
  if (tens == 5) {
    led1b.style.borderTopColor = "#262a34";
    led2b.style.borderLeftColor = "#262a34";
    led4b.style.background = "#262a34";
    led4bR.style.borderLeftColor = "#262a34";
    led4bL.style.borderRightColor = "#262a34";
    led6b.style.borderRightColor = "#262a34";
    led7b.style.borderBottomColor = "#262a34";
  }
  if (tens == 6) {
    led1b.style.borderTopColor = "#262a34";
    led2b.style.borderLeftColor = "#262a34";
    led4b.style.background = "#262a34";
    led4bR.style.borderLeftColor = "#262a34";
    led4bL.style.borderRightColor = "#262a34";
    led5b.style.borderLeftColor = "#262a34";
    led6b.style.borderRightColor = "#262a34";
    led7b.style.borderBottomColor = "#262a34";
  }
  if (tens == 7) {
    led1b.style.borderTopColor = "#262a34";
    led3b.style.borderRightColor = "#262a34";
    led6b.style.borderRightColor = "#262a34";
  }
  if (tens == 8) {
    led1b.style.borderTopColor = "#262a34";
    led2b.style.borderLeftColor = "#262a34";
    led3b.style.borderRightColor = "#262a34";
    led4b.style.background = "#262a34";
    led4bR.style.borderLeftColor = "#262a34";
    led4bL.style.borderRightColor = "#262a34";
    led5b.style.borderLeftColor = "#262a34";
    led6b.style.borderRightColor = "#262a34";
    led7b.style.borderBottomColor = "#262a34";
  }
  if (tens == 9) {
    led1b.style.borderTopColor = "#262a34";
    led2b.style.borderLeftColor = "#262a34";
    led3b.style.borderRightColor = "#262a34";
    led4b.style.background = "#262a34";
    led4bR.style.borderLeftColor = "#262a34";
    led4bL.style.borderRightColor = "#262a34";
    led6b.style.borderRightColor = "#262a34";
    led7b.style.borderBottomColor = "#262a34";
  }
  if (tens == 0) {
    led1b.style.borderTopColor = "#262a34";
    led2b.style.borderLeftColor = "#262a34";
    led3b.style.borderRightColor = "#262a34";
    led5b.style.borderLeftColor = "#262a34";
    led6b.style.borderRightColor = "#262a34";
    led7b.style.borderBottomColor = "#262a34";
  }
}
function ledC() {
  led1c.style.borderTopColor = "#ddd";
  led2c.style.borderLeftColor = "#ddd";
  led3c.style.borderRightColor = "#ddd";
  led4c.style.background = "#ddd";
  led4cR.style.borderLeftColor = "#ddd";
  led4cL.style.borderRightColor = "#ddd";
  led5c.style.borderLeftColor = "#ddd";
  led6c.style.borderRightColor = "#ddd";
  led7c.style.borderBottomColor = "#ddd";

  if (hundreds == 1) {
    led3c.style.borderRightColor = "#262a34";
    led6c.style.borderRightColor = "#262a34";
  }
  if (hundreds == 2) {
    led1c.style.borderTopColor = "#262a34";
    led3c.style.borderRightColor = "#262a34";
    led4c.style.background = "#262a34";
    led4cR.style.borderLeftColor = "#262a34";
    led4cL.style.borderRightColor = "#262a34";
    led5c.style.borderLeftColor = "#262a34";
    led7c.style.borderBottomColor = "#262a34";
  }
  if (hundreds == 3) {
    led1c.style.borderTopColor = "#262a34";
    led3c.style.borderRightColor = "#262a34";
    led4c.style.background = "#262a34";
    led4cR.style.borderLeftColor = "#262a34";
    led4cL.style.borderRightColor = "#262a34";
    led6c.style.borderRightColor = "#262a34";
    led7c.style.borderBottomColor = "#262a34";
  }
  if (hundreds == 4) {
    led2c.style.borderLeftColor = "#262a34";
    led3c.style.borderRightColor = "#262a34";
    led4c.style.background = "#262a34";
    led4cR.style.borderLeftColor = "#262a34";
    led4cL.style.borderRightColor = "#262a34";
    led6c.style.borderRightColor = "#262a34";
  }
  if (hundreds == 5) {
    led1c.style.borderTopColor = "#262a34";
    led2c.style.borderLeftColor = "#262a34";
    led4c.style.background = "#262a34";
    led4cR.style.borderLeftColor = "#262a34";
    led4cL.style.borderRightColor = "#262a34";
    led6c.style.borderRightColor = "#262a34";
    led7c.style.borderBottomColor = "#262a34";
  }
  if (hundreds == 6) {
    led1c.style.borderTopColor = "#262a34";
    led2c.style.borderLeftColor = "#262a34";
    led4c.style.background = "#262a34";
    led4cR.style.borderLeftColor = "#262a34";
    led4cL.style.borderRightColor = "#262a34";
    led5c.style.borderLeftColor = "#262a34";
    led6c.style.borderRightColor = "#262a34";
    led7c.style.borderBottomColor = "#262a34";
  }
  if (hundreds == 7) {
    led1c.style.borderTopColor = "#262a34";
    led3c.style.borderRightColor = "#262a34";
    led6c.style.borderRightColor = "#262a34";
  }
  if (hundreds == 8) {
    led1c.style.borderTopColor = "#262a34";
    led2c.style.borderLeftColor = "#262a34";
    led3c.style.borderRightColor = "#262a34";
    led4c.style.background = "#262a34";
    led4cR.style.borderLeftColor = "#262a34";
    led4cL.style.borderRightColor = "#262a34";
    led5c.style.borderLeftColor = "#262a34";
    led6c.style.borderRightColor = "#262a34";
    led7c.style.borderBottomColor = "#262a34";
  }
  if (hundreds == 9) {
    led1c.style.borderTopColor = "#262a34";
    led2c.style.borderLeftColor = "#262a34";
    led3c.style.borderRightColor = "#262a34";
    led4c.style.background = "#262a34";
    led4cR.style.borderLeftColor = "#262a34";
    led4cL.style.borderRightColor = "#262a34";
    led6c.style.borderRightColor = "#262a34";
    led7c.style.borderBottomColor = "#262a34";
  }
  if (hundreds == 0) {
    led1c.style.borderTopColor = "#262a34";
    led2c.style.borderLeftColor = "#262a34";
    led3c.style.borderRightColor = "#262a34";
    led5c.style.borderLeftColor = "#262a34";
    led6c.style.borderRightColor = "#262a34";
    led7c.style.borderBottomColor = "#262a34";
  }
}
async function getAllPosts() {
  const response = await fetch(url);

  console.log(response);
  data = await response.json();

  console.log(data);

  if (data.StatusCode == 502) {
    stscode.style.display = "";
    stscode.textContent = "ERRO";
    stscode.style.color = "#cc3300";
    palpite = data.StatusCode;
    LEDSSHOW();
    algorithm();
    ledA();
    ledB();
    ledC();
    LEDERROR();
    disablepalpite();
    again.style.display = "";
  }
}
function SobreStatus() {
  if (palpite < data.value) {
    stscode.style.display = "";
    stscode.textContent = "É maior";
    stscode.style.color = "#ff6600";
  }
  if (palpite > data.value) {
    stscode.style.display = "";
    stscode.textContent = "É menor";
    stscode.style.color = "#ff6600";
  }
  if (palpite == data.value) {
    stscode.style.display = "";
    stscode.textContent = "Você acertou!!!!";
    stscode.style.color = "#32bf00";
  }
}
function LEDSSHOW() {
  LED1.remove();
  LED2.remove();
  LED3.remove();
  if (palpite < 10) {
    LEDS.appendChild(LED1);
  }
  if (palpite > 9 && palpite < 100) {
    LEDS.appendChild(LED2);
    LEDS.appendChild(LED1);
  }
  if (palpite > 99) {
    LEDS.appendChild(LED3);
    LEDS.appendChild(LED2);
    LEDS.appendChild(LED1);
  }
}

getAllPosts();

btn.addEventListener("click", function handleSubmit(e) {
  e.preventDefault();

  palpite = +document.querySelector("#dtx").value;

  SobreStatus();
  LEDSSHOW();
  algorithm();
  ledA();
  ledB();
  ledC();

  if (palpite == data.value) {
    LEDGREEN();
    disablepalpite();
    again.style.display = "";
  }
  form.reset();
});

again.addEventListener("click", function handleSubmit(e) {
  e.preventDefault();
  location.reload();
  return false;
});

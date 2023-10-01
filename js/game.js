let canvas;
let ctx;
let world;
let keyboard = new Keyboard();
keys = [38, 37, 39, 68, 32];

function onload() {
    for (let i = 0; i < keys.length; i++) {
        const element = keys[i];
        document.getElementById(`key${i}`).innerHTML = eventCode(element);
    }
}

function eventCode(key) {
    const myKey = String.fromCharCode(key);
  const myEvent = new KeyboardEvent("keydown", { code: myKey });
  console.log(myEvent.key)
}

function newKey() {
    alert('drücken sie eine taste');
    document.addEventListener('keydown', function(event) {
        toggleClass('keyoverlay', 'none');
        console.log(event.key);
        
      });
}

function toggleClass(element, className) {
  document.getElementById(element).classList.toggle(className);
}

function init() {
  document.getElementById(
    "gameboard"
  ).innerHTML = `<canvas id="canvas" width="720p" height="480"></canvas>`;
  toggleClass("main-menu", "none");
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  ctx = canvas.getContext("2d");
}

// prüft ob eine Taste gedrückt wird
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 37) {
    keyboard.LEFT = true;
  }
  if (event.keyCode === 38) {
    keyboard.UP = true;
  }
  if (event.keyCode === 39) {
    keyboard.RIGHT = true;
  }
  if (event.keyCode === 40) {
    keyboard.DOWN = true;
  }
  if (event.keyCode === 32) {
    keyboard.SPACE = true;
  }
  if (event.keyCode === 68) {
    keyboard.D = true;
  }
});

// prüft ob die jeweilige Taste losgelassen wird
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 37) {
    keyboard.LEFT = false;
  }
  if (event.keyCode === 38) {
    keyboard.UP = false;
  }
  if (event.keyCode === 39) {
    keyboard.RIGHT = false;
  }
  if (event.keyCode === 40) {
    keyboard.DOWN = false;
  }
  if (event.keyCode === 32) {
    keyboard.SPACE = false;
  }
  if (event.keyCode === 68) {
    keyboard.D = false;
  }
});

// das spiel neustarten
function restartGame() {
  document.getElementById("gameboard").innerHTML = ``;
  document.getElementById("start-button").innerHTML = ``;
}

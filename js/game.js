let canvas;
let ctx;
let world;
let audioElements = [];
let intervalIds = []
let keyboard = new Keyboard();
keys = [38, 39, 40, 37, 32, 68];

document.addEventListener("DOMContentLoaded", () => {
  volumeControl.addEventListener("input", () => {
    audioElements.forEach((audio) => {
      audio.volume = document.getElementById("volumeControl").value;
    });
  });
});

function getReadableKeyCode(keyCode) {
  var keyMap = {
    8: "Backspace",
    9: "Tab",
    13: "Enter",
    16: "Shift",
    17: "Ctrl",
    18: "Alt",
    19: "Pause/Break",
    20: "Caps Lock",
    27: "Escape",
    32: "Space",
    33: "Page Up",
    34: "Page Down",
    35: "End",
    36: "Home",
    37: "Left Arrow",
    38: "Up Arrow",
    39: "Right Arrow",
    40: "Down Arrow",
    45: "Insert",
    46: "Delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
    91: "Left Window Key",
    92: "Right Window Key",
    93: "Select Key",
    96: "Numpad 0",
    97: "Numpad 1",
    98: "Numpad 2",
    99: "Numpad 3",
    100: "Numpad 4",
    101: "Numpad 5",
    102: "Numpad 6",
    103: "Numpad 7",
    104: "Numpad 8",
    105: "Numpad 9",
    106: "Multiply",
    107: "Add",
    109: "Subtract",
    110: "Decimal Point",
    111: "Divide",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "Num Lock",
    145: "Scroll Lock",
    186: "Semicolon",
    187: "Equal Sign",
    188: "Comma",
    189: "Dash",
    190: "Period",
    191: "Forward Slash",
    192: "Grave Accent",
    219: "Open Bracket",
    220: "Backslash",
    221: "Close Bracket",
    222: "Single Quote",
  };
  return keyMap[keyCode] || "Unknown";
}

function onload() {
  for (let i = 0; i < keys.length; i++) {
    const keyCode = keys[i];
    document.getElementById(`key${i}`).innerHTML = getReadableKeyCode(keyCode);
  }
}

function newKey(i) {
  let element = document.getElementById("keyoverlay");
  element.innerHTML = `<div><input type="text" id="newKey" placeholder="geben Sie eine beliebige Taste ein"><div>`;
  toggleClass("keyoverlay", "none");

  // element.innerHTML = `${getReadableKeyCode(event.keyCode)}<br>mit Mausklick bestätigen`;
  // keys.splice(i, 1, event.keyCode);
  // document.getElementById(`key${i}`).value = getReadableKeyCode(keys[i]);
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

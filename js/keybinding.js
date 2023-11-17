let keys = [38, 39, 40, 37, 32, 68];

/**
 * let the keybinding readable
 * @param {any} keyCode - keyCode from keybinding
 * @returns {any} - keyCode in form from string
 */
function getReadableKeyCode(keyCode) {
  let keyMap = {
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

/**
 * set the new key on the menu from game and make it readable
 * @returns {any}
 */
function keybinding() {
  for (let i = 0; i < keys.length; i++) {
    let keyCode = keys[i];
    document.getElementById(`key${i}`).textContent =
      getReadableKeyCode(keyCode);
  }
}

/**
 * set the new key and perform the implementation 
 * @param {any} action - new key
 * @param {any} index - from key in menu
 * @returns {any} - set new key
 */
function newKey(action, index) {
  document.getElementById("keyoverlay").innerText = "Press a key ...";
  // Listen for a keydown event to capture the new key
  document.addEventListener("keydown", function (event) {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === event.keyCode && keys.indexOf(keys[i]) !== index) {
        document.getElementById("keyoverlay").innerText =
          "this button is already in use!";
        return; // Abort the function if the key is already used
      }
    }
    // Update the key binding for the specified action
    switch (action) {
      case "Go UP":
        document.getElementById("key0").textContent = getReadableKeyCode(
          event.keyCode
        );
        keys.splice(0, 1, event.keyCode);
        break;
      case "Go Right":
        document.getElementById("key1").textContent = getReadableKeyCode(
          event.keyCode
        );
        keys.splice(1, 1, event.keyCode);
        break;
      case "Go Down":
        document.getElementById("key2").textContent = getReadableKeyCode(
          event.keyCode
        );
        keys.splice(2, 1, event.keyCode);
        break;
      case "Go Left":
        document.getElementById("key3").textContent = getReadableKeyCode(
          event.keyCode
        );
        keys.splice(3, 1, event.keyCode);
        break;
      case "Slap Attack":
        document.getElementById("key4").textContent = getReadableKeyCode(
          event.keyCode
        );
        keys.splice(4, 1, event.keyCode);
        break;
      case "Blubber Attack":
        document.getElementById("key5").textContent = getReadableKeyCode(
          event.keyCode
        );
        keys.splice(5, 1, event.keyCode);
        break;
    }

    // Reset the background color and remove the keydown event listener
    toggleClass("keyoverlay", "none");
    document.removeEventListener("keydown", arguments.callee);
  });
}

/**
 * checks whether a key has been pressed and passes it on
 * @param {any} "keydown"
 * @param {any} function(event
 * @returns {any}
 */
document.addEventListener("keydown", function (event) {
  if (event.keyCode === keys[3]) {
    keyboard.LEFT = true;
  }
  if (event.keyCode === keys[0]) {
    keyboard.UP = true;
  }
  if (event.keyCode === keys[1]) {
    keyboard.RIGHT = true;
  }
  if (event.keyCode === keys[2]) {
    keyboard.DOWN = true;
  }
  if (event.keyCode === keys[4]) {
    keyboard.SPACE = true;
  }
  if (event.keyCode === keys[5]) {
    keyboard.D = true;
  }
});

/**
 * checks whether the respective key is released
 * @param {any} "keyup"
 * @param {any} function(event
 * @returns {any}
 */
document.addEventListener("keyup", function (event) {
  if (event.keyCode === keys[3]) {
    keyboard.LEFT = false;
  }
  if (event.keyCode === keys[0]) {
    keyboard.UP = false;
  }
  if (event.keyCode === keys[1]) {
    keyboard.RIGHT = false;
  }
  if (event.keyCode === keys[2]) {
    keyboard.DOWN = false;
  }
  if (event.keyCode === keys[4]) {
    keyboard.SPACE = false;
  }
  if (event.keyCode === keys[5]) {
    keyboard.D = false;
  }
});

/**
 * adds the mobile buttons and sets the properties
 * @returns {any}
 */
function mobileBtn() {
  document.getElementById('mobile-btn-left').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });
  document.getElementById('mobile-btn-left').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });
  document.getElementById('mobile-btn-right').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });
  document.getElementById('mobile-btn-right').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });
  document.getElementById('mobile-btn-up').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.UP = true;
  });
  document.getElementById('mobile-btn-up').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.UP = false;
  });
  document.getElementById('mobile-btn-down').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.DOWN = true;
  });
  document.getElementById('mobile-btn-down').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.DOWN = false;
  });
  document.getElementById('mobile-btn-blubber').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.D = true;
  });
  document.getElementById('mobile-btn-blubber').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.D = false;
  });
  document.getElementById('mobile-btn-slap').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });
  document.getElementById('mobile-btn-slap').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });
}
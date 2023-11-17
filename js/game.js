let canvas;
let ctx;
let world;
let audioElements = [];
let keyboard = new Keyboard();
let intervalIds = [];
let previousVolume = 0.3;
let fullScreen = false;
let dots = 0;
let allLoad = false;
let a = 0;


/**
 * load the mobile version and keybinding
 * @returns {any}
 */
async function onload() {
  await preLoad();
  checkHeightWidth();
  keybinding();
  mobileBtn();
  
}

/**
 * reset the game
 * @returns {any}
 */
function reset() {
  clearWindow();
  clearAllIntervals();
  stopAllSounds();
  deleteGame();
  startGame();
}

/**
 * close or toggle alle elements to have a clean window
 * @returns {any}
 */
function clearWindow() {
  toggleClass("main-menu", "none");
  document.getElementById("youLose").classList.add("none");
  document.getElementById("youWin").classList.add("none");
}

/**
 * let end all audio form audioElements
 * @returns {any}
 */
function stopAllSounds() {
  audioElements.forEach((audio) => { audio.pause() });
}

/**
 * let end all intervals
 * @returns {any}
 */
function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

/**
 * get the value from input from sound/volume slider to setAudio()
 */
document.addEventListener("DOMContentLoaded", () => {
  volumeControl.addEventListener("input", setAudio);
});

/**
 * set the volume for all audio elements from audioElements
 * @returns {any}
 */
function setAudio() {
  audioElements.forEach((audio) => {
    audio.volume = document.getElementById("volumeControl").value;
  });
}

/**
 * mute all sounds from the game
 * @returns {any}
 */
function mute() {
  let volume = document.getElementById("volumeControl");
  if (volume.value !== "0") {
    previousVolume = volume.value;
    volume.value = "0";
  } else {
    volume.value = previousVolume;
  }
  setAudio();
}

/**
 * to go from game back to menu
 * @returns {any}
 */
function backToMenu() {
  clearWindow();
  toggleClass("btn-game", "none");
  toggleClass("touch_move_btn", "none");
  toggleClass("touch_action_btn", "none");
  clearAllIntervals();
  stopAllSounds();
  deleteGame();
}

/**
 * toggle a class from id element
 * @param {any} element - an id from a element
 * @param {any} className - an class to toggle
 * @returns {any}
 */
function toggleClass(element, className) {
  document.getElementById(element).classList.toggle(className);
}

/**
 * start a new Game
 * @returns {any}
 */
async function startGame() {
  document.getElementById("gameboard").innerHTML = `<canvas id="canvas" width="720" height="480"></canvas>`;
  initLevel();
  initHud();
  toggleClass("main-menu", "none");
  canvas = document.getElementById("canvas");

  world = new World(canvas, keyboard);
  ctx = canvas.getContext("2d");
}

async function preLoad(){
  await loadImgElements();
  await loadAudioElements();
  allLoad = true;
  document.getElementById('loading-screen').style.display = 'none';
}

async function loadImgElements() {
  for (let i = 0; i < allImg.length; i++) {
    document.getElementById('loadingElement').innerHTML += `<img src='${allImg[i]}'>`;
    a++;
    await renderPercent();
  }
}

async function loadAudioElements() {
  for (let i = 0; i < allAudio.length; i++) {
    document.getElementById('loadingElement').innerHTML += `<audio controls preload="auto"><source src="${allAudio[i]}" type="audio/mpeg" /></audio>`;
    await renderPercent(i);
  }
}

function renderPercent(){
  return new Promise(resolve => {
    let loaderText = document.getElementById('loader');
    let precent = Math.floor(100 / (allImg.length + allAudio.length) * a + 1); 
    loaderText.innerHTML = `Loading ${precent} %`;
    setTimeout(() => {
      resolve(); 
    }, 0); 
  });
}

/**
 * delete the game
 * @returns {any}
 */
function deleteGame() {
  document.getElementById("try-again").classList.add("none");
  document.getElementById("gameboard").innerHTML = ``;
}

/**
 * set the fullscreen mode
 * @returns {any}
 */
function fullscreen() {
  let element = document.getElementById("fullscreen");
  if (!fullScreen) { enterFullscreen(element) }
  else { exitFullscreen() }
}

/**
 * enter the fullscreen mode
 * @param {any} element - canvas/play element
 * @returns {any}
 */
function enterFullscreen(element) {
  fullScreen = true;
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
}

/**
 * exit the fullscreen mode
 * @returns {any}
 */
function exitFullscreen() {
  fullScreen = false;
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

/**
 * check if window height > width
 * @returns {any}
 */
function checkHeightWidth() {
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;
  const mobileOverlay = document.getElementById('mobile-overlay')
  if (windowHeight > windowWidth) {
    mobileOverlay.classList.remove('none');
  } else {
    mobileOverlay.classList.add('none');
  }
}
window.addEventListener("resize", checkHeightWidth);

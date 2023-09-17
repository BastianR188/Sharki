let canvas;
let ctx;
let world;
let keyboard = new Keyboard();



function init() {
    document.getElementById('gameboard').innerHTML = `<canvas id="canvas" width="720p" height="480"></canvas>`;
    document.getElementById('start-button').innerHTML = ``;
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    ctx = canvas.getContext('2d');
}

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
document.addEventListener("click", function (event) {
    try {
        let canvasRect = canvas.getBoundingClientRect(); // Position des Canvas-Elements auf der Seite
        let mouseX = event.clientX - canvasRect.left - world.camera_x;
        let mouseY = event.clientY - canvasRect.top;
        let botton = world.statusbar;
        if (mouseX >= botton.botonTryAgain[0].x && mouseX <= botton.botonTryAgain[0].x + botton.botonTryAgain[0].width && mouseY >= botton.botonTryAgain[0].y && mouseY <= botton.botonTryAgain[0].y + botton.botonTryAgain[0].height) {
            botton.botonTryAgain[0].isClicked = true;
            console.log('Try Again wurde angeklickt!');
            this.restartGame();
        }
    } catch (e) { }
});

document.addEventListener("mousemove", function (event) {
    try {
        let canvasRect = canvas.getBoundingClientRect(); // Position des Canvas-Elements auf der Seite
        let mouseX = event.clientX - canvasRect.left - world.camera_x;
        let mouseY = event.clientY - canvasRect.top;
        let botton = world.statusbar;
        if (mouseX >= botton.botonTryAgain[0].x && mouseX <= botton.botonTryAgain[0].x + botton.botonTryAgain[0].width && mouseY >= botton.botonTryAgain[0].y && mouseY <= botton.botonTryAgain[0].y + botton.botonTryAgain[0].height) {
            botton.botonTryAgain[0].isHovered = true;
        } else {
            botton.botonTryAgain[0].isHovered = false;
        }
    } catch (e) { }
});

function restartGame() {
    world = []
    // clearAllIntervals();
    document.getElementById('gameboard').innerHTML = ``;
    document.getElementById('start-button').innerHTML = ``;

}



// function clearAllIntervals() {
//     for (let i = 1; i < 9999; i++) window.clearInterval(i);
// }
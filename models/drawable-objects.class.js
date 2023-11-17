class DrawAbleObject {
  x = 120;
  y = 200;
  img;
  height = 150;
  width = 100;
  currentImage = 0;
  imgCache = {};
  

  /**
   * creates a new img of the respective object
   * @param {any} path
   * @returns {any}
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * creates several new images of the respective object
   * @param {any} array
   * @returns {any}
   */
  loadImages(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imgCache[path] = img;
    });
  }

  /**
   * draws the object based on the coordinates and images
   * @param {any} ctx
   * @returns {any}
   */
  draw(ctx) {
    try {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } catch (e) {
      console.log("Error loading image", e);
      console.log("Could not load image", this.img);
    }
  }

  /**
   * lets the sound of the respective object play
   * @param {any} audio
   * @returns {any}
   */
  playSound(audio) {
    let Sound = new Audio(audio);
    audioElements.push(Sound);
    Sound.volume = document.getElementById("volumeControl").value;
    Sound.addEventListener("ended", () => {
      audioElements.splice(audioElements.indexOf(Sound), 1); // Remove the Audio object from the audioElements array
    });
    Sound.play();
  }
}

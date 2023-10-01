class DrawAbleObject {
  x = 120;
  y = 200;
  img;
  height = 150;
  width = 100;
  currentImage = 0;
  imgCache = {};

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imgCache[path] = img;
    });
  }

  draw(ctx) {
    try {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } catch (e) {
      console.log("Error loading image", e);
      console.log("Could not load image", this.img);
    }
  }

  playSound(audio) {
    let Sound = new Audio(audio);
    audioElements.push(Sound);
    Sound.volume = document.getElementById("volumeControl").value;
    Sound.play();
  }

  drawFrame(ctx) {
    //     if (this instanceof MoveableObject) {
    //         ctx.beginPath();
    //         ctx.lineWidth = "1";
    //         ctx.strokeStyle = "red";
    //         ctx.rect(this.x, this.y, this.width, this.height);
    //         ctx.stroke();
    //     }
    //     if (this instanceof MoveableObject) {
    //         ctx.beginPath();
    //         ctx.lineWidth = "1";
    //         ctx.strokeStyle = "red";
    //         ctx.rect(this.x + this.colx, this.y + this.coly, this.colwidth, this.colheight);
    //         ctx.stroke();
    //     }
    //     if (this instanceof Character) {
    //         ctx.beginPath();
    //         ctx.lineWidth = "1";
    //         ctx.strokeStyle = "red";
    //         ctx.rect(this.x + this.colx, this.y + this.coly, this.colwidth, this.colheight);
    //         ctx.stroke();
    //     }
    //     if (this instanceof FinalEnemy) {
    //         ctx.beginPath();
    //         ctx.lineWidth = "1";
    //         ctx.strokeStyle = "red";
    //         ctx.rect(this.x + this.colx, this.y + this.coly, this.colwidth, this.colheight);
    //         ctx.stroke();
    //     }
  }
}

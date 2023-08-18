class JellyFish extends MoveableObject {
  speed = 0.2;
  height = 80;
  width = 80;
  live = 15;
  attackPower = 50;
  intervallID = null;
  isShocked = false;
  direction = 1;
  randomIndex = 0;
  difficulty;
  speed = 0;
  SwimLine;
  jumping = 0;
  Swim_Images = [];
  Dead_Images = [];
  colx = 20;
  coly = 15;
  colwidth = 40;
  colheight = 40;
  Swim_ImagesLila = [
    './img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
    './img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
    './img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
    './img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
  ]
  Swim_ImagesYellow = [
    './img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
    './img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
    './img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
    './img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
  ]

  Swim_ImagesGreen = [
    './img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
    './img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
    './img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
    './img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',
  ]
  Swim_ImagesPink = [
    './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
    './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
    './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
    './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
  ]
  Dead_ImagesLila = [
    './img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
    './img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
    './img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
    './img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
  ]
  Dead_ImagesYellow = [
    './img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
    './img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
    './img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
    './img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png',
  ]
  Dead_ImagesGreen = [
    './img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
    './img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
    './img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
    './img/2.Enemy/2 Jelly fish/Dead/green/g4.png',
  ]
  Dead_ImagesPink = [
    './img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
    './img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
    './img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
    './img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png',
  ]


  constructor(img, x, toX, difficulty) {
    super().loadImage(img);
    this.difficulty = difficulty;
    this.randomIndex = this.getRandomInt();
    this.speed = this.randomIndex / 4 + Math.random() * 0.15;
    this.Swim_Images = this.getRandomImage(this.Swim_Images, this.Swim_ImagesPink, this.Swim_ImagesGreen, this.Swim_ImagesLila, this.Swim_ImagesYellow);
    this.Dead_Images = this.getRandomImage(this.Dead_Images, this.Dead_ImagesPink, this.Dead_ImagesGreen, this.Dead_ImagesLila, this.Dead_ImagesYellow);
    this.loadImages(this.Swim_Images);
    this.loadImages(this.Dead_Images);
    this.x = x + Math.random() * toX;
    this.y = 80 + Math.random() * 350;
    this.SwimLine = this.y;
    this.Animate();
  }
  getRandomInt() {
    return Math.floor(Math.random() * 2 + this.difficulty) + 1;
  }
  getRandomImage(images, img1, img2, img3, img4) {
    let selectedImages;
    if (this.randomIndex === 1) {
      selectedImages = img1;
      this.attackPower = 50;
    } else if (this.randomIndex === 2) {
      selectedImages = img2;
      this.attackPower = 50;
    } else if (this.randomIndex === 3) {
      selectedImages = img3;
      this.attackPower = 33;
    } else {
      selectedImages = img4;
      this.attackPower = 33;
    }
    for (let i = 0; i < selectedImages.length; i++) {
      images.push(selectedImages[i]);
    }
    return images;
  }

  isUnderTheChar() {
    try {
      return this.y + this.colheight + this.coly >= world.character.y + world.character.coly + world.colheight;
    } catch { }
  }

  isAboveSwimLine() {
    try {
      return this.y + this.colheight + this.coly <= this.SwimLine;
    } catch { }
  }


  Animate() {
    setInterval(() => {
      if (this.isAboveSwimLine() && !this.isHurt() && !this.isDead()) {
        this.y += this.speedY;
      }
    }, 1000 / 60)

    setInterval(() => {
      try {
        if (!this.isDead() && !this.isHurt()) {
          if (world.character.x + 800 >= this.x) {
            if (this.jumping >= 15) {
              if (!this.isAboveSwimLine()) {
                this.jumping = 0;
              }
            } else {
              this.y -= 5;
              this.jumping++;
            }
          }
        }
      } catch { }
    }, 1000 / 60);


    if (this.randomIndex == 1) {
      this.moveToCharX();
      this.moveToCharY();
    } else if (this.randomIndex == 2) {
      this.moveToCharX();
    } else if (this.randomIndex == 3) {
      this.moveToCharY();
    } else {
      this.moveToCharX();
    }

    setInterval(() => {
      if (this.isDead()) {
        this.y -= this.speedY;
        this.speedY + 0.01;
      }
    }, 1000 / 60)


    setInterval(() => {
      if (this.isDead()) {
        let i = this.currentImage % this.Dead_Images.length;
        let path = this.Dead_Images[i];
        this.img = this.imgCache[path];
        this.currentImage++;
      } else if (this.isHurt()) {
        this.playAnimation(this.Dead_Images);
      } else {
        this.playAnimation(this.Swim_Images);
      }
    }, 170);
    // intervalIds.push(intervallIDAnimation);
  }
}





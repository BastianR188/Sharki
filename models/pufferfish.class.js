class PufferFish extends MoveableObject {
  speed = 0.1;
  height = 65;
  width = 80;
  live = 10;
  isShocked = false;
  speedY = 15;
  attackPower = 33;
  color = 1;
  randomIndex = 0;
  speed = 0;
  Swim_Images = [];
  Transition_Images = [];
  TransitionReverse_Images = [];
  BubbleSwim_Images = [];
  Dead_Images = [];
  colx = 10;
  coly = 10;
  colwidth = 50;
  colheight = 45;
  isAnimating = false;
  Swim_Images1 = [
    `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png`,
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
  ];
  Swim_Images2 = [
    `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png`,
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png",
  ];
  Swim_Images3 = [
    `img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png`,
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png",
  ];
  Transition_Images1 = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png",
  ];
  Transition_Images2 = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png",
  ];
  Transition_Images3 = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png",
  ];
  TransitionReverse_Images1 = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png",
  ];
  TransitionReverse_Images2 = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png",
  ];
  TransitionReverse_Images3 = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png",
  ];
  BubbleSwim_Images1 = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png",
  ];
  BubbleSwim_Images2 = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png",
  ];
  BubbleSwim_Images3 = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png",
  ];
  Dead_Images1 = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.1.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.3.png",
  ];
  Dead_Images2 = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.3.png",
  ];
  Dead_Images3 = [
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png",
    "./img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png",
  ];

  constructor(img, x, toX) {
    super().loadImage(img);
    this.setAttribute();
    this.setImages();
    this.loadDifferentImg();
    this.x = x + Math.random() * toX;
    this.y = 60 + Math.random() * 350;
    this.Animate();
  }

  /**
   * uploads the different images
   * @returns {any}
   */
  loadDifferentImg() {
    this.loadImages(this.Swim_Images);
    this.loadImages(this.Transition_Images);
    this.loadImages(this.BubbleSwim_Images);
    this.loadImages(this.Dead_Images);
  }

  /**
   * generates the values and sets them, the type, the speed and the different images
   * @returns {any}
   */
  setAttribute() {
    this.randomIndex = this.getRandomInt();
    this.speed = this.randomIndex / 5 + Math.random() * 0.3;
    this.Swim_Images = this.getRandomImage(this.Swim_Images, this.Swim_Images1, this.Swim_Images2, this.Swim_Images3);
  }

  setImages() {
    this.Transition_Images = this.getRandomImage(this.Transition_Images, this.Transition_Images1, this.Transition_Images2, this.Transition_Images3);
    this.TransitionReverse_Images = this.getRandomImage(this.TransitionReverse_Images, this.TransitionReverse_Images1, this.TransitionReverse_Images2, this.TransitionReverse_Images3);
    this.BubbleSwim_Images = this.getRandomImage(this.BubbleSwim_Images, this.BubbleSwim_Images1, this.BubbleSwim_Images2, this.BubbleSwim_Images3);
    this.Dead_Images = this.getRandomImage(this.Dead_Images, this.Dead_Images1, this.Dead_Images2, this.Dead_Images3);
  }

  /**
   * choose the color or type of pufferfish randomly
   * @returns {any}
   */
  getRandomInt() {
    return Math.floor(Math.random() * 3) + 1;
  }

  /**
   * pushes the respective img and selects it
   * @param {any} images
   * @param {any} img1
   * @param {any} img2
   * @param {any} img3
   * @returns {any}
   */
  getRandomImage(images, img1, img2, img3) {
    let selectedImages;
    selectedImages = this.selectedImg(selectedImages, img1, img2, img3);
    for (let i = 0; i < selectedImages.length; i++) {
      images.push(selectedImages[i]);
    }
    return images;
  }

  /**
   * selects the img depending on the randomIndex
   * @param {any} selectedImages
   * @param {any} img1
   * @param {any} img2
   * @param {any} img3
   * @returns {any}
   */
  selectedImg(selectedImages, img1, img2, img3) {
    if (this.randomIndex === 1) {
      selectedImages = img1;
    }
    if (this.randomIndex === 2) {
      selectedImages = img2;
    }
    if (this.randomIndex === 3) {
      selectedImages = img3;
    }
    return selectedImages;
  }

  Animate() {
    this.checkIfTransition();
    this.moveLeft();
    this.differentAnimation();
  }

  /**
   * checks if it needs to inflate by checking if the character is nearby
   * @returns {any}
   */
  checkIfTransition() {
    setInterval(() => {
      try {
        if (!this.isDead() && !world.character.isDead() && !this.isAnimating) {
          this.transitionAnimation();
        }
      } catch { }
    }, 1000 / 60);
  }

  /**
   * plays the different animation depending on the respective situation
   * @returns {any}
   */
  differentAnimation() {
    let intervalId = setInterval(() => {
      if (this.isDead()) {
        this.deadAnimation(intervalId);
      } else if (this.isNear == true) {
        this.attackAnimation();
      } else {
        this.playAnimation(this.Swim_Images);
      }
    }, 100);
  }

  /**
   * animated when the fish is bloated
   * @returns {any}
   */
  attackAnimation() {
    if (!this.isAnimating) {
      this.playAnimation(this.BubbleSwim_Images);
    }
  }

  /**
   * determines the dying animation
   * @param {any} intervalId
   * @returns {any}
   */
  deadAnimation(intervalId) {
    if (Math.random() > 0.5) {
      this.DeadGround();
    } else {
      this.DeadFly();
    }
    clearInterval(intervalId);
  }

  /**
   * checks whether the character is nearby and inflates
   * @returns {any}
   */
  transitionAnimation() {
    if (world.character.isNearby(this) < 250 && !this.isNear) {
      this.isNear = true;
      this.playAnimationAtOnce(this.Transition_Images);
    } else if (world.character.isNearby(this) > 250 && this.isNear) {
      this.isNear = false;
      this.playAnimationAtOnce(this.TransitionReverse_Images);
    }
  }

  /**
   * plays the animation as it flies downwards when it dies
   * @returns {any}
   */
  DeadFly() {
    setInterval(() => {
      this.playAnimation(this.Dead_Images);
      if (this.down()) {
        this.y -= this.speedY;
        this.x -= this.speedY;
      }
    }, 1000 / 60);
  }

  /**
   * plays the animation as it flies upwards when it dies
   * @returns {any}
   */
  DeadGround() {
    setInterval(() => {
      this.playAnimation(this.Dead_Images);
      if (this.up()) {
        this.x -= this.speedY;
        this.y += this.speedY;
      }
    }, 1000 / 60);
  }

  /**
   * limit when it dies and flies away downwards
   * @returns {any}
   */
  down() {
    return this.y > -100;
  }

  /**
   * limit when it dies and flies away upwards
   * @returns {any}
   */
  up() {
    return this.y < 430;
  }
}
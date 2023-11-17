class MoveableObject extends DrawAbleObject {
  speed = 0.5;
  otherDirection = false;
  lastHit = 0;
  acceleration = 0.1;
  startAttack = 0;
  speedY = 1;
  isNear = false;
  isAnimating = false;
  colx = 0;
  coly = 0;
  colwidth = 0;
  colheight = 0;
  attackPower = 0;
  spamProtection = false;

  charHitSound = "audio/charHit.mp3";
  slapSwoothSound = "audio/miss.mp3";
  createBubbleSound = "audio/bubbleAttack.mp3";

  /**
   * adds a stoppable interval and stores the id
   * @param {any} fn - functions to be started
   * @param {any} time - the interval speed
   * @returns {any} - return the id from the interval
   */
  setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
    return id;
  }

  /**
   * adds gravity and allows the respective object to swim upwards
   * @returns {any}
   */
  applySwimGravity() {
    setInterval(() => {
      this.y -= this.speedY;
    }, 1000 / 60);
  }

  /**
   * adds gravity and causes the respective object to sink
   * @returns {any}
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround()) {
        this.y += this.speedY;
        if (this.speedY > 0.35) {
          this.speedY - 0.01;
        }
      }
    }, 1000 / 60);
  }

  /**
   * checks whether the respective object is above the ground
   * @returns {any}
   */
  isAboveGround() {
    return this.y + this.colheight + this.coly < 400;
  }

  /**
   * checks whether the respective object is nearby
   * @param {any} mo - the respective object that should be checked
   * @returns {any}
   */
  isNearby(mo) {
    return (this.distanceBetween = Math.sqrt((this.x + this.colx + this.colwidth / 2 - (mo.x + mo.colx + mo.colwidth / 2)) ** 2 + (this.y + this.coly + this.colheight / 2 - (mo.y + mo.coly + mo.colheight / 2)) ** 2
    ));
  }

  /**
   * checks whether the respective object collides with the other
   * @param {any} mo - the respective object that should be checked
   * @param {any} val - extra distance because some images are larger than they actually are
   * @returns {any}
   */
  isColliding(mo, val) {
    return (this.x + this.colx + this.colwidth + val > mo.x + mo.colx && this.y + this.coly + this.colheight > mo.y + mo.coly && this.x + this.colx - val < mo.x + mo.colwidth + mo.colx && this.y + this.coly < mo.y + mo.colheight + mo.coly);
  }

  /**
   * checks whether the respective object has spam protection
   * @returns {any}
   */
  checkSpamProtecting() {
    setInterval(() => {
      if (!this.spamProtect()) {
        this.spamProtection = false;
      }
    });
  }

  /**
   * plays the commands when the respective object is hit
   * @param {any} mo - the respective object that should be checked
   * @returns {any}
   */
  hit(mo) {
    if (!this.spamProtect()) {
      if (this.live > 0) {
        this.live -= mo.attackPower;
        this.lastHit = new Date().getTime();
        this.playSound(this.charHitSound);
        this.ifJellyFish(mo);
        this.ifDead();
        this.stunBack();
        this.stunBackCamera();
      }
    }
  }

  /**
   * checks whether it is a jellyfish and puts the respective object in shock state
   * @param {any} mo - the respective object that should be checked
   * @returns {any}
   */
  ifJellyFish(mo) {
    if (mo instanceof JellyFish) {
      this.isShocked = true;
    }
  }

  /**
   * sets the values of the respective object if it is dead
   * @returns {any}
   */
  ifDead() {
    if (this.live <= 0) {
      this.live = 0;
      this.currentImage = 0;
    }
  }

  /**
   * Fixes the camera and prevents the camera from moving during the final fight
   * @returns {any}
   */
  stunBackCamera() {
    if (this.world.level.enemies[0].StartIntro) {
    } else {
      this.world.camera_x = -this.x + 100;
    }
  }

  /**
   * If you get hit you will be knocked back, this is the function for the camera
   * @returns {any}
   */
  stunBack() {
    if (this.otherDirection) {
      this.x += 50;
    } else {
      this.x -= 50;
    }
  }

  /**
   * indicates whether the injury occurred no later than 0.5 seconds ago. has expired
   * @returns {any}
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 0.5;
  }

  /**
   * This function prevents the respective object from being hit several times in a row
   * @returns {any}
   */
  spamProtect() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 3;
  }

  /**
   * starts the attack and the respective sound and functions
   * @param {any} image - images of the respective attacks
   * @param {any} img
   * @param {any} poison - whether the attack is poisonous
   * @param {any} slap - whether it is a slap
   * @returns {any}
   */
  attack(image, img, poison, slap) {
    if (!this.isAttacking) {
      let i = this.startAttackAnimation();
      if (slap) {
        this.playSound(this.slapSwoothSound);
      }
      let intervalId = setInterval(() => {
        i = this.SpecialAttacking(i, image, slap, intervalId, img, poison);
      }, 100);
    }
  }

  /**
   * checks whether you can carry out the special attack and then starts the animation
   * @param {any} i - so with the first img, i.e. from the beginning of the anitmatin
   * @param {any} image - images of the respective attacks
   * @param {any} slap - whether it is a slap
   * @param {any} intervalId - id of the interval so that you can end it again
   * @param {any} img
   * @param {any} poison - whether the attack is poisonous
   * @returns {any}
   */
  SpecialAttacking(i, image, slap, intervalId, img, poison) {
    if (!this.isHurt()) {
      i = this.AttackAni(i, image, slap, intervalId, img, poison);
    } else {
      i = this.EndAttack(intervalId, i);
    }
    return i;
  }

  /**
   * The interval ends when the attack is over
   * @param {any} intervalId
   * @param {any} i
   * @returns {any}
   */
  EndAttack(intervalId, i) {
    clearInterval(intervalId);
    this.notAttack();
    i = 0;
    return i;
  }

  /**
   * starts the aniamtoin for the respective attack
   * @param {any} i - so with the first img, i.e. from the beginning of the anitmatin
   * @param {any} image - images of the respective attacks
   * @param {any} slap - whether it is a slap
   * @param {any} intervalId - id of the interval so that you can end it again
   * @param {any} img
   * @param {any} poison - whether the attack is poisonous
   * @returns {any}
   */
  AttackAni(i, image, slap, intervalId, img, poison) {
    i = this.attackAnimation(image, i, slap);
    if (i >= image.length) {
      clearInterval(intervalId);
      this.notAttack();
      if (!slap) {
        this.createBubble(img, this.otherDirection, poison);
      }
      i = 0;
    }
    return i;
  }

  /**
   * sets the animation and attack array to true
   * @returns {any}
   */
  startAttackAnimation() {
    this.isAttacking = true;
    this.isAnimating = true;
    let i = 0;
    return i;
  }

  /**
   * plays the slap ttack animation
   * @param {any} image
   * @param {any} i - which image should be displayed
   * @param {any} slap - whether it is a slap
   * @returns {any}
   */
  attackAnimation(image, i, slap) {
    let path = image[i];
    this.img = this.imgCache[path];
    i++;
    if (i == 4 && slap) {
      this.attackDmg = true;
    }
    if (i == 5 && slap) {
      this.attackDmg = false;
    }
    return i;
  }

  /**
   * when the attack is over it resets the values to false
   * @returns {any}
   */
  notAttack() {
    this.isAttacking = false;
    this.isAnimating = false;
    this.attackDmg = false;
  }

  /**
   * checks whether the respective object is dead
   * @returns {any}
   */
  isDead() {
    return this.live <= 0;
  }

  /**
   * The special attack uses this function to create the bubble bubble
   * @param {any} img - the images of the bubble bubble
   * @param {any} od - sets the direction
   * @param {any} p - determines whether it is with poison or without
   * @returns {any}
   */
  createBubble(img, od, p) {
    let bubble;
    if (od) {
      bubble = new Bubble(img, this.x, this.y + this.height / 2, od, p);
    } else {
      bubble = new Bubble(img, this.x + this.colx + this.colwidth, this.y + this.height / 2, od, p);
    }
    this.playSound(this.createBubbleSound);
    world.bubbles.push(bubble);
  }

  /**
   * lets the respective object move to the right and checks whether it is dead or injured
   * @returns {any}
   */
  moveRight() {
    setInterval(() => {
      if (!this.isDead() && !this.isHurt()) {
        this.x += this.speed;
      }
    }, 1000 / 60);
  }

  /**
   * lets the respective object move to the left and checks whether it is dead or injured
   * @returns {any}
   */
  moveLeft() {
    setInterval(() => {
      if (
        !this.isDead() &&
        !this.isHurt() &&
        world.character.x + 600 >= this.x
      ) {
        this.x -= this.speed;
      }
    }, 1000 / 60);
  }

  /**
   * sets the interval when the respective object should move the y axis to the character
   * @returns {any}
   */
  moveToCharY() {
    let intervalIdmoveToCharY = setInterval(() => {
      if (this.isDead()) {
        clearInterval(intervalIdmoveToCharY);
      }
      if (!this.isDead() && !this.isHurt() && world.character.live > 0) {
        if (this.isUp()) {
          this.SwimLine -= this.speedY;
        } else if (this.isDown()) {
          this.SwimLine -= -this.speedY;
        }
      }
    }, 1000 / 60);
  }

  /**
   * returns whether the respective object is underneath
   * @returns {any}
   */
  isDown() {
    return (this.SwimLine < world.character.y + world.character.coly + world.character.colheight);
  }

  /**
   * returns whether the respective object is above it
   * @returns {any}
   */
  isUp() {
    return (this.SwimLine > world.character.y + world.character.coly + world.character.colheight);
  }

  /**
   * sets the interval when the respective object should move the X axis to the character
   * @returns {any}
   */
  moveToCharX() {
    let intervalIdmoveToCharX = setInterval(() => {
      if (this.isDead()) {
        clearInterval(intervalIdmoveToCharX);
      }
      if (!this.isDead() && !this.isHurt() && world.character.live > 0) {
        if (this.isFront()) {
          this.x -= this.speed;
        } else if (this.isBehind()) {
          this.x -= -this.speed;
        }
      }
    }, 1000 / 60);
  }

  /**
   * returns when the respective object is behind it
   * @returns {any}
   */
  isBehind() {
    return this.x <= world.character.x + world.character.colx;
  }

  /**
   * returns when the respective object is in front of it
   * @returns {any}
   */
  isFront() {
    return (this.x >= world.character.x + world.character.colx + world.character.colwidth / 2);
  }

  /**
   * allows the respective object to move in the wave
   * @returns {any}
   */
  waveMove() {
    setInterval(() => {
      this.y += this.speedY;
      this.speedY = this.speedY + 0.1 * this.direction;
    }, 1000 / 60);
    setInterval(() => {
      this.direction *= -1;
    }, 1000);
  }

  /**
   * initiates the anitmaion sequence
   * @param {any} images
   * @returns {any}
   */
  playAnimation(images) {
    let i = this.setValueAnimation(images);
    if (this.isDead() && i == images.length - 1) {
      this.currentImage--;
    }
  }

  /**
   * plays the anitmaion
   * @param {any} images
   * @returns {any}
   */
  setValueAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imgCache[path];
    this.currentImage++;
    return i;
  }

  /**
   * the respective animation only plays once
   * @param {any} images
   * @returns {any}
   */
  playAnimationAtOnce(images) {
    let currentImage = this.setValueAnimationAtOnce();
    let intervalId = setInterval(() => {
      currentImage = this.Animation(images, currentImage);
      if (currentImage >= images.length) {
        currentImage = this.stopAnimation(intervalId, currentImage);
      }
    }, 170);
  }

  /**
   * sets the values for the function playAnimationAtOnce
   * @returns {any}
   */
  setValueAnimationAtOnce() {
    this.isAnimating = true;
    let currentImage = 0;
    return currentImage;
  }

  /**
   * ends the animation by ending the respective interval and resets the values
   * @param {any} intervalId
   * @param {any} currentImage
   * @returns {any}
   */
  stopAnimation(intervalId, currentImage) {
    clearInterval(intervalId);
    this.isAnimating = false;
    currentImage = 0;
    return currentImage;
  }

  /**
   * plays the animation and lets the respective object move
   * @param {any} images
   * @param {any} currentImage
   * @returns {any}
   */
  Animation(images, currentImage) {
    let path = images[currentImage];
    this.img = this.imgCache[path];
    currentImage++;
    return currentImage;
  }
}

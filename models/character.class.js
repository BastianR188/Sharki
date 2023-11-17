class Character extends MoveableObject {
  x = 100;
  y = 200;
  height = 300;
  width = 245;
  colheight = 50;
  colwidth = 100;
  colx = 80;
  coly = 170;
  ishurt = false;
  speed = 1.2;
  specialPower = 25;
  live = 100;
  collectedCoin = 0;
  bubble = null;
  attackPower = 10;
  specialAttackPower = 5;
  specialAttackPoisonPower = 20;
  isShocked = false;
  isAttacking = false;
  attackDmg = false;
  isIdle = false;
  idleCountUp = 0;

  shockSound = "audio/shock.mp3";
  charHitSound = "audio/charHit.mp3";

  Idle_Images = [
    "./img/1.Sharkie/1.IDLE/1.png",
    "./img/1.Sharkie/1.IDLE/2.png",
    "./img/1.Sharkie/1.IDLE/3.png",
    "./img/1.Sharkie/1.IDLE/4.png",
    "./img/1.Sharkie/1.IDLE/5.png",
    "./img/1.Sharkie/1.IDLE/6.png",
    "./img/1.Sharkie/1.IDLE/7.png",
    "./img/1.Sharkie/1.IDLE/8.png",
    "./img/1.Sharkie/1.IDLE/9.png",
    "./img/1.Sharkie/1.IDLE/10.png",
    "./img/1.Sharkie/1.IDLE/11.png",
    "./img/1.Sharkie/1.IDLE/12.png",
    "./img/1.Sharkie/1.IDLE/13.png",
    "./img/1.Sharkie/1.IDLE/14.png",
    "./img/1.Sharkie/1.IDLE/15.png",
    "./img/1.Sharkie/1.IDLE/16.png",
    "./img/1.Sharkie/1.IDLE/17.png",
    "./img/1.Sharkie/1.IDLE/18.png",
  ];
  LongIdle_Images = [
    "./img/1.Sharkie/2.Long_IDLE/1.png",
    "./img/1.Sharkie/2.Long_IDLE/2.png",
    "./img/1.Sharkie/2.Long_IDLE/3.png",
    "./img/1.Sharkie/2.Long_IDLE/4.png",
    "./img/1.Sharkie/2.Long_IDLE/5.png",
    "./img/1.Sharkie/2.Long_IDLE/6.png",
    "./img/1.Sharkie/2.Long_IDLE/7.png",
    "./img/1.Sharkie/2.Long_IDLE/8.png",
    "./img/1.Sharkie/2.Long_IDLE/9.png",
    "./img/1.Sharkie/2.Long_IDLE/10.png",
    "./img/1.Sharkie/2.Long_IDLE/11.png",
    "./img/1.Sharkie/2.Long_IDLE/12.png",
    "./img/1.Sharkie/2.Long_IDLE/13.png",
    "./img/1.Sharkie/2.Long_IDLE/14.png",
  ];
  Sleep_Images = [
    "./img/1.Sharkie/2.Long_IDLE/11.png",
    "./img/1.Sharkie/2.Long_IDLE/11.png",
    "./img/1.Sharkie/2.Long_IDLE/11.png",
    "./img/1.Sharkie/2.Long_IDLE/12.png",
    "./img/1.Sharkie/2.Long_IDLE/12.png",
    "./img/1.Sharkie/2.Long_IDLE/12.png",
    "./img/1.Sharkie/2.Long_IDLE/13.png",
    "./img/1.Sharkie/2.Long_IDLE/13.png",
    "./img/1.Sharkie/2.Long_IDLE/13.png",
    "./img/1.Sharkie/2.Long_IDLE/14.png",
    "./img/1.Sharkie/2.Long_IDLE/14.png",
    "./img/1.Sharkie/2.Long_IDLE/14.png",
  ];
  Swim_Images = [
    "./img/1.Sharkie/3.Swim/1.png",
    "./img/1.Sharkie/3.Swim/2.png",
    "./img/1.Sharkie/3.Swim/3.png",
    "./img/1.Sharkie/3.Swim/4.png",
    "./img/1.Sharkie/3.Swim/5.png",
    "./img/1.Sharkie/3.Swim/6.png",
  ];
  HurtPoisoned_Images = [
    "./img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "./img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "./img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "./img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    "./img/1.Sharkie/5.Hurt/1.Poisoned/5.png",
  ];
  HurtElectricShock_Images = [
    "./img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
    "./img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
    "./img/1.Sharkie/5.Hurt/2.Electric shock/3.png",
  ];
  DeadPoisoned_Images = [
    "./img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];
  DeadShocked_Images = [
    "./img/1.Sharkie/6.dead/2.Electro_shock/1.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/2.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/3.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/4.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/5.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/6.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/7.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/8.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/9.png",
    "./img/1.Sharkie/6.dead/2.Electro_shock/10.png",
  ];
  Finslap_Images = [
    "./img/1.Sharkie/4.Attack/Fin slap/1.png",
    "./img/1.Sharkie/4.Attack/Fin slap/2.png",
    "./img/1.Sharkie/4.Attack/Fin slap/3.png",
    "./img/1.Sharkie/4.Attack/Fin slap/4.png",
    "./img/1.Sharkie/4.Attack/Fin slap/5.png",
    "./img/1.Sharkie/4.Attack/Fin slap/6.png",
    "./img/1.Sharkie/4.Attack/Fin slap/7.png",
    "./img/1.Sharkie/4.Attack/Fin slap/8.png",
  ];
  Bubble_Images = [
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png",
  ];
  BubbleWithOutPoison_Images = [
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
    "./img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png",
  ];
  SpamProtect_Images = [
    "",
    "./img/1.Sharkie/1.IDLE/6.png",
    "",
    "./img/1.Sharkie/1.IDLE/4.png",
  ];

  bgb = [5, 6, 7, 8, 9];
  bgf = [10, 11, 12, 13, 14];
  bgl = [20, 21, 22, 23, 24];

  constructor() {
    super().loadImage("img/1.Sharkie/3.Swim/1.png");
    this.loadMoveImages();
    this.loadAnimationImages();
    this.Animate();
    this.resetIdleTimer();
  }

  loadAnimationImages() {
    this.loadImages(this.Finslap_Images);
    this.loadImages(this.DeadPoisoned_Images);
    this.loadImages(this.DeadShocked_Images);
    this.loadImages(this.Bubble_Images);
    this.loadImages(this.BubbleWithOutPoison_Images);
    this.loadImages(this.SpamProtect_Images);
  }

  loadMoveImages() {
    this.loadImages(this.Swim_Images);
    this.loadImages(this.Idle_Images);
    this.loadImages(this.LongIdle_Images);
    this.loadImages(this.Sleep_Images);
    this.loadImages(this.HurtPoisoned_Images);
    this.loadImages(this.HurtElectricShock_Images);
  }

  Animate() {
    this.moveInterval();
    this.animateInterval();
    this.slapAttackAnimation();
    this.specialAttackAnimation();
  }

  /**
      * Camera guidance when the character moves
      * @param {any} (
      * @returns {any}
      */
  moveInterval() {
    this.setStoppableInterval(() => {
      if (this.CharCanMove()) {
        this.canMoveRight();
        this.canMoveLeft();
        this.canMoveUp();
        this.canMoveDown();
      }
    });
  }

  /**
   * checks whether the world still goes on. if true move if false stop
   * @returns {any}
   */
  canMoveDown() {
    if (this.LevelEndDown()) { this.y += this.speed; }
  }

  /**
   * checks whether the world still goes on. if true move if false stop
   * @returns {any}
   */
  canMoveUp() {
    if (this.LevelEndUp()) { this.y -= this.speed; }
  }

  /**
   * checks whether the world still goes on. if true move if false stop
   * @returns {any}
   */
  canMoveLeft() {
    if (this.LevelEndLeft()) { this.moveCharLeft(); }
  }

  /**
   * checks whether the world still goes on. if true move if false stop
   * @returns {any}
   */
  canMoveRight() {
    if (this.LevelEndRight()) { this.moveCharRight(); }
  }

  /**
     * checks and selects the respective animation of the character
     * @param {any} 
     * @returns {any}
     */
  animateInterval() {
    let intervalIDAnimation = this.setStoppableInterval(() => {
      switch (true) {
        case this.isDead(): return this.CharDeadAnimation(intervalIDAnimation);
        case this.isHurt(): return this.CharHurtAnimation();
        case this.spamProtect(): return this.playAnimation(this.SpamProtect_Images);
        case this.CharIsAnimating(): return this.resetIdleTimer();
        case this.MoveChar(): return this.CharSwimAnimation();
        case this.world.character.isIdle: return this.characterIdle();
        default: this.playAnimation(this.Idle_Images);
      }
    }, 170);
  }

  /**
   * starts the animations of the slap attack
   * @returns {any}
   */
  slapAttackAnimation() {
    this.setStoppableInterval(() => {
      if (this.canAttack()) {
        this.SlapAtackAnimationStart();
      }
    });
  }

  /**
   * starts the animations of the special attack
   * @returns {any}
   */
  specialAttackAnimation() {
    this.setStoppableInterval(() => {
      if (this.canSpecialAttack()) {
        this.SpecialAtackAnimationStart();
      }
    });
  }

  /**
   * Starts the functions of the special attack
   * @returns {any}
   */
  SpecialAtackAnimationStart() {
    this.SpecialAttackPoison();
    this.resetIdleTimer();
    world.character.isIdle = false;
  }

  /**
   * the animation of the slap attack starts
   * @returns {any}
   */
  SlapAtackAnimationStart() {
    this.attack(this.Finslap_Images, null, null, true);
    this.resetIdleTimer();
    world.character.isIdle = false;
  }

  /**
   * performs the special attack
   * @returns {any}
   */
  SpecialAttackPoison() {
    let withPoison = false;
    let img = "";
    if (this.specialPower > 0) {
      ({ img, withPoison } = this.attackWithSpecial(img, withPoison));
    } else {
      img = this.attackWithoutSpecial(img);
    }
    this.attack(img, this.bubble, withPoison);
  }

  /**
   * Returns whether the character can perform a special attack
   * @returns {any}
   */
  canSpecialAttack() {
    return this.world.keyboard.D && !this.isAnimating && !this.isDead();
  }

  /**
   * returns whether the character can attack
   * @returns {any}
   */
  canAttack() {
    return this.world.keyboard.SPACE && !this.isAnimating && !this.isDead();
  }

  /**
   * returns whether the character can move
   * @returns {any}
   */
  MoveChar() {
    return (this.world.keyboard.RIGHT == true || this.world.keyboard.LEFT == true || this.world.keyboard.UP == true || this.world.keyboard.DOWN == true);
  }

  /**
   * sets the values if space is activated
   * @returns {any}
   */
  CharIsAnimating() {
    return this.world.keyboard.SPACE == true || this.isAnimating == true;
  }

  /**
   * checks whether the character is not at the bottom of the level
   * @returns {any}
   */
  LevelEndDown() {
    return this.world.keyboard.DOWN && this.y < 260;
  }

  /**
   * checks whether the character is not at the top of the level
   * @returns {any}
   */
  LevelEndUp() {
    return this.world.keyboard.UP && this.y > -170;
  }

  /**
   * checks whether the character is not at the left end of the level
   * @returns {any}
   */
  LevelEndLeft() {
    return this.world.keyboard.LEFT && this.x > -100;
  }

  /**
   * checks whether the character is not at the right end of the level
   * @returns {any}
   */
  LevelEndRight() {
    return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
  }

  /**
   * checks whether the character can move
   * @returns {any}
   */
  CharCanMove() {
    return !this.isDead() && !this.isHurt() && !this.isAnimating;
  }

  /**
   * gives the img and the command that the bubber is without poisonous
   * @param {any} img
   * @returns {any}
   */
  attackWithoutSpecial(img) {
    img = this.BubbleWithOutPoison_Images;
    this.bubble = "./img/1.Sharkie/4.Attack/Bubble trap/Bubble.png";
    return img;
  }

  /**
   * gives the img and the command that the bubber is poisonous
   * @param {any} img
   * @param {any} withPoison
   * @returns {any}
   */
  attackWithSpecial(img, withPoison) {
    img = this.Bubble_Images;
    this.bubble = "./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png";
    this.specialPower -= 20;
    withPoison = true;
    if (this.specialPower < 0) { this.specialPower = 0; }
    return { img, withPoison };
  }

  /**
   * starts the animations and resets the idle value
   * @returns {any}
   */
  CharSwimAnimation() {
    this.resetIdleTimer();
    this.playAnimation(this.Swim_Images);
    world.character.isIdle = false;
  }

  /**
   * the function starts that you have been hit
   * @returns {any}
   */
  CharHurtAnimation() {
    this.resetIdleTimer();
    if (this.isShocked) {
      this.playSound(this.shockSound);
      this.playAnimation(this.HurtElectricShock_Images);
    } else { this.playAnimation(this.HurtPoisoned_Images); }
    world.character.isIdle = false;
  }

  /**
   * starts the function that you die and ends the interval
   * @param {any} intervallIDAnimation
   * @returns {any}
   */
  CharDeadAnimation(intervallIDAnimation) {
    if (this.isShocked) {
      this.isShockedSequenz();
    } else {
      this.isHittedSequenz();
    }
    clearInterval(intervallIDAnimation);
  }

  /**
   * play the dead hitted sequenz 
   * @returns {any}
   */
  isHittedSequenz() {
    this.playSound(this.charHitSound);
    this.deadPoisonedAnimation();
  }

  /**
   * plays the dead shocked sequenz
   * @returns {any}
   */
  isShockedSequenz() {
    this.playSound(this.shockSound);
    this.deadShockAnimation();
  }

  /**
   * lets the character move to the left
   * @returns {any}
   */
  moveCharLeft() {
    if (this.world.ceckFinalFight()) {
      if (this.x > 1780) {
        this.x -= this.speed;
      }
    } else { this.moveCameraLeft(); }
    this.otherDirection = true;
  }

  /**
   * lets the camera move to the left
   * @returns {any}
   */
  moveCameraLeft() {
    this.moveBg(-this.speed, -0.9, -0.6, -0.3);
    if (this.world.camera_x <= -this.x + (600 - this.width)) {
      this.world.camera_x = this.world.camera_x + this.speed * 3;
    }
  }

  /**
   * lets the character move to the right
   * @returns {any}
   */
  moveCharRight() {
    if (this.world.ceckFinalFight()) {
      if (this.x < 2480) { this.x += this.speed; }
    } else { this.moveCameraRight(); }
    this.otherDirection = false;
  }

  /**
   * lets the camera move to the right
   * @returns {any}
   */
  moveCameraRight() {
    this.moveBg(this.speed, 0.9, 0.6, 0.3);
    if (this.world.camera_x >= -this.x + 100) {
      this.world.camera_x = this.world.camera_x - this.speed * 3;
    }
  }

  /**
   * lets the backgrounds move when the character moves
   * @param {any} speed - speed for the backgrounds
   * @param {any} sbgb - the first background - back
   * @param {any} sbgf - the seconde background - front
   * @param {any} sbgl - the third background - light
   * @returns {any}
   */
  moveBg(speed, sbgb, sbgf, sbgl) {
    this.x += speed;
    this.backgroundAnimation(this.bgb, sbgb);
    this.backgroundAnimation(this.bgf, sbgf);
    this.backgroundAnimation(this.bgl, sbgl);
  }

  /**
   * a loop for the background that moves when the character moves
   * @param {any} bg
   * @param {any} time
   * @returns {any}
   */
  backgroundAnimation(bg, time) {
    for (let i = 0; i < bg.length; i++) {
      this.world.level.bgo[bg[i]].x += time;
    }
  }

  /**
   * Plays the dying animation when shocked
   * @returns {any}
   */
  deadShockAnimation() {
    this.playAnimationAtOnce(this.DeadShocked_Images);
    this.applyGravity();
  }

  /**
   * plays the dying animation
   * @returns {any}
   */
  deadPoisonedAnimation() {
    this.playAnimationAtOnce(this.DeadPoisoned_Images);
    this.applySwimGravity();
  }

  /**
   * resets the idle timer
   * @returns {any}
   */
  resetIdleTimer() {
    clearTimeout(this.idleTimer);
    this.idleCountUp = 0;
    this.idleTimer = setTimeout(this.setIdle, 3000); // 3 seconds
  }

  /**
   * returns true when idle
   * @returns {any}
   */
  setIdle() {
    world.character.isIdle = true;
  }

  /**
   * plays the sleep animation
   * @returns {any}
   */
  characterIdle() {
    this.playAnimation(this.LongIdle_Images);
    this.idleCountUp += 1;
    if (this.idleCountUp >= 12) {
      this.playAnimation(this.Sleep_Images);
    }
  }
}

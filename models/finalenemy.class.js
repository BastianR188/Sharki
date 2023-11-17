class FinalEnemy extends MoveableObject {
  speed = 0;
  StartIntro = false; // whether the intro has started
  height = 400;
  width = 290;
  colx = 40;
  coly = 200;
  colwidth = 210;
  colheight = 115;
  attackPower = 33;
  live = 100;
  spamProtection = true; // protection so that the FinalEnemy is not attacked beforehand with Bubble
  introDistance = 1000; // the distance between the character and the FinalEnemy
  enemyDirection = Math.random() < 0.5 ? -1 : 1; // Random enemy direction (-1 for up, 1 for down)
  enemySpeed = Math.floor(Math.random() * 3) + 1; // Random enemy speed (1-3 pixels per frame)
  attackTimer = 0; // Timer for the opponent's attack
  attacking = false; // whether the opponent is currently attacking
  attackDistance = 115; // how far the attack should go
  direktion = -1; // indicates which direction

  FinalEnemyHitSound = new Audio("audio/bosshit.mp3");
  FinalEnemySoundAttack = "audio/bossattack.mp3";
  FinalEnemyIntroSound = "audio/finalenemyintro.mp3";

  Introduce_Images = [
    "./img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];
  Swim_Images = [
    "./img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];
  Attack_Images = [
    "./img/2.Enemy/3 Final Enemy/Attack/1.png",
    "./img/2.Enemy/3 Final Enemy/Attack/2.png",
    "./img/2.Enemy/3 Final Enemy/Attack/3.png",
    "./img/2.Enemy/3 Final Enemy/Attack/4.png",
    "./img/2.Enemy/3 Final Enemy/Attack/5.png",
    "./img/2.Enemy/3 Final Enemy/Attack/6.png",
  ];
  Hurt_Images = [
    "./img/2.Enemy/3 Final Enemy/Hurt/1.png",
    "./img/2.Enemy/3 Final Enemy/Hurt/2.png",
    "./img/2.Enemy/3 Final Enemy/Hurt/3.png",
    "./img/2.Enemy/3 Final Enemy/Hurt/4.png",
  ];
  Dead_Images = [
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
    "./img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
  ];
  FinalEnemyLive_Images = [
    "./img/4. Marcadores/orange/0_  copia.png",
    "./img/4. Marcadores/orange/20_  copia.png",
    "./img/4. Marcadores/orange/40_  copia.png",
    "./img/4. Marcadores/orange/60_  copia.png",
    "./img/4. Marcadores/orange/80_  copia.png",
    "./img/4. Marcadores/orange/100_  copia.png",
  ];

  constructor(img, x, y, intro) {
    super().loadImage(img);
    this.loadallImages();
    this.getAttribute(x, y, intro);
    this.Animate();
  }

  /**
   * Everyone from the respective class uploads the images
   * @returns {any}
   */
  loadallImages() {
    this.loadImages(this.Introduce_Images);
    this.loadImages(this.Swim_Images);
    this.loadImages(this.Attack_Images);
    this.loadImages(this.Hurt_Images);
    this.loadImages(this.Dead_Images);
  }

  /**
   * Place the enemy in the playing field at the respective coordinates
   * @param {any} x
   * @param {any} y
   * @param {any} intro
   * @returns {any}
   */
  getAttribute(x, y, intro) {
    this.x = x;
    this.y = y;
    this.introDistance = intro;
  }

  /**
   * the functions for the animations
   * @returns {any}
   */
  Animate() {
    this.startIntroAnimation();
    this.setLiveBar();
    this.moveAnimation();
    this.differentAnimation();
  }

  /**
   * Put the live bar into play as soon as the final fight begins
   * @returns {any}
   */
  setLiveBar() {
    setInterval(() => {
      try {
        if (this.StartIntro && world.statusbar.statusbarFinalEnemy[0].y < 32) {
          world.statusbar.statusbarFinalEnemy[0].y += 1;
        }
      } catch { }
    }, 1000 / 60);
  }

  /**
   * the intro starts
   * @returns {any}
   */
  startIntroAnimation() {
    let intervalStartId = setInterval(() => {
      if (this.StartIntro) {
        this.startIntro(intervalStartId);
      }
    }, 1000 / 25);
  }

  /**
   * The intro sequence starts and the associated functions
   * @param {any} intervalStartId
   * @returns {any}
   */
  startIntro(intervalStartId) {
    this.playAnimationAtOnce(this.Introduce_Images);
    this.spamProtection = false;
    this.playSound(this.FinalEnemyIntroSound);
    clearInterval(intervalStartId);
  }

  /**
   * The respective animation starts from the respective situation
   * @returns {any}
   */
  differentAnimation() {
    let intervalId = setInterval(() => {
      if (this.FinalFight()) {
        if (this.isDead()) {
          this.DeadAnimation(intervalId);
        } else if (this.isHurt()) {
          this.HurtAnimation();
        } else if (this.attacking) {
          this.playAnimation(this.Attack_Images);
        } else {
          this.playAnimation(this.Swim_Images);
        }
      }
    }, 170);
  }

  /**
   * checks whether intro is over and whether it is not dead yet
   * @returns {any}
   */
  moveAnimation() {
    setInterval(() => {
      if (!this.isDead() && this.StartIntro) {
        this.MoveAI();
      }
    }, 1000 / 60);
  }

  /**
   * loop to check his life points in order to pass them on to update the health bar
   * @returns {any}
   */
  checkLiveBar() {
    let currentHealth = [0, 20, 40, 60, 80, 100];
    try {
      for (let health of currentHealth) {
        if (this.checkHealth(health)) {
          this.currentStatusBar(health);
          break;
        };
      }
    } catch { }
  };

  /**
   * sets the current health bar depending on being live
   * @param {any} value
   * @returns {any}
   */
  currentStatusBar(value) {
    world.statusbar.statusbarFinalEnemy[0].img.src = `./img/4. Marcadores/orange/${value}_  copia.png`;
  }

  /**
   * starts the sound and hurt animations
   * @returns {any}
   */
  HurtAnimation() {
    this.FinalEnemyHitSound.volume = document.getElementById("volumeControl").value;
    this.FinalEnemyHitSound.play();
    this.playAnimation(this.Hurt_Images);
    this.checkLiveBar();
  }

  /**
   * Starts the functions for the dying animation
   * @param {any} intervalId
   * @returns {any}
   */
  DeadAnimation(intervalId) {
    this.applySwimGravity();
    this.playAnimationAtOnce(this.Dead_Images);
    this.checkLiveBar();
    clearInterval(intervalId);
  }

  /**
   * When the intro is over the fight begins and the spam protection is removed
   * @returns {any}
   */
  FinalFight() {
    return this.StartIntro && !this.isAnimating && !this.spamProtection;
  }

  /**
   * checks the life points and passes them on to the health bar
   * @param {any} value
   * @returns {any}
   */
  checkHealth(value) {
    return this.live <= value;
  }

  /**
   * starts intro, sets the value to true
   * @returns {any}
   */
  FinalEnemyAppears() {
    this.StartIntro = true;
  }

  /**
   * behavior of the finalenemy, whether it attacks or not
   * @returns {any}
   */
  MoveAI() {
    if (!this.attacking) {  // If the opponent doesn't attack
      this.notAttack();
    } else {
      this.isAttack();    //When the opponent attacks
    }
  }

  /**
   * sets the attack speed and distance
   * @returns {any}
   */
  isAttack() {
    this.attackTimer++; // Increase the attack timer
    if (this.attackTimer == 61) {
      this.speed = 10;
    }
    this.x += this.direktion * this.speed;            // Move the opponent in the current direction at the current speed
    if (this.attackTimer == this.attackDistance) {    // When the opponent has reached the attack route
      this.attackSequenz();
    }
  }

  /**
   * Execute the attack, reset timer, change direction, and set new speed
   * @returns {any}
   */
  attackSequenz() {
    this.attackTimer = 0;
    this.direktion = -this.direktion; // Change the opponent's direction
    this.otherDirection = !this.otherDirection;
    this.speed = Math.floor(Math.random() * 2) + 1; // Choose a new random speed
    this.attacking = false;
  }

  /**
   * behave when he doesn't attack
   * @returns {any}
   */
  notAttack() {
    this.y += this.enemyDirection * this.speed; // Move the opponent in the current direction at the current speed
    if (this.y + this.coly < 0) {               // When the opponent has reached the top or bottom of the canvas      
      this.newDirectionAndSpeed(+1);            // Choose a new random speed
    } if (this.y + this.coly + this.colheight > 460) {
      this.newDirectionAndSpeed(-1);            // Choose a new random speed
    }
    this.setAttackTimer();
  }

  /**
   * sets the attack timer randomly
   * @returns {any}
   */
  setAttackTimer() {
    this.attackTimer++; // Increase the attack timer
    if (this.attackTimer >= Math.floor(Math.random() * 85) + 160) {     // When the timer expires (5-10 seconds)
      this.startAttacking();
    }
  }

  /**
   * the attack sequence starts
   * @returns {any}
   */
  startAttacking() {
    this.attacking = true; // Set the flag for the attack
    this.attackTimer = 0; // Reset the timer
    this.speed = 0; // Set the enemy's speed to 0 pixels per frame
    this.playSound(this.FinalEnemySoundAttack);
  }

  /**
   * changes direction and sets the speed randomly
   * @param {any} value - value of direction
   * @returns {any}
   */
  newDirectionAndSpeed(value) {
    this.enemyDirection = value; // Change the opponent's direction
    this.speed = Math.floor(Math.random() * 2) + 1;
  }
}
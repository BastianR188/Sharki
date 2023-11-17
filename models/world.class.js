class World {
  character = new Character();
  bubbles = [];
  level = level1;
  statusbar = statusbarScreen;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  youWin = false;

  backgroundsound = "audio/backsound.mp3";
  youloseSound = "audio/youlose.mp3";
  bossDieSound = "audio/bossdie.mp3";
  youWinSound = "audio/levelComplete.mp3";
  bubbleHitSound = "audio/bubbleHit.mp3";
  collectCoinSound = "audio/coin2.mp3";
  collectPoisonSound = "audio/collectitem.mp3";
  slapSound = "audio/slap.mp3";

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checksHitDetect();
    this.checkWinLose();
  }

  /**
   * Starts the check whether the intro should be started and whether you have won or not
   * @returns {any}
   */
  checkWinLose() {
    this.startFinalEnemy();
    this.checkWin();
    this.checkLose();
  }

  /**
   * starts the necessary functions whether something has collided or been hit
   * @returns {any}
   */
  checksHitDetect() {
    this.checkCollision();
    this.hitDetect();
    this.checkCollectItems();
    this.checkShocked();
    this.checkAttackHit();
  }

  /**
   * starts the respective sound audio and saves it and when it is finished it is removed again
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

  /**
   * set the new world and start the background music
   * @returns {any}
   */
  setWorld() {
    this.character.world = this;
    this.playSound(this.backgroundsound);
  }

  /**
   * checks whether the final battle has begun and starts it if necessary
   * @returns {any}
   */
  startFinalEnemy() {
    let intervalId = setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (enemy instanceof FinalEnemy) {
          if (this.character.x >= enemy.introDistance) {
            this.onlyFinalEnemy(enemy, intervalId);
          }
        }
      });
    });
  }

  /**
   * kills all other enemies when final fight starts
   * @param {any} enemy
   * @param {any} intervalId
   * @returns {any}
   */
  onlyFinalEnemy(enemy, intervalId) {
    enemy.StartIntro = true;
    this.level.enemies.forEach(enemy => {
      if (!(enemy instanceof FinalEnemy)) {
        enemy.live = 0;
      }
    });
    clearInterval(intervalId);
  }

  /**
   * checks whether you have lost and starts the sequence if you have lost
   * @returns {any}
   */
  checkLose() {
    let checkLoseIntervall = setInterval(() => {
      if (this.character.isDead()) {
        this.loseCommand(checkLoseIntervall);
      }
    }, 200);
  }

  /**
   * The sequence starts when you have lost
   * @param {any} checkLoseIntervall
   * @returns {any}
   */
  loseCommand(checkLoseIntervall) {
    this.YouLose();
    this.TryAgain();
    clearInterval(checkLoseIntervall);
  }

  /**
   * plays the sound audio if you have lost and shows game over in the window
   * @returns {any}
   */
  YouLose() {
    this.playSound(this.youloseSound);
    toggleClass("youLose", "none");
  }

  /**
   * shows the button tryagain
   * @returns {any}
   */
  TryAgain() {
    toggleClass("try-again", "none");
  }

  /**
   * checks whether you have won and starts the sequence if you have won
   * @returns {any}
   */
  checkWin() {
    let checkWinIntervall = setInterval(() => {
      if (this.level.enemies[0].isDead()) {
        this.winCommand(checkWinIntervall);
      }
    }, 200);
  }

  /**
   * starts the functions and sequence when you win
   * @param {any} checkWinIntervall
   * @returns {any}
   */
  winCommand(checkWinIntervall) {
    this.playSound(this.bossDieSound);
    this.YouWin();
    this.TryAgain();
    clearInterval(checkWinIntervall);
  }

  /**
   * plays victory song and shows the window that you won
   * @returns {any}
   */
  YouWin() {
    this.playSound(this.youWinSound);
    toggleClass("youWin", "none");
  }

  /**
   * returns when the intro battle begins
   * @returns {any}
   */
  ceckFinalFight() {
    return this.level.enemies[0].StartIntro;
  }

  /**
   * checks whether you are shocked and resets the value
   * @returns {any}
   */
  checkShocked() {
    setInterval(() => {
      if (this.ShockAndAlive()) {
        this.character.isShocked = false;
      }
    }, 1000 / 25);
  }

  /**
   * it is checked whether you did not die from the shock
   * @returns {any}
   */
  ShockAndAlive() {
    return (this.character.isShocked && !this.character.isHurt() && !this.character.isDead());
  }

  /**
   * The interval starts whether you collide with an enemy
   * @returns {any}
   */
  checkCollision() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.isAlive(enemy)) {
          this.character.hit(enemy);
        }
      });
    }, 1000 / 60);
  }

  /**
   * checks whether the respective object is alive
   * @param {any} enemy
   * @returns {any}
   */
  isAlive(enemy) {
    return (this.character.isColliding(enemy, 0) && !enemy.isDead() && !this.character.isDead() && !this.character.isDead());
  }

  /**
   * checks whether the bubber bubble hits an enemy
   * @returns {any}
   */
  hitDetect() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        this.bubbles.forEach((bubble) => {
          this.hitBubble(bubble, enemy);
        });
      });
    }, 1000 / 25);
  }

  /**
   * the function that when a bubble hits an opponent and whether the opponent can be hit
   * @param {any} bubble
   * @param {any} enemy
   * @returns {any}
   */
  hitBubble(bubble, enemy) {
    if (bubble.isColliding(enemy, 0)) {
      if (this.canHit(enemy)) {
        if (bubble.isPoison == true) {
          enemy.live -= this.character.specialAttackPoisonPower;
        } else {
          enemy.live -= this.character.specialAttackPower;
        } this.bubbleHit(enemy, bubble);
      }
    }
  }

  /**
   * starts the sound audio and removes the bubble when it hits
   * @param {any} enemy
   * @param {any} bubble
   * @returns {any}
   */
  bubbleHit(enemy, bubble) {
    this.playSound(this.bubbleHitSound);
    enemy.lastHit = new Date().getTime();
    this.bubbles.splice(this.bubbles.indexOf(bubble), 1);
  }

  /**
   * checks whether you can hit, because of spam protection and whether it is not already dead
   * @param {any} enemy
   * @returns {any}
   */
  canHit(enemy) {
    return (
      (enemy instanceof JellyFish && !enemy.isDead()) ||
      (enemy instanceof FinalEnemy && !enemy.isDead() && !enemy.spamProtection)
    );
  }

  /**
   * checks whether you pick up an item
   * @returns {any}
   */
  checkCollectItems() {
    setInterval(() => {
      for (let i = 0; i < this.level.items.length; i++) {
        const item = this.level.items[i];
        if (this.isItem(item)) {
          this.collectedItem(item, i);
        }
      }
    }, 1000 / 60);
  }

  /**
   * when you pick up a respective item
   * @param {any} item
   * @param {any} i
   * @returns {any}
   */
  collectedItem(item, i) {
    if (item instanceof Coin) {
      this.collectCoin(i);
    }
    if (item instanceof Poison) {
      this.collectPoison(i);
    }
  }

  /**
   * checks whether it is an item and whether it is the character
   * @param {any} item
   * @returns {any}
   */
  isItem(item) {
    return this.character.isColliding(item, 0) && !this.character.isDead();
  }

  /**
   * Removes the poison vial item and adds the values
   * @param {any} i
   * @returns {any}
   */
  collectPoison(i) {
    this.playSound(this.collectPoisonSound);
    this.character.specialPower += 25;
    this.level.items.splice(i, 1);
  }

  /**
   * Picks up the item coin and adds the values
   * @param {any} i
   * @returns {any}
   */
  collectCoin(i) {
    this.playSound(this.collectCoinSound);
    this.character.collectedCoin += 1;
    this.level.items.splice(i, 1);
  }

  /**
   * checks whether the respective attack hit the respective opponent
   * @returns {any}
   */
  checkAttackHit() {
    setInterval(() => {
      if (this.canAttack()) {
        this.level.enemies.forEach((enemy) => {
          if (this.isEnemyAlive(enemy)) {
            this.attackHitEnemy(enemy);
          }
        });
      }
    });
  }

  /**
   * checks whether the slap attack hits and whether the opponent is a jellyfish
   * @param {any} enemy
   * @returns {any}
   */
  attackHitEnemy(enemy) {
    if (enemy instanceof JellyFish) {
      this.character.hit(enemy);
    } else {
      this.hitSlapEnemy(enemy);
    }
  }

  /**
   * plays sound audio and sets the values if you catch an opponent with a slap
   * @param {any} enemy
   * @returns {any}
   */
  hitSlapEnemy(enemy) {
    this.playSound(this.slapSound);
    enemy.live -= this.character.attackPower;
    enemy.lastHit = new Date().getTime();
  }

  /**
   * checks whether the respective opponent is alive
   * @param {any} enemy
   * @returns {any}
   */
  isEnemyAlive(enemy) {
    return (this.character.isColliding(enemy, 65) && !enemy.isDead() && !enemy.isHurt());
  }

  /**
   * checks whether you can attack
   * @returns {any}
   */
  canAttack() {
    return (
      this.character.isAttacking === true && this.character.attackDmg === true
    );
  }

  /**
   * draws the respective objects
   * @returns {any}
   */
  draw() {
    this.addObjects();
    this.addHud();
    this.addLiveBar();
    // Draw() is called again and again
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * adds the respective object in the game
   * @returns {any}
   */
  addObjects() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addLevelChar();
    this.ctx.translate(-this.camera_x, 0);
  }

  /**
   * adds the life bars and hud
   * @returns {any}
   */
  addLiveBar() {
    this.ctx.font = "30px Luckiest Guy";
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillText(this.character.specialPower, 55, 50);
    this.ctx.fillText(this.character.live, 180, 50);
    this.ctx.fillText(this.character.collectedCoin, 305, 50);
    this.ctx.translate(this.camera_x, 0);
    this.ctx.translate(-this.camera_x, 0);
  }

  /**
   * adds the character and the level
   * @returns {any}
   */
  addLevelChar() {
    this.addObjectsToMap(this.level.bgo);
    this.addObjectsToMap(this.level.items);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.bubbles);
  }

  /**
   * adds the items and hud for the items
   * @returns {any}
   */
  addHud() {
    this.addObjectsToMap(this.statusbar.statusbarPoison);
    this.addObjectsToMap(this.statusbar.statusbarLive);
    this.addObjectsToMap(this.statusbar.statusbarCoin);
    this.addObjectsToMap(this.statusbar.statusbarFinalEnemy);
  }

  /**
   * adds the respective object into the game
   * @param {any} objects
   * @returns {any}
   */
  addObjectsToMap(objects) {
    try {
      objects.forEach((o) => {
        this.addToMap(o);
      });
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * adds the respective object with the respective direction
   * @param {any} mo
   * @returns {any}
   */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  /**
   * rotates the respective object
   * @param {any} mo
   * @returns {any}
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * turns the respective object back
   * @param {any} mo
   * @returns {any}
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
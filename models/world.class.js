class World {
    character = new Character();
    bubbles = [];
    level = level1;
    statusbar = statusbarScreen;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    intervalIds = [];
    youWin = false;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollision();
        this.hitDetect();
        this.checkCollectItems();
        this.checkShocked();
        this.checkAttackHit();
        this.startFinalEnemy();
        this.checkWin();
        this.checkLose();

    }


    reset() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }


    setWorld() {
        this.character.world = this;
        const backgroundsound = new Audio('audio/backsound.mp3');
        backgroundsound.play();
    }

    startFinalEnemy() {
        let intervalId = setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (enemy instanceof FinalEnemy) {
                    if (this.character.x >= enemy.introDistance) {
                        enemy.StartIntro = true;
                        clearInterval(intervalId);
                    }
                }
            })
        })
    }
    checkLose() {
        let checkLoseIntervall = setInterval(() => {
            if (this.character.isDead()) {
                this.YouLose();
                clearInterval(checkLoseIntervall);
            }
        }, 200)
    }
    YouLose() {
        // if (!world.level.enemies[0].StartIntro) {
        //     this.statusbar.botonGameOver[0].x = this.character.x + 91.5;
        //     this.statusbar.botonTryAgain[0].x = this.character.x + 140;
        // }
        // let YouLoseIntervall = setInterval(() => {
        //     this.statusbar.botonGameOver[0].y += 2;
        //     if (this.statusbar.botonGameOver[0].y >= 239) {
        //         this.TryAgain();
        //         clearInterval(YouLoseIntervall);
        //     }
        // }, 1000 / 60);

    }
    TryAgain() {
        // let TryAgainIntervall = setInterval(() => {
        //     this.statusbar.botonTryAgain[0].y -= 2;
        //     if (this.statusbar.botonTryAgain[0].y <= 350) {
        //         clearInterval(TryAgainIntervall);
        //     }
        // }, 1000 / 60);
    }
    checkWin() {
        let checkWinIntervall = setInterval(() => {
            if (this.level.enemies[0].isDead()) {
                const bossDieSound = new Audio('audio/bossdie.mp3');
                bossDieSound.play();
                this.YouWin();
                clearInterval(checkWinIntervall);
            }
        }, 200)
    };

    YouWin() {
        const youWinSound = new Audio('audio/levelComplete.mp3');
        youWinSound.play();
  document.getElementById('youWin').classList.remove('none');
    }

    ceckFinalFight() {
        return this.level.enemies[0].StartIntro;
    }

    checkShocked() {
        setInterval(() => {
            if (this.character.isShocked && !this.character.isHurt() && !this.character.isDead()) {
                this.character.isShocked = false;
            }
        }, 1000 / 25);
    }

    checkCollision() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy, 0) && !enemy.isDead() && !this.character.isDead() && !this.character.isDead()) {
                    this.character.hit(enemy);
                }
            })
        }, 1000 / 60);
    }

    hitDetect() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                this.bubbles.forEach((bubble) => {
                    if (bubble.isColliding(enemy, 0)) {
                        if (enemy instanceof JellyFish && !enemy.isDead() || enemy instanceof FinalEnemy && !enemy.isDead() && !enemy.spamProtection) {
                            if (bubble.isPoison == true) {
                                enemy.live -= this.character.specialAttackPoisonPower;
                            } else { enemy.live -= this.character.specialAttackPower; }
                            const bubbleHitSound = new Audio('audio/bubbleHit.mp3'); // create a new instance of the Audio class
                            bubbleHitSound.play(); // play the sound
                            enemy.lastHit = new Date().getTime();
                            this.bubbles.splice(this.bubbles.indexOf(bubble), 1);
                        }
                    }
                })
            })
        }, 1000 / 25);
    }

    checkCollectItems() {
        setInterval(() => {
            for (let i = 0; i < this.level.items.length; i++) {
                const item = this.level.items[i];

                if (this.character.isColliding(item, 0) && !this.character.isDead()) {
                    if (item instanceof Coin) {
                        const collectCoinSound = new Audio('audio/coin2.mp3'); // create a new instance of the Audio class
                        collectCoinSound.play(); // play the sound
                        this.character.collectedCoin += 1;
                        this.level.items.splice(i, 1);
                    }
                    if (item instanceof Poison) {
                        const collectPoisonSound = new Audio('audio/collectitem.mp3');
                        collectPoisonSound.play();
                        this.character.specialPower += 25;
                        this.level.items.splice(i, 1);
                    }

                };
            }
        }, 1000 / 60);
    }

    //         for (let i = 0; i < this.level.items.length; i++) {
    //             const item = this.level.items[i];
    //             if (this.character.isColliding(item, 0)) {
    //                 this.character.specialPower += 25;
    //                 this.level.poison.splice(i, 1);
    //                 break;
    //             }
    //         }
    //     })

    // checkCollectCoin() {
    //     setInterval(() => {
    //         for (let i = 0; i < this.level.coins.length; i++) {
    //             const coin = this.level.coins[i];
    //             if (this.character.isColliding(coin, 0)) {
    //                 this.character.collectedCoin += 1;
    //                 this.level.coins.splice(i, 1);
    //                 break;
    //             }
    //         }
    //     })
    // }

    checkAttackHit() {
        setInterval(() => {
            if (this.character.isAttacking === true && this.character.attackDmg === true) {
                this.level.enemies.forEach((enemy) => {
                    if (this.character.isColliding(enemy, 65) && !enemy.isDead() && !enemy.isHurt()) {
                        if (enemy instanceof JellyFish) {
                            this.character.hit(enemy);
                        } else {
                            const slapSound = new Audio('audio/slap.mp3');
                            slapSound.play();
                            enemy.live -= this.character.attackPower;
                            enemy.lastHit = new Date().getTime();
                        }
                    }
                });
            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.bgo);
        this.addObjectsToMap(this.level.items);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.bubbles);


        this.ctx.translate(-this.camera_x, 0);
        this.addObjectsToMap(this.statusbar.statusbarPoison);
        this.addObjectsToMap(this.statusbar.statusbarLive);
        this.addObjectsToMap(this.statusbar.statusbarCoin);
        this.addObjectsToMap(this.statusbar.statusbarFinalEnemy);
        this.ctx.font = "30px Luckiest Guy";
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillText(this.character.specialPower, 55, 50);
        this.ctx.fillText(this.character.live, 180, 50);
        this.ctx.fillText(this.character.collectedCoin, 305, 50);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);
        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };
    addObjectsToMap(objects) {
        try {
            objects.forEach(o => {
                this.addToMap(o)
            });
        } catch (e) { console.log(e) }
    }
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}
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

    setStoppableInterval(fn, time) {
        let id = setInterval(fn, time);
        intervalIds.push(id);
    }

    applySwimGravity() {
        setInterval(() => {
            this.y -= this.speedY;
        }, 1000 / 60)
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround()) {
                this.y += this.speedY;
                if (this.speedY > 0.35) {
                    this.speedY - 0.01;
                }
            }
        }, 1000 / 60)
    }

    isAboveGround() {
        return this.y + this.colheight + this.coly < 400;
    }

    isNearby(mo) {
        return this.distanceBetween = Math.sqrt(((this.x + this.colx + (this.colwidth / 2)) - (mo.x + mo.colx + (mo.colwidth / 2))) ** 2 + ((this.y + this.coly + (this.colheight / 2)) - (mo.y + mo.coly + (mo.colheight / 2))) ** 2);
    }

    isColliding(mo, val) {
        return this.x + this.colx + this.colwidth + val > mo.x + mo.colx &&
            this.y + this.coly + this.colheight > mo.y + mo.coly &&
            this.x + this.colx - val < mo.x + mo.colwidth + mo.colx &&
            this.y + this.coly < mo.y + mo.colheight + mo.coly;
    }


    checkSpamProtecting() {
        setInterval(() => {
            if (!this.spamProtect()) {
                this.spamProtection = false;
            }
        })
    }

    hit(mo) {
        if (!this.spamProtect()) {
            if (this.live > 0) {
                if (mo instanceof JellyFish) {
                    this.isShocked = true;
                } this.live -= mo.attackPower;
                if (this.live <= 0) {
                    this.live = 0;
                    this.currentImage = 0;
                }
                this.lastHit = new Date().getTime();
                if (this.otherDirection) {
                    this.x += 50;
                } else { this.x -= 50; }
                if (this.world.level.enemies[0].StartIntro) {
                } else { this.world.camera_x = -this.x + 100; }
            }
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.7;
    }

    spamProtect() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 3;
    }

    attack(image, img, poison, slap) {
        if (!this.isAttacking) {
            this.isAttacking = true;
            this.isAnimating = true;
            let i = 0;
            let intervalId = setInterval(() => {
                if (!this.isHurt()) {
                    let path = image[i];
                    this.img = this.imgCache[path];
                    i++;
                    if (i == 4 && slap) {
                        this.attackDmg = true;
                    }
                    if (i == 5 && slap) {
                        this.attackDmg = false;
                    }
                    if (i >= image.length) {
                        clearInterval(intervalId);
                        this.isAttacking = false;
                        this.isAnimating = false;
                        this.attackDmg = false;
                        if (!slap) {
                            this.createBubble(img, this.otherDirection, poison);
                        }
                        i = 0;
                    }
                } else {
                    clearInterval(intervalId);
                    this.isAttacking = false;
                    this.isAnimating = false;
                    this.attackDmg = false;
                    i = 0;
                }
            }, 100);
        }
    }

    isDead() {
        return this.live <= 0;
    }

    createBubble(img, od, p) {
        if (od) {
            let bubble = new Bubble(img, this.x, this.y + this.height / 2, od, p);
            world.bubbles.push(bubble);
        } else {
            let bubble = new Bubble(img, this.x + this.colx + this.colwidth, this.y + this.height / 2, od, p);
            world.bubbles.push(bubble);
        }
    }

    moveRight() {
        setInterval(() => {
            if (!this.isDead() && !this.isHurt()) {
                this.x += this.speed;
            }
        }, 1000 / 60);
    }

    moveLeft() {
        setInterval(() => {
            try {
                if (!this.isDead() && !this.isHurt() && world.character.x + 600 >= this.x) {
                    this.x -= this.speed;
                }
            } catch { }
        }, 1000 / 60);
    }

    moveToCharY() {
        let intervalIdmoveToCharY = setInterval(() => {
            try {
                if (!this.isDead() && !this.isHurt() && world.character.live > 0) {
                    if (this.SwimLine > world.character.y + world.character.coly + world.character.colheight) {
                        this.SwimLine -= this.speedY;
                    } else if (this.SwimLine < world.character.y + world.character.coly + world.character.colheight) {
                        this.SwimLine -= -this.speedY;
                    }
                } if (this.isDead() || world.character.live == 0) { clearInterval(intervalIdmoveToCharY); }
            } catch { }
        }, 1000 / 60);
    }

    moveToCharX() {
        let intervalIdmoveToCharX = setInterval(() => {
            try {
                if (!this.isDead() && !this.isHurt() && world.character.live > 0) {
                    if (this.x >= world.character.x + world.character.colx + (world.character.colwidth / 2)) {
                        this.x -= this.speed;
                    } else if (this.x <= world.character.x + world.character.colx) {
                        this.x -= -this.speed;
                    }
                } if (this.isDead() || world.character.live == 0) { clearInterval(intervalIdmoveToCharX); }
            } catch { }
        }, 1000 / 60);
    }

    waveMove() {
        setInterval(() => {
            this.y += this.speedY;
            this.speedY = this.speedY + 0.1 * this.direction;
        }, 1000 / 60);
        setInterval(() => {
            this.direction *= -1;
        }, 1000);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.currentImage++;
        if (this.isDead() && i == images.length - 1) {
            this.currentImage--;
        }
    }

    playAnimationAtOnce(img) {
        this.isAnimating = true;
        let i = 0;
        let intervalId = setInterval(() => {
            let path = img[i];
            this.img = this.imgCache[path];
            i++;
            if (i >= img.length) {
                clearInterval(intervalId);
                this.isAnimating = false;
                i = 0;
            }
        }, 170);
    }

}
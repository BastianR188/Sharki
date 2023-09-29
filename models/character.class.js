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


    Idle_Images = [
        './img/1.Sharkie/1.IDLE/1.png',
        './img/1.Sharkie/1.IDLE/2.png',
        './img/1.Sharkie/1.IDLE/3.png',
        './img/1.Sharkie/1.IDLE/4.png',
        './img/1.Sharkie/1.IDLE/5.png',
        './img/1.Sharkie/1.IDLE/6.png',
        './img/1.Sharkie/1.IDLE/7.png',
        './img/1.Sharkie/1.IDLE/8.png',
        './img/1.Sharkie/1.IDLE/9.png',
        './img/1.Sharkie/1.IDLE/10.png',
        './img/1.Sharkie/1.IDLE/11.png',
        './img/1.Sharkie/1.IDLE/12.png',
        './img/1.Sharkie/1.IDLE/13.png',
        './img/1.Sharkie/1.IDLE/14.png',
        './img/1.Sharkie/1.IDLE/15.png',
        './img/1.Sharkie/1.IDLE/16.png',
        './img/1.Sharkie/1.IDLE/17.png',
        './img/1.Sharkie/1.IDLE/18.png',
    ];
    LongIdle_Images = [
        './img/1.Sharkie/2.Long_IDLE/i1.png',
        './img/1.Sharkie/2.Long_IDLE/i2.png',
        './img/1.Sharkie/2.Long_IDLE/i3.png',
        './img/1.Sharkie/2.Long_IDLE/i4.png',
        './img/1.Sharkie/2.Long_IDLE/i5.png',
        './img/1.Sharkie/2.Long_IDLE/i6.png',
        './img/1.Sharkie/2.Long_IDLE/i7.png',
        './img/1.Sharkie/2.Long_IDLE/i8.png',
        './img/1.Sharkie/2.Long_IDLE/i9.png',
        './img/1.Sharkie/2.Long_IDLE/i10.png',
        './img/1.Sharkie/2.Long_IDLE/i11.png',
        './img/1.Sharkie/2.Long_IDLE/i12.png',
        './img/1.Sharkie/2.Long_IDLE/i13.png',
        './img/1.Sharkie/2.Long_IDLE/i14.png',
    ]
    Sleep_Images = [
        './img/1.Sharkie/2.Long_IDLE/i10.png',
        './img/1.Sharkie/2.Long_IDLE/i11.png',
        './img/1.Sharkie/2.Long_IDLE/i12.png',
        './img/1.Sharkie/2.Long_IDLE/i13.png',
        './img/1.Sharkie/2.Long_IDLE/i14.png',
    ]
    Swim_Images = [
        './img/1.Sharkie/3.Swim/1.png',
        './img/1.Sharkie/3.Swim/2.png',
        './img/1.Sharkie/3.Swim/3.png',
        './img/1.Sharkie/3.Swim/4.png',
        './img/1.Sharkie/3.Swim/5.png',
        './img/1.Sharkie/3.Swim/6.png',
    ];
    HurtPoisoned_Images = [
        './img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
    ];
    HurtElectricShock_Images = [
        './img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        './img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        './img/1.Sharkie/5.Hurt/2.Electric shock/3.png',
    ];
    DeadPoisoned_Images = [
        './img/1.Sharkie/6.dead/1.Poisoned/1.png',
        './img/1.Sharkie/6.dead/1.Poisoned/2.png',
        './img/1.Sharkie/6.dead/1.Poisoned/3.png',
        './img/1.Sharkie/6.dead/1.Poisoned/4.png',
        './img/1.Sharkie/6.dead/1.Poisoned/5.png',
        './img/1.Sharkie/6.dead/1.Poisoned/6.png',
        './img/1.Sharkie/6.dead/1.Poisoned/7.png',
        './img/1.Sharkie/6.dead/1.Poisoned/8.png',
        './img/1.Sharkie/6.dead/1.Poisoned/9.png',
        './img/1.Sharkie/6.dead/1.Poisoned/10.png',
        './img/1.Sharkie/6.dead/1.Poisoned/11.png',
        './img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];
    DeadShocked_Images = [
        './img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/6.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/10.png',
    ]
    Finslap_Images = [
        './img/1.Sharkie/4.Attack/Fin slap/1.png',
        './img/1.Sharkie/4.Attack/Fin slap/2.png',
        './img/1.Sharkie/4.Attack/Fin slap/3.png',
        './img/1.Sharkie/4.Attack/Fin slap/4.png',
        './img/1.Sharkie/4.Attack/Fin slap/5.png',
        './img/1.Sharkie/4.Attack/Fin slap/6.png',
        './img/1.Sharkie/4.Attack/Fin slap/7.png',
        './img/1.Sharkie/4.Attack/Fin slap/8.png',
    ];
    Bubble_Images = [
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',
    ];
    BubbleWithOutPoison_Images = [
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ];
    SpamProtect_Images = [
        '',
        './img/1.Sharkie/1.IDLE/6.png',
        '',
        './img/1.Sharkie/1.IDLE/4.png',
    ];


    bgb = [5, 6, 7, 8, 9]
    bgf = [10, 11, 12, 13, 14]
    bgl = [20, 21, 22, 23, 24]

    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.Swim_Images);
        this.loadImages(this.Idle_Images);
        this.loadImages(this.LongIdle_Images);
        this.loadImages(this.Sleep_Images);
        this.loadImages(this.HurtPoisoned_Images);
        this.loadImages(this.HurtElectricShock_Images);
        this.loadImages(this.Finslap_Images);
        this.loadImages(this.DeadPoisoned_Images);
        this.loadImages(this.DeadShocked_Images);
        this.loadImages(this.Bubble_Images);
        this.loadImages(this.BubbleWithOutPoison_Images);
        this.loadImages(this.SpamProtect_Images);
        this.Animate();

    }


    Animate() {



        // KameraFührung wenn der Character sich bewegt
        setInterval(() => {
            if (!this.isDead() && !this.isHurt() && !this.isAnimating) {
                if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                    this.moveCharRight();
                }
                if (this.world.keyboard.LEFT && this.x > -760) {
                    this.moveCharLeft();
                }
                if (this.world.keyboard.UP && this.y > -170) {
                    this.y -= this.speed;
                }
                if (this.world.keyboard.DOWN && this.y < 260) {
                    this.y += this.speed;
                }
            }
        })

        let intervallIDAnimation = setInterval(() => {
            if (this.isDead()) {
                return this.CharDeadAnimation(intervallIDAnimation);
            } if (this.isHurt()) {
                return this.CharHurtAnimation();
            } if (this.spamProtect()) {
                return this.playAnimation(this.SpamProtect_Images);
            } if (this.world.keyboard.SPACE == true || this.isAnimating == true) {
                return this.resetIdleTimer();
            } if (this.world.keyboard.RIGHT == true || this.world.keyboard.LEFT == true || this.world.keyboard.UP == true || this.world.keyboard.DOWN == true) {
                return this.CharSwimAnimation();
            } if (this.isIdle || this.isAnimating) {
                return this.CharIdleAnimation();
            }
            this.playAnimation(this.Idle_Images);
        }, 170);

        document.addEventListener('keydown', (event) => {
            if (event.code === 'Space' && !this.isAnimating && !this.isDead()) {
                this.attack(this.Finslap_Images, null, null, true);
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.code === 'KeyD' && !this.isAnimating && !this.isDead()) {
                let withPoison = false;
                let img = '';
                if (this.specialPower > 0) {
                    ({ img, withPoison } = this.attackWithSpecial(img, withPoison));
                } else {
                    img = this.attackWithoutSpecial(img);
                }
                this.attack(img, this.bubble, withPoison);
            }
        });

    }

    attackWithoutSpecial(img) {
        img = this.BubbleWithOutPoison_Images;
        this.bubble = './img/1.Sharkie/4.Attack/Bubble trap/Bubble.png';
        return img;
    }

    attackWithSpecial(img, withPoison) {
        img = this.Bubble_Images;
        this.bubble = './img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png';
        this.specialPower -= 20;
        withPoison = true;
        if (this.specialPower < 0) {
            this.specialPower = 0;
        }
        return { img, withPoison };
    }

    CharIdleAnimation() {
        this.playAnimationAtOnce(this.LongIdle_Images);
    }

    CharSwimAnimation() {
        this.playAnimation(this.Swim_Images);
        this.resetIdleTimer();
        world.character.isIdle = false;
    }

    CharHurtAnimation() {
        if (this.isShocked) {
            this.playAnimation(this.HurtElectricShock_Images);
        } else {
            this.playAnimation(this.HurtPoisoned_Images);
        } this.resetIdleTimer();
    }

    CharDeadAnimation(intervallIDAnimation) {
        if (this.isShocked) {
            this.deadShockAnimation();
        } else {
            this.deadPoisonedAnimation();
        } clearInterval(intervallIDAnimation);
    }

    moveCharLeft() {
        if (this.world.ceckFinalFight()) {
            if (this.x > 1780) {
                this.x -= this.speed;
            }
        } else {
            this.moveCameraLeft();
        }
        this.otherDirection = true;
    }

    moveCameraLeft() {
        this.moveBg(-this.speed, -0.9, -0.6, -0, 3);
        if (this.world.camera_x <= -this.x + (600 - this.width)) {
            this.world.camera_x = this.world.camera_x + this.speed + this.speed;
        }
    }

    moveCharRight() {
        if (this.world.ceckFinalFight()) {
            if (this.x < 2480) {
                this.x += this.speed;
            }
        } else {
            this.moveCameraRight();
        }
        this.otherDirection = false;
    }

    moveCameraRight() {
        this.moveBg(this.speed, 0.9, 0.6, 0, 3);
        if (this.world.camera_x >= -this.x + 100) {
            this.world.camera_x = this.world.camera_x - this.speed - this.speed;
        }
    }

    moveBg(speed, sbgb, sbgf, sbgl) {
        this.x += speed;
        this.backgroundAnimation(this.bgb, sbgb);
        this.backgroundAnimation(this.bgf, sbgf);
        this.backgroundAnimation(this.bgl, sbgl);
    }

    backgroundAnimation(bg, time) {
        for (let i = 0; i < bg.length; i++) {
            this.world.level.bgo[bg[i]].x += time;
        }
    }
    deadShockAnimation() {
        this.playAnimationAtOnce(this.DeadShocked_Images);
        this.applyGravity();
    }
    deadPoisonedAnimation() {
        this.playAnimationAtOnce(this.DeadPoisoned_Images);
        this.applySwimGravity();
    }

    resetIdleTimer() {
        world.character.isIdle = false;
        clearTimeout(this.idleTimer);
        this.idleTimer = setTimeout(this.setIdle, 10000); // 10 seconds
    }

    setIdle() {
        world.character.isIdle = true;
    }
}



class FinalEnemy extends MoveableObject {
    speed = 0;
    StartIntro = false; // ob der Intro gestartet ist
    height = 400;
    width = 290;
    colx = 40;
    coly = 200;
    colwidth = 210;
    colheight = 115;
    attackPower = 33;
    live = 100;
    spamProtection = true; // schutz damit der FinalEnemy nicht vorher angegriffen wird mit Bubble
    introDistance = 1000; // der Distanz zwischen dem Character und dem FinalEnemy
    enemyDirection = Math.random() < 0.5 ? -1 : 1; // Zufällige Richtung des Gegners (-1 für nach oben, 1 für nach unten)
    enemySpeed = Math.floor(Math.random() * 3) + 1; // Zufällige Geschwindigkeit des Gegners (1-3 Pixel pro Frame)
    attackTimer = 0; // Timer für den Angriff des Gegners
    attacking = false; // ob der Gegner gerade angreift
    attackDistance = 115; // wie weit der angriff gehen soll
    direktion = -1; // gibt an welche Richtung
    finalEnemySoundAttack = new Audio('audio/bossattack.mp3');

    Introduce_Images = [
        './img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        './img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];
    Swim_Images = [
        './img/2.Enemy/3 Final Enemy/2.floating/1.png',
        './img/2.Enemy/3 Final Enemy/2.floating/2.png',
        './img/2.Enemy/3 Final Enemy/2.floating/3.png',
        './img/2.Enemy/3 Final Enemy/2.floating/4.png',
        './img/2.Enemy/3 Final Enemy/2.floating/5.png',
        './img/2.Enemy/3 Final Enemy/2.floating/6.png',
        './img/2.Enemy/3 Final Enemy/2.floating/7.png',
        './img/2.Enemy/3 Final Enemy/2.floating/8.png',
        './img/2.Enemy/3 Final Enemy/2.floating/9.png',
        './img/2.Enemy/3 Final Enemy/2.floating/10.png',
        './img/2.Enemy/3 Final Enemy/2.floating/11.png',
        './img/2.Enemy/3 Final Enemy/2.floating/12.png',
        './img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];
    Attack_Images = [
        './img/2.Enemy/3 Final Enemy/Attack/1.png',
        './img/2.Enemy/3 Final Enemy/Attack/2.png',
        './img/2.Enemy/3 Final Enemy/Attack/3.png',
        './img/2.Enemy/3 Final Enemy/Attack/4.png',
        './img/2.Enemy/3 Final Enemy/Attack/5.png',
        './img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];
    Hurt_Images = [
        './img/2.Enemy/3 Final Enemy/Hurt/1.png',
        './img/2.Enemy/3 Final Enemy/Hurt/2.png',
        './img/2.Enemy/3 Final Enemy/Hurt/3.png',
        './img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ];
    Dead_Images = [
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];
    FinalEnemyLive_Images = [
        './img/4. Marcadores/orange/0_  copia.png',
        './img/4. Marcadores/orange/20_ copia 2.png',
        './img/4. Marcadores/orange/40_  copia.png',
        './img/4. Marcadores/orange/60_  copia.png',
        './img/4. Marcadores/orange/80_  copia.png',
        './img/4. Marcadores/orange/100_  copia.png',
    ]



    constructor(img, x, y, intro) {
        super().loadImage(img);
        this.loadImages(this.Introduce_Images);
        this.loadImages(this.Swim_Images);
        this.loadImages(this.Attack_Images);
        this.loadImages(this.Hurt_Images);
        this.loadImages(this.Dead_Images);
        this.x = x;
        this.y = y;
        this.introDistance = intro;

        this.Animate();

    }
    Animate() {
        let intervalStartId = setInterval(() => { // start animation
            if (this.StartIntro) {  
                this.playAnimationAtOnce(this.Introduce_Images);
                this.spamProtection = false;
                const introSound = new Audio('audio/finalenemyintro.mp3');
                introSound.play();
                clearInterval(intervalStartId);
            }
        }, 1000 / 25);

        setInterval(() => {
            try {
                if (this.StartIntro && world.statusbar.statusbarFinalEnemy[0].y < 0) {
                    world.statusbar.statusbarFinalEnemy[0].y += 1;
                }
            } catch { }
        }, 1000 / 60);

        setInterval(() => {
            try {
                if (this.live <= 0) {
                    world.statusbar.statusbarFinalEnemy[0].img.src = './img/4. Marcadores/orange/0_  copia.png';
                } else if (this.live <= 20) {
                    world.statusbar.statusbarFinalEnemy[0].img.src = './img/4. Marcadores/orange/20_ copia 2.png';

                } else if (this.live <= 40) {
                    world.statusbar.statusbarFinalEnemy[0].img.src = './img/4. Marcadores/orange/40_  copia.png';

                } else if (this.live <= 60) {
                    world.statusbar.statusbarFinalEnemy[0].img.src = './img/4. Marcadores/orange/60_  copia.png';

                } else if (this.live <= 80) {
                    world.statusbar.statusbarFinalEnemy[0].img.src = './img/4. Marcadores/orange/80_  copia.png';

                } else {
                    world.statusbar.statusbarFinalEnemy[0].img.src = './img/4. Marcadores/orange/100_  copia.png';

                }
            } catch { }
        }, 1000 / 25);

        let intervalId = setInterval(() => { // bewegungs animation
            if (this.StartIntro && !this.isAnimating && !this.spamProtection) {
                if (this.isDead()) {
                    this.applySwimGravity();
                    this.playAnimationAtOnce(this.Dead_Images);
                    clearInterval(intervalId);
                } else if (this.isHurt()) {
                    this.playAnimation(this.Hurt_Images);
                } else if (this.attacking) {
                    this.playAnimation(this.Attack_Images);
                } else {
                    this.playAnimation(this.Swim_Images);
                }
            }
        }, 170);

        setInterval(() => {
            if (!this.isDead() && this.StartIntro) {
                this.MoveAI();
            }
        }, 1000 / 60);
    }

    FinalEnemyAppears() {
        this.StartIntro = true;
    }

    MoveAI() {
        if (!this.attacking) { // Wenn der Gegner nicht angreift
            this.y += this.enemyDirection * this.speed; // Bewege den Gegner in der aktuellen Richtung mit der aktuellen Geschwindigkeit
            if (this.y + this.coly < 0) { // Wenn der Gegner das obere oder untere Ende des Canvas erreicht hat
                this.enemyDirection = +1; // Ändere die Richtung des Gegners
                this.speed = Math.floor(Math.random() * 2) + 1; // Wähle eine neue zufällige Geschwindigkeit
            }
            if (this.y + this.coly + this.colheight > 460) {
                this.enemyDirection = -1;
                this.speed = Math.floor(Math.random() * 2) + 1; // Wähle eine neue zufällige Geschwindigkeit
            }
            this.attackTimer++; // Erhöhe den Timer für den Angriff
            if (this.attackTimer >= Math.floor(Math.random() * 85) + 160) { // Wenn der Timer abgelaufen ist (5-10 Sekunden)
                this.attacking = true; // Setze das Flag für den Angriff
                this.attackTimer = 0; // Setze den Timer zurück
                this.speed = 0; // Setze die Geschwindigkeit des Gegners auf 0 Pixel pro Frame
            }
        } else { // Wenn der Gegner angreift
            this.attackTimer++; // Erhöhe den Timer für den Angriff
            if (this.attackTimer == 61) {
                this.speed = 10;
            }
            this.x += this.direktion * this.speed; // Bewege den Gegner in der aktuellen Richtung mit der aktuellen Geschwindigkeit
            if (this.attackTimer == this.attackDistance) { // Wenn der Gegner die Angriffsstrecke erreicht hat
                this.attackTimer = 0;
                this.direktion = -this.direktion; // Ändere die Richtung des Gegners
                this.otherDirection = !this.otherDirection;
                this.speed = Math.floor(Math.random() * 2) + 1; // Wähle eine neue zufällige Geschwindigkeit
                this.attacking = false; // Setze das Flag für den Angriff zurück
            }
            this.finalEnemySoundAttack.play();
        }
    }



}
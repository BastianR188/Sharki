class Bubble extends MoveableObject {
    bubble_Images = [
        './img/1.Sharkie/4.Attack/Bubble trap/Bubble/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/Bubble/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/Bubble/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/Bubble/4.png',

    ]
    bubbleWithOutPoison_Images = [
        './img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble/4.png',
    ]
    Images;
    speed = 2;
    height = 50;
    width = 50;
    speedY = -3.0;
    direction = 1;
    colx = 1;
    coly = 1;
    colheight = 50;
    colwidth = 50;
    isPoison = null;
    x;
    y;

    // img, position x, position y, in welche Richtung, ob mit oder ohne gift
    constructor(img, x, y, od, p) {
        super().loadImage(img);
        this.loadImages(this.bubble_Images);
        this.loadImages(this.bubbleWithOutPoison_Images);
        this.isPoison = p;
        if (this.isPoison) {
            this.Images = this.bubbleWithOutPoison_Images;
        } else {
            this.Images = this.bubble_Images;
        }
        this.x = x;
        this.y = y;
        this.Animate(od);

    }
    Animate(od) {
        if (od == true) {
            this.moveLeft();
        } else {
            this.moveRight();
        }

        // das die Blase eine auf und ab Bewegung macht
        this.waveMove();

        // spielt die animation ab
        setInterval(() => {
            this.playAnimation(this.Images);
        }, 75)

    }
}
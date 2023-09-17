class Coin extends MoveableObject {
    Coin_Images = [
        './img/4. Marcadores/1. Coins/1.png',
        './img/4. Marcadores/1. Coins/2.png',
        './img/4. Marcadores/1. Coins/3.png',
        './img/4. Marcadores/1. Coins/4.png',
    ];
    height = 40;
    width = 40;
    colheight = 40;
    colwidth = 40;

    constructor(img, x, y) {
        super().loadImage(img);
        this.loadImages(this.Coin_Images);
        this.x = x;
        this.y = y;
        this.Animate();
    }

    Animate() {
        setInterval(() => {
            this.playAnimation(this.Coin_Images);
        }, 170)
    }
}
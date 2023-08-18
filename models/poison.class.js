class Poison extends MoveableObject {
    Poison_Images = [
        './img/4. Marcadores/Posión/Animada/1.png',
        './img/4. Marcadores/Posión/Animada/2.png',
        './img/4. Marcadores/Posión/Animada/3.png',
        './img/4. Marcadores/Posión/Animada/4.png',
        './img/4. Marcadores/Posión/Animada/5.png',
        './img/4. Marcadores/Posión/Animada/6.png',
        './img/4. Marcadores/Posión/Animada/7.png',
        './img/4. Marcadores/Posión/Animada/8.png',
    ];
    height = 100;
    width = 60;
    colheight = 100;
    colwidth = 60;

    constructor(img, x, y) {
        super().loadImage(img);
        this.loadImages(this.Poison_Images);
        this.x = x;
        this.y = y;
        this.Animate();
    }
    Animate() {
        setInterval(() => {
            this.playAnimation(this.Poison_Images);
        }, 170)

    }
}

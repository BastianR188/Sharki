class BackgroundObjects extends MoveableObject {

    height = 480;
    width = 860;
    constructor(img, x, y) {
        super().loadImage(img);
        this.x = x;
        this.y = y;
    }

}
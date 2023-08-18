class StatusBar extends DrawAbleObject {
    height = 65;
    width = 65;
    constructor(img, x, y, width, height) {
        super().loadImage(img);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
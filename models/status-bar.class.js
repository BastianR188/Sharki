class StatusBar extends DrawAbleObject {
    height = 65;
    width = 65;
    constructor(img, x, y, width, height, images) {
        super().loadImage(img);
        if (!images == null) {
            this.loadImages(images);
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
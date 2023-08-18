class Botons extends MoveableObject {
    height = 240;
    width = 480;
    Images;
    noHoverImg;
    hoverImg;
    clickedImg;
    isHovered = false;
    isClicked = false;

    constructor(img, x, y, images, width, height, hoverImg, clickedimg) {
        super().loadImage(img);
        this.Images = images;
        this.noHoverImg = images;
        this.hoverImg = hoverImg;
        this.clickedImg = clickedimg;
        this.loadImages(this.clickedImg);
        this.loadImages(this.hoverImg);
        this.loadImages(this.Images);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.Animate();
    }
    Animate() {
        let intervallIDAnimate = setInterval(() => {
            if (this.isClicked) {
                this.Images = this.clickedImg;
            } else if (this.isHovered) {
                this.Images = this.hoverImg;
            } else { this.Images = this.noHoverImg; }
            let i = this.currentImage % this.Images.length;
            let path = this.Images[i];
            this.img = this.imgCache[path];
            this.currentImage++;
            if (this.isDead() && i == this.Images.length - 1) {
                this.currentImage--;
            }
        }, 250);
        // this.intervalIds.push(intervallIDAnimate);
    }
}

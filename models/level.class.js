class Level {

    enemies;
    bgo;
    items;
    statusbarFinalEnemy;

    level_end_x = 2680;

    constructor(enemies, bgo, items, statusbarFinalEnemy) {
        this.enemies = enemies;
        this.bgo = bgo;
        this.items = items;

        this.statusbarFinalEnemy = statusbarFinalEnemy;
    }
}

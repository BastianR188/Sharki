let level1;

/**
 * set level 1
 * @returns {any}
 */
function initLevel() {
    level1 = new Level(

        [
            new FinalEnemy('./img/2.Enemy/3 Final Enemy/1.Introduce/1.png', 2400, 0, 2000),
            new PufferFish('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png', 600, 600),
            new PufferFish('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png', 600, 600),
            new PufferFish('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png', 600, 600),
            new JellyFish('./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png', 1000, 600, 2),
            new JellyFish('./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png', 1000, 600, 2),
            new PufferFish('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png', 1200, 580),
            new PufferFish('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png', 1200, 580),
            new PufferFish('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png', 1200, 580),
            new JellyFish('./img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png', 1500, 280, 0),

        ],
        [
            new BackgroundObjects('img/3. Background/Layers/5. Water/L2.png', -860, 0),
            new BackgroundObjects('img/3. Background/Layers/5. Water/L1.png', 0, 0),
            new BackgroundObjects('img/3. Background/Layers/5. Water/L2.png', 860, 0),
            new BackgroundObjects('img/3. Background/Layers/5. Water/L1.png', 1720, 0),
            new BackgroundObjects('img/3. Background/Layers/5. Water/L2.png', 2580, 0),
            new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/L2.png', -860, 0),
            new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/L1.png', 0, 0),
            new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/L2.png', 860, 0),
            new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/L1.png', 1720, 0),
            new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/L2.png', 2580, 0),
            new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/L2.png', -860, 0),
            new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/L1.png', 0, 0),
            new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/L2.png', 860, 0),
            new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/L1.png', 1720, 0),
            new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/L2.png', 2580, 0),
            new BackgroundObjects('img/3. Background/Layers/2. Floor/L2.png', -860, 0),
            new BackgroundObjects('img/3. Background/Layers/2. Floor/L1.png', 0, 0),
            new BackgroundObjects('img/3. Background/Layers/2. Floor/L2.png', 860, 0),
            new BackgroundObjects('img/3. Background/Layers/2. Floor/L1.png', 1720, 0),
            new BackgroundObjects('img/3. Background/Layers/2. Floor/L2.png', 2580, 0),
            new BackgroundObjects('img/3. Background/Layers/1. Light/2.png', -860, 0),
            new BackgroundObjects('img/3. Background/Layers/1. Light/1.png', 0, 0),
            new BackgroundObjects('img/3. Background/Layers/1. Light/2.png', 860, 0),
            new BackgroundObjects('img/3. Background/Layers/1. Light/1.png', 1720, 0),
            new BackgroundObjects('img/3. Background/Layers/1. Light/2.png', 2580, 0),
        ],
        [
            new Poison('./img/4. Marcadores/Posión/Animada/1.png', 1600, 50),
            new Poison('./img/4. Marcadores/Posión/Animada/1.png', 800, 160),
            new Poison('./img/4. Marcadores/Posión/Animada/1.png', 2500, 380),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 300, 240),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 425, 240),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 550, 240),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 700, 100),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 900, 380),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 700, 380),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 900, 100),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 1300, 240),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 1400, 240),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 1500, 240),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 1600, 240),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 1700, 240),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 1800, 240),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 1900, 240),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 2300, 50),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 2250, 135),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 2200, 240),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 2250, 330),
            new Coin('./img/4. Marcadores/1. Coins/1.png', 2300, 420),
        ],
    );
}
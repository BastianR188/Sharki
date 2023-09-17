statusbarFinalEnemy_Images = [
    'img/4. Marcadores/orange/0_  copia.png',
    'img/4. Marcadores/orange/20_ copia 2.png',
    'img/4. Marcadores/orange/40_  copia.png',
    'img/4. Marcadores/orange/60_  copia.png',
    'img/4. Marcadores/orange/80_  copia.png',
    'img/4. Marcadores/orange/100_  copia.png',
]

const statusbarScreen = new Hud(

    [
        new StatusBar('./img/4. Marcadores/green/100_ copia 5.png', 0, 0, 65, 65)          // statusbarPoison
    ],
    [
        new StatusBar('./img/4. Marcadores/green/100_  copia 3.png', 120, 0, 65, 65)      // statusbarLive
    ],
    [
        new StatusBar('./img/4. Marcadores/green/100_ copia 6.png', 240, 5, 65, 65)        // statusbarCoin
    ],
    [
        new StatusBar('./img/4. Marcadores/orange/100_  copia.png', 460, -65, 240, 65, statusbarFinalEnemy_Images),   // LiveBar FinalEnemey
    ]
)
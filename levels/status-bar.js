YouWin_Images = [
    './img/6.Botones/Tittles/You win/Recurso 19.png',
    './img/6.Botones/Tittles/You win/Recurso 20.png',
    './img/6.Botones/Tittles/You win/Recurso 21.png',
    './img/6.Botones/Tittles/You win/Recurso 22.png',
];
GameOver_Images = [
    './img/6.Botones/Tittles/Game Over/Recurso 9.png',
    './img/6.Botones/Tittles/Game Over/Recurso 10.png',
    './img/6.Botones/Tittles/Game Over/Recurso 11.png',
    './img/6.Botones/Tittles/Game Over/Recurso 12.png',
    './img/6.Botones/Tittles/Game Over/Recurso 13.png',
];

TryAgain_Images = [
    './img/6.Botones/Try again/Recurso 17.png',
];
TryAgain_Hover = [
    './img/6.Botones/Try again/Recurso 15.png',
];
TryAgain_Clicked = [
    './img/6.Botones/Try again/Recurso 16.png',
]
YouwinBG_Images = [
    './img/6.Botones/Tittles/You win/Mesa de trabajo 1.png',
]
Dumb_Img = [];
statusbarFinalEnemy_Images = [
    'img/4. Marcadores/orange/0_  copia.png',
    'img/4. Marcadores/orange/20_ copia 2.png',
    'img/4. Marcadores/orange/40_  copia.png',
    'img/4. Marcadores/orange/60_  copia.png',
    'img/4. Marcadores/orange/80_  copia.png',
    'img/4. Marcadores/orange/100_  copia.png',
]

const statusbarScreen = new Statusbar(

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
    ],
    [
        new Botons('./img/6.Botones/Tittles/You win/Recurso 19.png', 2091, -240, YouWin_Images, 337, 84, Dumb_Img, Dumb_Img), // YouWin text
    ],
    [
        new Botons('./img/6.Botones/Tittles/Game Over/Recurso 9.png', 2091, -240, GameOver_Images, 337, 84, Dumb_Img, Dumb_Img),    // GameOver Text
    ],
    [
        new Botons('./img/6.Botones/Try again/Recurso 15.png', 2145, 480, TryAgain_Images, 240, 80, TryAgain_Hover, TryAgain_Clicked),  // TryAgain Button
    ],
    [
        new Botons('./img/6.Botones/Tittles/You win/Mesa de trabajo 1.png', 1900, -480, YouwinBG_Images, 720, 480, Dumb_Img, Dumb_Img), // YouWin Hintergrund
    ],

)
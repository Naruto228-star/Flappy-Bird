"use strict";

var Score  = 0

var Best = 0

new Phaser.Game({
    type: Phaser.AUTO,
    width: 500,
    height: 877,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }
        }
    },
    scene: [Preload, Menu, Game]
});

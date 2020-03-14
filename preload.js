class Preload extends Phaser.Scene {
  constructor () {
    super('Preload');
  }

  preload () {
    this.load.image('ground','https://kevinmongiello.github.io/flappybird/bin/pics/ground_chopped.png');
    this.load.image('background','https://kevinmongiello.github.io/flappybird/bin/pics/ground.jpg');
    this.load.image('sky', 'https://kevinmongiello.github.io/flappybird/bin/pics/background.jpg');
    this.load.spritesheet('bird', 'https://kevinmongiello.github.io/flappybird/bin/pics/bird_sprite.png',{ frameWidth: 92, frameHeight: 64, endFrame: 3 });
    this.load.image('collontop', 'https://kevinmongiello.github.io/flappybird/bin/pics/pipe_180.png')
    this.load.image('collonbot', 'https://kevinmongiello.github.io/flappybird/bin/pics/pipe.png')
    this.load.image('collonfirst', 'https://kevinmongiello.github.io/flappybird/bin/pics/pipe_copy_180.png')
    this.load.image('collonsecond', 'https://kevinmongiello.github.io/flappybird/bin/pics/pipe_copy.png')
    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
  }

  create (){
    WebFont.load({
      google: {
        families: ['Bungee']
      },
      active: () => {
        this.scene.start('Game');
      }
    })
  }
}

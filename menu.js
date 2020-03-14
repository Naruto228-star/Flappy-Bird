class Menu extends Phaser.Scene {
  constructor () {
    super('Menu');



    this.ground = null;
    this.bird = null;
    this.graphics = null;

    this.speed = 1

  }

  create (){
    var bg  = this.add.image(250, 434, 'sky');
    bg.width = 500
    bg.height = 877

    this.ground =  this.add.image(0, 780, 'ground');
    this.background =  this.add.image(480, 780, 'background');

    this.bird = this.physics.add.sprite(150, 380, 'bird');
    this.bird.setScale(0.7)
    this.bird.setCollideWorldBounds(true);

    this.anims.create({
        key: 'fly',
        frames: this.anims.generateFrameNumbers('bird', { start: 0, end: 2, first: 0 }),
        frameRate: 10,
        repeat: -1
    });

    this.graphics = this.add.graphics()

    this.graphics.fillStyle(0x804000, 1);

    this.graphics.fillRoundedRect(250 - 150 - 5, 100 -5, 310, 210, 0);



    this.graphics.fillStyle(0xff8c1a, 1);

    this.graphics.fillRoundedRect(250 - 150, 100, 300, 200, 0);



    var keyObj = this.input.keyboard.addKey('W');

    keyObj.on('down', function(event) {

    });


    var score = this.add.text(250, 100,  'Best', {
      fontFamily:  'Bungee',
      fontSize: 32,
      color: 'white'
    });

    score
      .setStroke('black', 6)
      .setOrigin(0.5, 0)

    var score_int = this.add.text(250, 150,  Score, {
      fontFamily:  'Bungee',
      fontSize: 32,
      color: 'white'
    });

    score_int
      .setStroke('black', 6)
      .setOrigin(0.5, 0)

    var best = this.add.text(250, 200,  'Score', {
      fontFamily:  'Bungee',
      fontSize: 32,
      color: 'white'
    });

    best
      .setStroke('black', 4)
      .setOrigin(0.5, 0)

      var best_int = this.add.text(250, 250,  Best, {
        fontFamily:  'Bungee',
        fontSize: 32,
        color: 'white'
      });

      best_int
        .setStroke('black', 4)
        .setOrigin(0.5, 0)

      var restart_btn = this.add.rectangle(250, 500, 200, 120, 0xB29700);

      var restart = this.add.text(250, 485,  'Restart', {
        fontFamily:  'Bungee',
        fontSize: 26,
        color: 'white'
      });

      restart
        .setStroke('black', 4)
        .setOrigin(0.5, 0)


      restart.setInteractive();

      restart.on('pointerdown', () => {
        this.scene.start('Game');
      });

      restart_btn.setInteractive();

      restart_btn.on('pointerdown', () => {
        this.scene.start('Game');
      });




  }

  update () {
    this.background.x -= this.speed
    this.ground.x -= this.speed

    if (this.ground.x < -96) {
      this.background.x = 480
      this.ground.x = 0
    }

    if (this.bird.y > 380) {
      this.bird.setVelocityY(-150)
      this.bird.anims.play('fly')
    }

    if (this.speed > 7){
      this.speed = 7
    }
  }

}

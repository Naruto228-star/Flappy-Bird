class Game extends Phaser.Scene {
  constructor () {
    super('Game');

    this.count = 0
    this.isCount = false
    this.isCount_2 = false
    this.isStart = false


    this.ground = null;
    this.bird = null;
    this.background = null;
    this.collonbot = null;
    this.collonsecond = null;
    this.collontop = null;
    this.collonfirst = null;
    this.collonsecond_2 = null;
    this.collonbot_2 = null;
    this.collontop_2 = null;
    this.collonfirst_2 = null;
    this.graphics = null;
    this.collontop_y = 150;
    this.collonbot_y = 514;
    this.collonsecond_y = 640;
    this.collonfirst_y = -20;
    this.collonsecond_2_y = 640;
    this.collonbot_2_y = 514;
    this.collontop_2_y = 150;
    this.collonfirst_2_y = -20;

    this.speed = 1
  }

  create (){
    var bg  = this.add.image(250, 434, 'sky');
    bg.width = 500
    bg.height = 877

    this.collonsecond = this.physics.add.image( 660, this.collonsecond_y , 'collonsecond')
    this.collonsecond.setScale(0.5)
    this.collonsecond.displayHeight = 400
    this.collonsecond.body.setAllowGravity(false);

    this.collonbot = this.physics.add.image( 660, this.collonbot_y , 'collonbot')
    this.collonbot.setScale(0.5)
    this.collonbot.body.setAllowGravity(false);

    this.collontop = this.physics.add.image( 660, this.collontop_y , 'collontop')
    this.collontop.setScale(0.5)
    this.collontop.body.setAllowGravity(false);

    this.collonfirst = this.physics.add.image( 660, this.collonfirst_y, 'collonfirst')
    this.collonfirst.setScale(0.5)
    this.collonfirst.body.setAllowGravity(false);
    this.collonfirst.displayHeight = 400

    this.collonsecond_2 = this.physics.add.image(960, this.collonsecond_2_y, 'collonsecond')
    this.collonsecond_2.setScale(0.5)
    this.collonsecond_2.displayHeight = 400
    this.collonsecond_2.body.setAllowGravity(false);
    this.collonbot_2 = this.physics.add.image(960, this.collonbot_2_y, 'collonbot')
    this.collonbot_2.setScale(0.5)
    this.collonbot_2.body.setAllowGravity(false);
    this.collontop_2 = this.physics.add.image(960, this.collontop_2_y, 'collontop')
    this.collontop_2.setScale(0.5)
    this.collontop_2.body.setAllowGravity(false);
    this.collonfirst_2 = this.physics.add.image(960, this.collonfirst_2_y, 'collonfirst')
    this.collonfirst_2.setScale(0.5)
    this.collonfirst_2.displayHeight = 400
    this.collonfirst_2.body.setAllowGravity(false);


    this.ground =  this.add.image(0, 780, 'ground');
    this.background =  this.add.image(480, 780, 'background');

    this.bird = this.physics.add.sprite(150, 380, 'bird');
    this.bird.setScale(0.7)

    this.graphics = this.add.graphics().setInteractive();;



    this.physics.add.overlap(this.bird, this.collonbot);
    this.physics.add.overlap(this.bird, this.collontop);
    this.physics.add.overlap(this.bird, this.collonfirst);
    this.physics.add.overlap(this.bird, this.collonsecond);

    this.physics.add.overlap(this.bird, this.collonbot_2);
    this.physics.add.overlap(this.bird, this.collontop_2);
    this.physics.add.overlap(this.bird, this.collonfirst_2);
    this.physics.add.overlap(this.bird, this.collonsecond_2);


    this.anims.create({
        key: 'fly',
        frames: this.anims.generateFrameNumbers('bird', { start: 0, end: 2, first: 0 }),
        frameRate: 10,
        repeat: -1
    });

    this.bird.setCollideWorldBounds(true);

    var keyObj = this.input.keyboard.addKey('W');

    keyObj.on('down', (event) => {
      if (this.bird.y > 100){
        this.isStart = true
        this.bird.setVelocityY(-300).setGravityY(10);

        this.timer = setTimeout(() => {
            this.bird.anims.play('fly').setGravityY(1200);
        }, 200)

        this.bird.anims.stop('fly');
      }
    });

    keyObj.on('up', (event) => {
        clearInterval(this.timer)
        this.bird.anims.play('fly').setGravityY(1200);
    });

    WebFont.load({
      google: {
        families: ['Bungee']
      },
      active: () => {
        this.counter = this.add.text(250, 85, this.count, {
          fontFamily:  'Bungee',
          fontSize: 64,
          color: 'white'

        });

        this.counter
          .setStroke('black', 10)
          .setOrigin(0.5, 0)

      }
    })
  }

  update () {
    this.background.x -= this.speed
    this.ground.x -= this.speed

    if (this.ground.x < -96) {
      this.background.x = 480
      this.ground.x = 0
    }


    if (this.speed > 7){
      this.speed = 7
    }

    if (this.isStart) {
      this.speed += 0.005
      this.collonbot.x -= this.speed
      this.collonsecond.x -= this.speed
      this.collontop.x -= this.speed
      this.collonfirst.x -= this.speed
      this.collonsecond_2.x -= this.speed
      this.collonbot_2.x -= this.speed
      this.collontop_2.x -= this.speed
      this.collonfirst_2.x -= this.speed

      if (this.collonbot.x < this.bird.x) {
        if (this.isCount == true) {
          this.count += 1
          this.counter.setText(this.count)
          this.isCount = false
        }
      } else {
        this.isCount = true;
      }

      if (this.collonbot_2.x < this.bird.x) {
        if (this.isCount_2 == true) {
          this.count += 1
          this.counter.setText(this.count)
          this.isCount_2 = false
        }
      } else {
        this.isCount_2 = true;
      }

      if (this.collonbot.x < -130 ){
        var step = 120 - this.speed * 2
        var y = Phaser.Math.Between(-step,step);

        this.collonfirst.y = y + this.collonfirst_y
        this.collonsecond.y = y + this.collonsecond_y
        this.collonbot.y = y + this.collonbot_y
        this.collontop.y = y + this.collontop_y

        this.collonbot.x = 540
        this.collonsecond.x = 540
        this.collonfirst.x = 540
        this.collontop.x = 540
      }

      if (this.collonbot_2.x < -130 ){
        var step = 140 - this.speed * 2
        var y = Phaser.Math.Between(-step,step);

        this.collonfirst_2.y = y + this.collonfirst_2_y
        this.collonsecond_2.y = y + this.collonsecond_2_y
        this.collonbot_2.y = y + this.collonbot_2_y
        this.collontop_2.y = y + this.collontop_2_y

        this.collonbot_2.x = 540
        this.collonsecond_2.x = 540
        this.collonfirst_2.x = 540
        this.collontop_2.x = 540
      }

      if (this.bird.y > 660){
        this.bird.setVelocityY(-100)
      }
    } else {
      if (this.bird.y > 380) {
        this.bird.setVelocityY(-150)
      }
    }

    if (
      this.collonbot.body.touching.none == false ||
      this.collonbot_2.body.touching.none == false ||
      this.collontop.body.touching.none == false ||
      this.collontop_2.body.touching.none == false ||
      this.collonsecond_2.body.touching.none == false ||
      this.collonsecond.body.touching.none == false ||
      this.collonfirst_2.body.touching.none == false ||
      this.collonfirst.body.touching.none == false ||

      this.bird.y > 660
    ) {

      Best = this.count

      if (Best > Score){
        Score = Best
      }

      this.bird.y = 300
      this.count = 0
      this.isCount = false
      this.isCount_2 = false
      this.isStart = false
      this.collontop_y = 150;
      this.collonbot_y = 514;
      this.collonsecond_y = 640;
      this.collonfirst_y = -20;
      this.collonsecond_2_y = 640;
      this.collonbot_2_y = 514;
      this.collontop_2_y = 150;
      this.collonfirst_2_y = -20;
      this.speed = 1

      this.scene.start('Menu');
    }
  }
}

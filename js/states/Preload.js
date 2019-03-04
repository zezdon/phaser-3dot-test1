var Match3 = Match3 || {};

//loading the game assets
Match3.PreloadState = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(100, 1);
    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.image('block1', 'assets/images/pic1.png');
    this.load.image('block2', 'assets/images/pic2.png');
    this.load.image('block3', 'assets/images/pic3.png');
    this.load.image('block4', 'assets/images/pic4.png');
    this.load.image('block5', 'assets/images/pic5.png');
    this.load.image('block6', 'assets/images/pic6.png');
    this.load.image('block7', 'assets/images/pic7.png');
    this.load.image('block8', 'assets/images/pic8.png');
    this.load.image('deadBlock', 'assets/images/dead.png');
    this.load.image('background', 'assets/images/background.png');

  },
  create: function() {
    this.state.start('Game');
  }
};
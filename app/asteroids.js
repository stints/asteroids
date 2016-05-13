class Asteroids {
  setup() {
    // create game canvases
    managers.canvas.create('background', 600, 600, 'none', 'asteroids');
    managers.canvas.create('game', 600, 600, 'none', 'asteroids');
    managers.canvas.create('score', 600, 600, 'none', 'asteroids');
    managers.canvas.create('background', 600, 600, 'none', 'asteroids');

    // load background
    let img = new Image();
    img.src = 'res/stars.png';
    img.addEventListener('load', function() {
      managers.canvas.ctx('background').drawImage(img, 0, 0);
    });


  }
}

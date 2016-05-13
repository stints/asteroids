class InputSystem extends System {
  init() {
    this._keys = {
      'KeyA': false,
      'KeyD': false,
      'KeyW': false,
      'Space': false
    };

    this.canvasManager.onkeydown = this.canvasManager = (e) => this.listener(e);
  }

  listener(e) {
    if(this._keys.hasOwnProperty(e.code)) {
      this._keys[e.code] = e.type == 'keydown';
    }

    e.preventDefault();
  }

  update() {
    for(let i = 0; i < this.entities.length; i++) {
      let left = this.entities[i].input.left;
      let right = this.entities[i].input.right;
      let forward = this.entities[i].input.forward;

      if(this._keys[left]) {
        entities[i].velocity.vel.scale(1.1);
      }
    }
  }
}

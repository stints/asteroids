class SpriteComponent extends Component {
  constructor(sprite) {
    super();
    this.sprite = sprite;
  }
}

class PositionComponent extends Component {
  constructor(pos) {
    super();
    this.pos = pos;
  }
}

class VelocityComponent extends Component {
  constructor(vel) {
    super();
    this.vel = vel;
  }
}

class RotationComponent extends Component {
  constructor() {
    super();
    this.angle = 0;
  }
}

class InputComponent extends Component {
  constructor(forward, left, right) {
    super();
    this.forward = forward;
    this.left = left;
    this.right = right;
  }
}

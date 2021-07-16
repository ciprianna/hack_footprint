// A simple Particle class
class Particle {
  constructor(p5, position, image) {
    const { createVector } = position.p5;
    this.p5 = p5;
    this.acceleration = createVector(0, 0.005);
    this.velocity = createVector(p5.random(-1, 1), p5.random(-1, 1));
    this.position = position.copy();
    this.tree = image;
  }
  run() {
    this.update();
    this.display();
  }
  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
  // Method to display
  display() {
    this.p5.image(this.tree, this.position.x, this.position.y, 24, 36);
  }

}

export default Particle;

import Particle from './Particles';

class ParticleSystem {
  constructor(p5, position) {
    this.p5 = p5;
    this.origin = position.copy();
    this.particles = [];
    this.image = p5.loadImage('assets/pine-tree.png');
  }
  addParticle(p5) {
    if(this.particles.length <= this.p5.treeAmount) {
      this.particles.push(new Particle(this.p5, this.origin, this.image));
      p5.total.html(this.particles.length);
    }
  }
  run() {
    this.particles.forEach(particle => {
      particle.run(this.treeAmount);
    });
  }
}

export default ParticleSystem;

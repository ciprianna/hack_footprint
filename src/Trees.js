import React from "react";
import Sketch from "react-p5";

import System from './System';

// 1 seedling = 61 kg of C02

const treeConversion = (c02) => {
  return c02 * 0.01639344262;
}

const Trees = () => {
    let system;
    const setup = (p5, canvasParentRef) => {
      const input = p5.createInput(1, 'number');
      input.position(p5.width/2, 100);

      let treeAmount = 0;

      const button = p5.createButton('submit');
      button.position(p5.width/2, 140);
      button.mousePressed(() => {
        p5.treeAmount = Math.round(treeConversion(input.value()));
        console.log(p5.treeAmount);
        p5.treeCount = 0;
        p5.total = p5.createElement('h2', p5.treeCount);
        p5.total.position(p5.width/3, p5.height/2);
      });

      const greeting = p5.createElement('p', 'How many kg of C02?');
      greeting.position(p5.width/2, 50);
    
      p5.textAlign('center');
      p5.textSize(50);

      p5.createCanvas(1000, 1000).parent(canvasParentRef);
      system = new System(p5, p5.createVector(p5.width/3, p5.height/3), treeAmount);
    };

    const draw = (p5) => {
      p5.background('#282c34');
      system.addParticle(p5);
      system.run();
    };

	return <Sketch setup={setup} draw={draw} />;
};

export default Trees;

import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

function Circle() {
  let x = 50;
  let y = 50;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(124, 128, 129);
    p5.ellipse(x, y, 70, 70);
    x++;
  };

  return <Sketch setup={setup} draw={draw} />;
}

export default Circle;
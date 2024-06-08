// IMPORTS
import Canvas from "./classes/Canvas";
import Vec from "./classes/Vector";
import Curve from "./classes/Curve";

import { random } from "./util/random_util";
import { spray } from "./classes/Brush";

class Sketch extends Canvas {
  constructor(width, height, parent = document.body) {
    super(width, height, parent);
    this.curves = [];
  }
}

Sketch.prototype.setup = function () {
  this.background("FloralWhite");

  for (let k = 0; k < 4; k++) {
    const points = [];
    for (let i = 0; i < 12; i++) {
      points.push(new Vec(random(0, this.width), random(0, this.height)));
    }
    this.curves.push(new Curve(points));
  }
};

Sketch.prototype.draw = function () {
  this.curves.forEach((c) => c.functionDraw(1000, (p) => this.sprayCurve(p)));
  window.requestAnimationFrame(() => this.draw());
};

Sketch.prototype.sprayCurve = function (pts) {
  this.ctx.fillStyle = "rgba(255, 0, 0, 0.01)";
  pts.forEach((p) => spray(this.ctx, p, 50, 10));
};

export default Sketch;

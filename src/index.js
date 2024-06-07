import { makeCanvas, background } from "./util/canvas_util";
import Vec from "./classes/Vector.js";
import Curve from "./classes/Curve.js";
import { random } from "./util/random_util.js";
import { spray } from "./classes/Brush.js";

const width = 600,
  height = 600,
  curves = [];

const [canvas, ctx] = makeCanvas(width, height);
background(ctx, "FloralWhite");

for (let k = 0; k < 4; k++) {
  const points = [];
  for (let i = 0; i < 12; i++) {
    points.push(new Vec(random(0, width), random(0, height)));
  }
  curves.push(new Curve(points));
}

function draw() {
  curves.forEach((c) => c.functionDraw(4000, sprayCurve));
  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
ctx.strokeStyle = "rgba(255, 0, 0, 0.05)";
for (let i = 0; i < 100; i++) {
  testCurve.line(ctx, i);
}

function sprayCurve(pts) {
  ctx.fillStyle = "rgba(255, 0, 0, 0.01)";
  pts.forEach((p) => spray(ctx, p, 50, 10));
}

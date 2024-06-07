import Vec from "../Vector.js";
import Curve from "../Curve.js";
import { random } from "../util.js";
import { spray } from "../brush.js";

const canvas = document.getElementById("myCanvas");
const curves = [];
const w = 2000,
  h = 2000;
const ctx = canvas.getContext("2d");

canvas.width = w;
canvas.height = h;

ctx.fillStyle = "FloralWhite";
ctx.fillRect(0, 0, w, h);
for (let k = 0; k < 4; k++) {
  const points = [];
  for (let i = 0; i < 12; i++) {
    points.push(new Vec(random(0, w), random(0, h)));
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
// ctx.strokeStyle = "rgba(255, 0, 0, 0.04)";
// testCurve.constructionLines(ctx, 50);
// testCurve.showPoints(ctx, "orange");
// ctx.strokeStyle = "red";
// testCurve.line(ctx, 1000);

function sprayCurve(pts) {
  ctx.fillStyle = "rgba(255, 0, 0, 0.01)";
  pts.forEach((p) => spray(ctx, p, 50, 10));
}

import Vec from "./Vector.js";
import { random } from "../util/random_util.js";
import { easing } from "../util/ease_util.js";

const ease = random(easing);
const ease2 = random(easing);

function spray(ctx, p, r, n) {
  for (let i = 0; i < n; i++) {
    const offsetLength = ease(random(0, 1)) * r;
    const offset = Vec.random(offsetLength);
    point(ctx, Vec.add(p, offset), ease2(random(0.01, 1)) * 1);
  }
}

function point(ctx, p, r) {
  ctx.fillRect(p.x, p.y, r, r);
}

export { spray };

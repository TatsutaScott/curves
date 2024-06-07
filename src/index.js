import { makeCanvas, background } from "./util/canvas_util";

const width = 600,
  height = 600;

const [canvas, ctx] = makeCanvas(width, height);

background(ctx, "lightgray");

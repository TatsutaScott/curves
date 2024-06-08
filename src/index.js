import Sketch from "./sketch";

const width = 600,
  height = 600;

const curves_sketch = new Sketch(width, height);

curves_sketch.setup();
window.requestAnimationFrame(() => curves_sketch.draw());

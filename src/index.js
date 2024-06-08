import Sketch from './js/sketch'

const width = 1000,
  height = 1000

const curves_sketch = new Sketch(width, height)

curves_sketch.setup()
window.requestAnimationFrame(() => curves_sketch.draw())

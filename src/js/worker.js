import Sketch from '@/js/classes/sketch.js'

// MESSAGE HANDLING AND ROUTING ______________________
onmessage = (e) => workerMethods[e.data.method](e)

const workerMethods = {}

workerMethods.setup = function (e) {
  console.log(e)

  this.sketch = new Sketch(e.data.canvas, 600, 600)
  this.sketch.display = e.data.display
  this.sketch.setup()
  postMessage({ message: 'Initialized system' })
}

workerMethods.startLoop = function () {
  requestAnimationFrame(this.sketch.draw())
}

workerMethods.stopLoop = function () {
  cancelAnimationFrame(this.sketch.loop)
}

workerMethods.reset = function () {
  this.sketch.erase()
}

workerMethods.download = function () {
  console.log(this.sketch.canvas)
}

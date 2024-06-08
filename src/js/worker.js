import Sketch from '@/js/classes/sketch.js'

// MESSAGE HANDLING AND ROUTING ______________________
onmessage = (e) => workerMethods[e.data.method](e)

const workerMethods = {}
// setup: () => {
//   console.log('hi')
// },
// startLoop: () => {},
// stopLoop: () => {},
// download: () => {},
// setDimensions: () => {},
// info: () => {},
// updateParams: () => {}

workerMethods.setup = function (e) {
  this.sketch = new Sketch(e.data.canvas, 600, 600)
  this.sketch.setup()
  postMessage({ message: 'Initialized system' })
}

workerMethods.startLoop = function () {
  requestAnimationFrame(this.sketch.draw())
}

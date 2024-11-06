class Canvas {
  constructor(DOM, width, height) {
    if (DOM.tagName == 'CANVAS' || DOM instanceof OffscreenCanvas) {
      this.canvas = DOM
    } else {
      this.canvas = document.createElement('canvas') //Creates the canvas DOM element
      DOM.appendChild(this.canvas) //Appends the canvas DOM element to a parent element
    }

    this.canvas.width = this.width = width //Sets canvas width
    this.canvas.height = this.height = height //Sets canvas height

    this.ctx = this.canvas.getContext('2d') //Gets the drawing context from the DOM element
  }
}

/** sets the dimensions of the canvas
 * @param {number} width - width value in pixels
 * @param {number} height - height value in pixels
 */
Canvas.prototype.setDimensions = function (width, height) {
  this.canvas.width = this.width = width
  this.canvas.height = this.height = height
}

/**Download an image of the canvas
 * @param {String} name - name for the downloaded image file
 * @param {String} [type='png'] - file format. options: png, jpeg, webp
 */
Canvas.prototype.download = function (name, type = 'png') {
  console.log(this.display)
  const link = document.createElement('a')
  link.download = name + '.' + type
  link.href = this.canvas.toDataURL(`image/${type}`)
  link.click()
}

/**Sets the background of the canvas
 * @param {String} color - color to set background to
 */
Canvas.prototype.background = function (color) {
  this.ctx.fillStyle = color
  this.ctx.fillRect(0, 0, this.width, this.height)
}

/**Draws a shape
 * @param {Path2D} path - Path2D object representing a shape
 * @param {String} fill - color to use for fill (if null, no fill)
 * @param {String} stroke - color to use for stroke (if null, no stroke)
 */
Canvas.prototype.shape = function (path, fill, stroke) {
  this.ctx.save()

  if (fill) {
    this.ctx.fillStyle = fill
    this.ctx.fill(path)
  }
  if (stroke) {
    this.ctx.strokeStyle = stroke
    this.ctx.stroke(path)
  }

  this.ctx.restore()
}

/**Copy a canvas
 * @param {Canvas} source - Canvas object to copy from
 * @param {Boolean} scale - whether or not to scale the canvas
 */
Canvas.prototype.copy = function (source, scale = true) {
  const src = source instanceof Canvas ? source.canvas : source
  if (scale) {
    this.ctx.drawImage(src, 0, 0, this.width, this.height)
  } else {
    this.ctx.drawImage(src, 0, 0)
  }
}

/**Hide a canvas*/
Canvas.prototype.hide = function () {
  this.canvas.style.display = 'none'
}

/**Generate an offscreenCanvas*/
Canvas.prototype.offscreenLink = function () {
  this.canvas.transferControlToOffscreen()
}

export default Canvas

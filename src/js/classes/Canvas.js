class Canvas {
  constructor(canvas_DOM, width, height) {
    // this.canvas = document.createElement("canvas"); //Creates the canvas DOM element
    // parent.appendChild(this.canvas); //Appends the canvas DOM element to a parent element
    this.canvas = canvas_DOM

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

export default Canvas

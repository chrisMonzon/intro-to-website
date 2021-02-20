export default class Piece {
  constructor (level, color, x, y) {
    this.level = level
    this.color = color
    this.x = x
    this.y = y
  }

  getLevel () {
    return this.level
  }

  getColor () {
    return this.color
  }

  getX () {
    return this.x
  }

  getY () {
    return this.y
  }
}

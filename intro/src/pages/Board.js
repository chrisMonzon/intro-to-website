import Piece from './Piece'

export default class Board {
  constructor () {
    this.board = []
    this.turn = true // start with black
    let row = []
    let s = ''

    for (let i = 0; i < 3; i++) {
      row = []
      for (let j = 0; j < 4; j++) {
        s = ((j * i) % 2 === 0 ? new Piece('p', 'b', j, i) : ' ')
        row.push(s)
      }
      this.board.push(row)
    }

    this.board.push(row)
    for (let j = 0; j < 3; j++) {
      row = []
      for (let k = 0; k < 9; k++) {
        row.push(' ')
      }
      this.board.push(row)
    }
    for (let i = 0; i < 3; i++) {
      row = []
      for (let j = 0; j < 4; j++) {
        s = (j * i % 2 === 0 ? new Piece('p', 'w', j, i) : ' ')
        row.push(s)
      }
      this.board.push(row)
    }
  }

  getBoard () {
    return this.board
  }

  outOfBounds (row1, col1, row2, col2) {
    if (row1 > 7 || row2 > 7 || col1 > 7 || col2 > 7 || row1 < 0 || row2 < 0 || col1 < 0 || col2 < 0) {
      return false
    }
    return true
  }

  /*
  movePiece(row1, col1, row2, col2) {
    let empty = (this.board[row2][col2] == ' ');
    let legal = (abs(row1 - row2) == 1 && abs(col1 - col2) == 1);

    let piece = this.board[row1][col1]
    if (empty && legal && this.outOfBounds(row1, col1, row2, col2)) { //move to empty space
      if (piece.getLevel() == 'p') {
        if (piece.getColor() == 'b' && row1 > row2) {
          this.board[row2][col2] = piece;
          this.board[row1][col1] = ' ';
        } else if (piece.getColor() == 'w' && row1 < row2) {
          this.board[row2][col2] = piece;
          this.board[row1][col1] = ' ';
        }
      } else {
        this.board[row2][col2] = piece;
          this.board[row1][col1] = ' ';
      }
    } else if (this.board[row2][col2] != ' ') {
      //let enemy = this.board[row2][col2]
      //if (turn && enemy.getColor() == 'w' && this.board[][])
      return false
    }
  }
  */
}

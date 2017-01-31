var FIELD_SIZE = 3;

class TicTacToe {

    constructor() {
        this._currentPlayerSymbol = 'x';
        this._field = this.createField(FIELD_SIZE, FIELD_SIZE, null);
    }

    getCurrentPlayerSymbol() {
        return this._currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this._field[rowIndex][columnIndex] == null) {
            this._field[rowIndex][columnIndex] = this._currentPlayerSymbol;
            this._currentPlayerSymbol = (this._currentPlayerSymbol === 'x') ? 'o' : 'x';
        }
    }

    isFinished() {
        return this.getWinner() != null || this.isDraw();
    }

    getWinner() {
        // rows
        for (var i = 0; i < FIELD_SIZE; i++) {
            if (this._field[i][0] == null) {
                continue;
            }
            for (var j = 1; j < FIELD_SIZE; j++) {
                if (this._field[i][0] != this._field[i][j]) {
                    break;
                };
                if (j === FIELD_SIZE - 1) { return this._field[i][0];}
            }

        }

        // columns
        for (var j = 0; j < FIELD_SIZE; j++) {
            if (this._field[0][j] == null) {
                continue;
            }
            for (var i = 1; i < FIELD_SIZE; i++) {
                if (this._field[0][j] != this._field[i][j]) {
                    break;
                };
                if (i === FIELD_SIZE - 1) { return this._field[0][j];}
            }
        }

        // diagonals
        if (this._field[0][0] == this._field[1][1] && this._field[0][0] == this._field[2][2]) {
            return this._field[0][0];
        }

        if  (this._field[0][2] == this._field[1][1] && this._field[0][2] == this._field[2][0]) {
            return this._field[0][2];
        }
        return null;
    }

    noMoreTurns() {
        for (var i = 0; i < FIELD_SIZE; i ++) {
            for (var j = 0; j < FIELD_SIZE; j ++) {
                if (this._field[i][j] == null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this._field[rowIndex][colIndex];
    }

    createField(numRows, numCols, defValue) {
        var array = [];
        for (var i = 0; i < numRows; i++) {
            var cols = [];
            for (var j = 0; j < numCols; j++) {
                cols[j] = defValue;
            }
            array[i] = cols;
        }
        return array;
    }
}

module.exports = TicTacToe;

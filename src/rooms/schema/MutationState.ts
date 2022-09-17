
import {Board} from "./BoardState";
import {Tetromino} from  "./TetrominoState";
import {Position} from "./PositionState";

export const queryByRowAndColumn = (board: Board) => (row: number, col: number): number => {
    return board.values[row * board.cols + col];
}

export const setValueAtRowAndColumn = (board: Board) => (row: number, col: number, value: number): void => {
    board.values[row * board.cols + col] = value;
}

export const addEmptyRowToBoard = (board: Board): void => {
    const emptyRow = new Array(board.cols).fill(0);
    addRowToBoard(board, emptyRow);
}

const addRowToBoard = (board: Board, newRow: number[]) => {
    board.values.unshift(...newRow);
}

export const deleteRowsFromBoard = (board: Board, rowToDelete: number, amountOfRowsToDelete: number = 1) => {
    board.values.splice(rowToDelete * board.cols, board.cols * amountOfRowsToDelete);
}

export const freezeCurrentTetromino = (board: Board, Tetromino: Tetromino, position: Position) => {
    const setBoardValue = setValueAtRowAndColumn(board);
    const TetrominoElement = queryByRowAndColumn(Tetromino);

    for (let TetrominoRow = 0; TetrominoRow < Tetromino.rows; ++TetrominoRow) {
        for (let TetrominoCol = 0; TetrominoCol < Tetromino.cols; ++TetrominoCol) {
            if (TetrominoElement(TetrominoRow, TetrominoCol) !== 0) {
                setBoardValue(position.row + TetrominoRow, position.col + TetrominoCol, Tetromino.color);
            }
        }
    }
}
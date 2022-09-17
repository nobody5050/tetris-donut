import {Position} from "./rooms/schema/PositionState";
import {queryByRowAndColumn} from "./rooms/schema/MutationState";
import {Board} from "./rooms/schema/BoardState";
import {Tetromino} from "./rooms/schema/TetrominoState";

/**
 * isLeftOutOfBounds checks whether a given Tetromino is out of bounds of a board at its current (top-left) position
 * We determine how many columns are out of bounds (position.col < 0) and afterwards check each Tetromino column which sits outside the
 * board whether it is a "valid" Tetromino part (has a non-zero value)
 *
 * If so, we're out of bounds
 *
 * @param board The game board we don't want to exceed
 * @param Tetromino The Tetromino which might be out of bounds
 * @param position The current top-left position of our Tetromino
 */
export const isLeftOutOfBounds = (board: Board, Tetromino: Tetromino, position: Position): boolean => {
    if (position.col >= 0) {
        return false;
    }

    const blockElement = queryByRowAndColumn(Tetromino);

    const offset = -position.col;
    for (let col = 0; col < offset; ++col) {
        for (let row = 0; row < Tetromino.rows; ++row) {
            if (blockElement(row, col) !== 0) {
                return true;
            }
        }
    }
    return false;
}

/**
 * isRightOutOfBounds checks whether a given Tetromino is out of bounds of a board at its current (top-left) position
 * We determine how many columns are out of bounds (position.col + Tetromino.cols - board.cols) and afterwards check each Tetromino column which sits outside the
 * board whether it is a "valid" Tetromino part (has a non-zero value)
 *
 * If so, we're out of bounds
 *
 * @param board The game board we don't want to exceed
 * @param Tetromino The Tetromino which might be out of bounds
 * @param position The current top-left position of our Tetromino
 */
export const isRightOutOfBounds = (board: Board, Tetromino: Tetromino, position: Position): boolean => {
    if (position.col + Tetromino.cols < board.cols) {
        return false;
    }

    const blockElement = queryByRowAndColumn(Tetromino);
    const offsetFromBoard = position.col + Tetromino.cols - board.cols;
    const offset = Tetromino.cols - 1 - offsetFromBoard;

    for (let col = Tetromino.cols - 1; col > offset; --col) {
        for (let row = 0; row < Tetromino.rows; ++row) {
            if (blockElement(row, col) !== 0) {
                return true;
            }
        }
    }
    return false;
}

/**
 * isBottomOutOfBounds checks whether a given Tetromino is out of bounds of a board at its current (top-left) position
 * We determine how many rows are out of bounds (position.row + Tetromino.rows - board.rows) and afterwards check each Tetromino row which sits outside the
 * board whether it is a "valid" Tetromino part (has a non-zero value)
 *
 * If so, we're out of bounds
 *
 * @param board The game board we don't want to exceed
 * @param Tetromino The Tetromino which might be out of bounds
 * @param position The current top-left position of our Tetromino
 */
export const isBottomOutOfBounds = (board: Board, Tetromino: Tetromino, position: Position): boolean => {
    if (position.row + Tetromino.rows < board.rows) {
        return false;
    }

    const blockElement = queryByRowAndColumn(Tetromino);

    const offsetFromBoard = position.row + Tetromino.rows - board.rows;
    const offset = Tetromino.rows - 1 - offsetFromBoard;

    for (let row = Tetromino.rows - 1; row > offset; --row) {
        for (let col = 0; col < Tetromino.cols; ++col) {
            if (blockElement(row, col) !== 0) {
                return true;
            }
        }
    }
    return false;
}

export const collidesWithBoard = (board: Board, Tetromino: Tetromino, position: Position): boolean => {
    const blockElement = queryByRowAndColumn(Tetromino);
    const boardElement = queryByRowAndColumn(board);

    for (let boardRow = position.row; boardRow < position.row + Tetromino.rows; ++boardRow) {
        for (let boardCol = position.col; boardCol < position.col + Tetromino.cols; ++boardCol) {
            const blockRow = boardRow - position.row;
            const blockCol = boardCol - position.col;
            if (blockElement(blockRow, blockCol) !== 0 && boardElement(boardRow, boardCol) !== 0) {
                return true;
            }
        }
    }
    return false;
}

/**
 * After rotating a block it might happen that, given its current position, it moves out of bounds
 * keepTetrominoInsideBounds will move a Tetrolyse to the inside of our game board until it is
 * no longer out of bounds on either of left, right or bottom side
 * @private
 */
export const keepTetrominoInsideBounds = (board: Board, Tetromino: Tetromino, position: Position): Position => {
    const newPosition = position.clone();
    while (isLeftOutOfBounds(board, Tetromino, newPosition)) {
        newPosition.col += 1;
    }
    while (isRightOutOfBounds(board, Tetromino, newPosition)) {
        newPosition.col -= 1;
    }
    while (isBottomOutOfBounds(board, Tetromino, newPosition)) {
        newPosition.row -= 1;
    }
    return newPosition;
}

export const isRowCompleted = (board: Board, rowIndex: number) => {
    const boardElement = queryByRowAndColumn(board);

    for (let col = 0; col < board.cols; ++col) {
        if (boardElement(rowIndex, col) === 0) {
            return false;
        }
    }
    return true;
}

export const isRowEmpty = (board: Board, rowIndex: number) => {
    const boardElement = queryByRowAndColumn(board);

    for (let col = 0; col < board.cols; ++col) {
        if (boardElement(rowIndex, col) !== 0) {
            return false;
        }
    }
    return true;
}
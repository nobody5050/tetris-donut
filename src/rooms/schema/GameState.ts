import { Schema, type} from "@colyseus/schema";
import { getRandomBlock, Tetromino } from "./TetrominoState";
import { Position } from "./PositionState";
import { Board } from "./BoardState";

export class GameState extends Schema {
    @type(Board)
    board: Board;

    @type(Tetromino)
    currentBlock: Tetromino;

    @type(Position)
    currentPosition: Position;

    @type(Tetromino)
    nextBlock: Tetromino;

    @type("number")
    clearedLines: number;

    @type("number")
    level: number;

    @type("number")
    totalPoints: number;

    constructor(rows: number = 20, cols: number = 10, initialLevel = 0) {
        super();
        this.board = new Board(rows, cols);
        this.currentBlock = getRandomBlock();
        this.currentPosition = new Position(0, 5);
        this.nextBlock = getRandomBlock();
        this.level = initialLevel;
        this.clearedLines = 0;
        this.totalPoints = 0;
    }
}
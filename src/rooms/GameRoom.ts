import { Room, Client, Delayed } from "colyseus";
import { GameState } from "./schema/GameState";
import { Position } from "./schema/PositionState";
import { collidesWithBoard, isBottomOutOfBounds, isRowCompleted, isRowEmpty } from "../validation"
import { addEmptyRowToBoard, deleteRowsFromBoard, freezeCurrentTetromino } from "./schema/MutationState";
import { getRandomBlock } from "./schema/TetrominoState";
import { computeScoreForClearedLines } from "../scoring";


export class GameRoom extends Room<GameState> {
	maxClients: 2;
	private DEFAULT_ROWS = 20;
	private DEFAULT_COLS = 10;
	private DEFAULT_LEVEL = 0;

	private gameLoop!: Delayed;

	private dropTetromino() {
		return new Position(
			this.state.currentPosition.row + 1,
			this.state.currentPosition.col
		);
	}

	private detectCompletedLines() {
		let completedLines = [];
		for (let boardRow = this.state.board.rows - 1; boardRow >= 0; --boardRow) {
			if (isRowEmpty(this.state.board, boardRow)) {
				break;
			}

			if (isRowCompleted(this.state.board, boardRow)) {
				completedLines.push(boardRow);
			}
		}
		return completedLines;
	}

	private updateBoard(completedLines: number[]) {
		for (let rowIdx = 0; rowIdx < completedLines.length; ++rowIdx) {
			deleteRowsFromBoard(this.state.board, completedLines[rowIdx] + rowIdx);
			addEmptyRowToBoard(this.state.board);
		}
	}

	private dropNewTetromino() {
		this.state.currentPosition = new Position(
			0,
			5
		);
		this.state.currentBlock = this.state.nextBlock.clone();
		this.state.nextBlock = getRandomBlock();
	}

	private checkGameOver() {
		if (collidesWithBoard(this.state.board, this.state.currentBlock, this.state.currentPosition)) {
			this.gameLoop.clear();
		}
	}

	private moveOrFreezeTetromino(nextPosition: Position) {
		if (
			!isBottomOutOfBounds(this.state.board, this.state.currentBlock, nextPosition) &&
			!collidesWithBoard(this.state.board, this.state.currentBlock, nextPosition)
		) {
			this.state.currentPosition = nextPosition;
		} else {
			freezeCurrentTetromino(this.state.board, this.state.currentBlock, this.state.currentPosition);
			this.dropNewTetromino();
			this.checkGameOver();
		}
	}

	private determineNextLevel(): number {
		return Math.floor(this.state.clearedLines / 10);
	}

	private updateTotalPoints(completedLines: any[]) {
		this.state.totalPoints += computeScoreForClearedLines(completedLines.length, this.state.level);
	}

	private updateClearedLines(completedLines: any[]) {
		this.state.clearedLines += completedLines.length;
	}

	private loopFunction = () => {
		const nextPosition = this.dropTetromino();
		this.moveOrFreezeTetromino(nextPosition);

		const completedLines = this.detectCompletedLines();
        this.updateClearedLines(completedLines);
        this.updateTotalPoints(completedLines);
        this.updateBoard(completedLines);
        this.checkNextLevel();
	};

	private checkNextLevel() {
        const nextLevel = this.determineNextLevel();
        if (nextLevel > this.state.level) {
            this.state.level = nextLevel;
            this.restartGameLoop();
        }
    }

	private startGameLoop() {
        const loopInterval = 1000 / (this.state.level + 1);
        this.gameLoop = this.clock.setInterval(this.loopFunction, loopInterval);
    }

    private stopGameLoop() {
        this.gameLoop.clear();
    }

	private restartGameLoop() {
        this.stopGameLoop();
        this.startGameLoop();
    }

	onCreate(options: any) {
		this.setState(new GameState(this.DEFAULT_ROWS, this.DEFAULT_COLS, this.DEFAULT_LEVEL));
		this.startGameLoop();
	}

	onJoin(client: Client, options: any) {
	}

	onLeave(client: Client, consented: boolean) {
	}

	onDispose() {
	}
}

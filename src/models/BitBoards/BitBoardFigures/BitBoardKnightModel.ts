import { STEP_KNIGHT_LEFT_UP, STEP_KNIGHT_LEFT_DOWN, STEP_KNIGHT_DOWN_RIGHT,
    STEP_KNIGHT_DOWN_LEFT, STEP_KNIGHT_RIGHT_DOWN, STEP_KNIGHT_RIGHT_UP, STEP_KNIGHT_UP_RIGHT } from "../../../constants/FiguresPossibleSteps";
import ColorsEnum from "../../../enums/ColorsEnum";
import {
    BLACK_KNIGHT_INITIAL_POSITION,
    WHITE_KNIGHT_INITIAL_POSITION,
} from "../../../constants/InitialBinaryValueBitBoards";
import FigureModel from "./FigureModel";
import { extractLowestBitMask } from "../../../utils/BitManipulations";

class BitBoardKnightModel extends FigureModel {
    readonly steps: bigint[] = [
        STEP_KNIGHT_RIGHT_DOWN , STEP_KNIGHT_DOWN_RIGHT, STEP_KNIGHT_LEFT_UP,
        STEP_KNIGHT_UP_RIGHT, STEP_KNIGHT_RIGHT_UP, STEP_KNIGHT_LEFT_DOWN, STEP_KNIGHT_DOWN_LEFT
    ]
    readonly color: ColorsEnum;

    constructor(color: ColorsEnum) {
        super();
        this.color = color;
        this.bitBoard = color === ColorsEnum.WHITE ? WHITE_KNIGHT_INITIAL_POSITION : BLACK_KNIGHT_INITIAL_POSITION;
    };

    public makeAllPossibleMoves(): bigint[] {
        const possibleMoves: bigint[] = [];
        let bitBoard = this.bitBoard;

        while (bitBoard !== 0n) {
            const currentPiecePosition = bitBoard & -bitBoard;
            bitBoard &= ~currentPiecePosition;

            for (const step of this.steps) {
                const newPosition = currentPiecePosition << step;
                if (this.isValidMove(newPosition, step)) {
                    possibleMoves.push(newPosition);
                }
            }
        }
        return possibleMoves;
    }

    private isValidMove(newPosition: bigint, step: bigint): boolean {
        const newPositionOverflow = newPosition >> 64n !== 0n;
        const noMoveMade = newPosition === 0n;
        const rowChangeDuringMove = this.calculateRowChange(newPosition) === this.calculateRowChange(newPosition - step);

        return !newPositionOverflow && !noMoveMade && rowChangeDuringMove && this.isRowChangeAcceptable(newPosition, step);
    }

    private calculateRowChange(position: bigint): number {
        return Math.ceil(position.toString(2).length / 8);
    }

    private isRowChangeAcceptable(newPosition: bigint, step: bigint): boolean {
        const newPositionShifted = newPosition << step;
        const shiftDifference = Math.abs(this.calculateRowChange(newPosition) - this.calculateRowChange(newPositionShifted));
        return shiftDifference <= 2;
    }

}

export default BitBoardKnightModel;

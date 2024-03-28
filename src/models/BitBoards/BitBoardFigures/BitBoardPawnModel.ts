import {BLACK_PAWN_INITIAL_POSITION, WHITE_PAWN_INITIAL_POSITION} from "../../../constants/InitialBinaryValueBitBoards";
import ColorsEnum from "../../../enums/ColorsEnum";
import FigureModel from "./FigureModel";
import {STEP_AHEAD, STEP_DIAGONAL_AHEAD_LEFT, STEP_DIAGONAL_AHEAD_RIGHT} from "../../../constants/FiguresPossibleSteps";
import {extractLowestBitMask} from "../../../utils/BitManipulations";

class BitBoardPawnModel extends FigureModel {
    readonly step: bigint;
    readonly direction: bigint;
    readonly color: ColorsEnum;

    constructor(color: ColorsEnum) {
        super();
        this.color = color;
        this.direction = this.color === ColorsEnum.WHITE ? 1n : -1n;
        this.step = STEP_AHEAD * this.direction;
        this.bitBoard = this.color === ColorsEnum.WHITE ? WHITE_PAWN_INITIAL_POSITION : BLACK_PAWN_INITIAL_POSITION;
    };

    protected makeMove(bitMask: bigint): bigint {
        let newPossibleMove: bigint = this.bitBoard;
        const move = bitMask << this.step;

        newPossibleMove &= ~bitMask;
        newPossibleMove |= move;
        return newPossibleMove;
    }

    protected makeDoubleMove(bitMask: bigint): bigint {
        let newPossibleMove = this.bitBoard;
        newPossibleMove &= ~bitMask;
        const moveTwoSteps = bitMask << this.step * 2n;

        if (!this.bitOccupied(bitMask)) {
            newPossibleMove |= moveTwoSteps;
            return newPossibleMove;
        }
    };

    public makeAllPossibleMoves() {
        const possibleMoves: bigint[] = [];
        let bitBoard = this.bitBoard;

        while (bitBoard !== 0n) {
            const bitMask = extractLowestBitMask(bitBoard);
            bitBoard &= ~bitMask;

            const newPossibleMove = this.makeMove(bitMask);

            if (((newPossibleMove & ~bitBoard) !== 0n) || !this.bitOccupiedFriendly(newPossibleMove, this.color)) {
                possibleMoves.push(newPossibleMove);
            }

            const newDoubleMove = this.makeDoubleMove(bitMask);

            if (((newDoubleMove & ~bitBoard) !== 0n) || !this.bitOccupiedFriendly(newDoubleMove, this.color)) {
                possibleMoves.push(newDoubleMove);
            }

            const leftCaptureMask = bitMask << STEP_DIAGONAL_AHEAD_LEFT * this.direction;
            const rightCaptureMask = bitMask << STEP_DIAGONAL_AHEAD_RIGHT * this.direction;

            if (this.bitOccupiedEnemy(leftCaptureMask, this.color)) {
                let newLeftCaptureMove: bigint = this.makeMove(leftCaptureMask);
                possibleMoves.push(newLeftCaptureMove);
            }

            if (this.bitOccupiedEnemy(rightCaptureMask, this.color)) {
                let newRightCaptureMove: bigint = this.makeMove(rightCaptureMask);
                possibleMoves.push(newRightCaptureMove);
            }


        }

        return possibleMoves;
    };
}

export default BitBoardPawnModel;
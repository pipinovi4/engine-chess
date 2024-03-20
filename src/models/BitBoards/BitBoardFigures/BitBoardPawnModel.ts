import {WHITE_PAWN_INITIAL_POSITION, BLACK_PAWN_INITIAL_POSITION} from "../../../constants/InitialBinaryValueBitBoards";
import ColorsEnum from "../../../enums/ColorsEnum";
import FigureModel from "./FigureModel";

class BitBoardPawnModel extends FigureModel {

    constructor(color: ColorsEnum) {
        super();
        this.bitBoard = color === ColorsEnum.WHITE ? WHITE_PAWN_INITIAL_POSITION : BLACK_PAWN_INITIAL_POSITION;
    };

    protected makeMove(bitMask: bigint, step: bigint): bigint {
        let newPossibleMove: bigint = this.bitBoard;
        const move = bitMask << step;
        newPossibleMove &= ~bitMask;
        newPossibleMove |= move;
        return newPossibleMove;
    }

    protected makeDoubleMove(bitMask: bigint, step: bigint, direction: number): bigint {
        let newPossibleMove = this.makeMove(bitMask, step);
        if ((direction > 0 && (bitMask & BLACK_PAWN_INITIAL_POSITION) !== 0n) || (direction < 0 && (bitMask & WHITE_PAWN_INITIAL_POSITION) !== 0n)) {
            newPossibleMove &= ~bitMask;
            const moveTwoSteps = bitMask << step * 2n;
            newPossibleMove |= moveTwoSteps;
        }
        return newPossibleMove;
    }

    protected makeAllPossibleMoves(direction: number) {
        const possibleMoves: bigint[] = [];
        const step = direction > 0 ? 8n : -8n;
        let bitBoard = this.bitBoard;

        while (bitBoard !== 0n) {
            const bitMask = bitBoard & -bitBoard;
            bitBoard &= ~bitMask;

            const newPossibleMove = this.makeMove(bitMask, step);
            possibleMoves.push(newPossibleMove);

            const newDoubleMove = this.makeDoubleMove(bitMask, step, direction);
            possibleMoves.push(newDoubleMove);
        }

        return possibleMoves;
    };
}

export default BitBoardPawnModel;
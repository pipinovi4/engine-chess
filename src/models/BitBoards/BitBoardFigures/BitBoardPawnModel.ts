import {WHITE_PAWN_INITIAL_POSITION, BLACK_PAWN_INITIAL_POSITION} from "../../../constants/InitialBinaryValueBitBoards";
import ColorsEnum from "../../../enums/ColorsEnum";
import FigureModel from "./FigureModel";

class BitBoardPawnModel extends FigureModel {

    constructor(color: ColorsEnum) {
        super();
        this.bitBoard = color === ColorsEnum.WHITE ? WHITE_PAWN_INITIAL_POSITION : BLACK_PAWN_INITIAL_POSITION;
    };

    protected makeAllPossibleMoves(direction: number) {
        const possibleMoves: bigint[] = [];
        const step = direction > 0 ? 8n : -8n;
        let bitBoard = this.bitBoard;

        while (bitBoard !== 0n) {
            const bitMask = bitBoard & -bitBoard;
            bitBoard &= ~bitMask;

            let newPossibleMove: bigint = this.bitBoard;
            const moveOneStep = bitMask << step;
            newPossibleMove &= ~bitMask;

            newPossibleMove |= moveOneStep;
            possibleMoves.push(newPossibleMove);

            if ((direction > 0 && (bitMask & BLACK_PAWN_INITIAL_POSITION) !== 0n) || (direction < 0 && (bitMask & WHITE_PAWN_INITIAL_POSITION) !== 0n)) {
                newPossibleMove &= ~moveOneStep;
                const moveTwoSteps = bitMask << step * 2n;
                newPossibleMove |= moveTwoSteps;
                possibleMoves.push(newPossibleMove);
            }
        }
    };
}

export default BitBoardPawnModel;
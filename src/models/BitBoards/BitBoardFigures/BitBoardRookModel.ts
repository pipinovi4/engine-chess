import ColorsEnum from "../../../enums/ColorsEnum";
import {
    BLACK_ROOK_INITIAL_POSITION,
    WHITE_ROOK_INITIAL_POSITION
} from "../../../constants/InitialBinaryValueBitBoards";
import FigureModel from "./FigureModel";

class BitBoardRookModel extends FigureModel {

    constructor(color: ColorsEnum) {
        super();
        this.bitBoard = color === ColorsEnum.WHITE ? WHITE_ROOK_INITIAL_POSITION : BLACK_ROOK_INITIAL_POSITION;
    };

    public makeAllPossibleMoves() {
        const maxSteps = 7n;
        const possibleMoves: bigint[] = [];
        let bitBoard = this.bitBoard;

        while (bitBoard !== 0n) {
            const bitMask = bitBoard & -bitBoard
            const position = bitMask.toString(2).length - 1;
            const possibleStepsAhead = maxSteps - BigInt(position % 8);
            const possibleStepsBack = possibleStepsAhead - BigInt(position % 8);
            const possibleStepsLeft = maxSteps - BigInt(position % 8);
            const possibleStepsRight = possibleStepsLeft - BigInt(position % 8);

            const moveAhead: bigint = bitMask << BigInt(possibleStepsAhead * 8n);
            const moveBack: bigint = bitMask >> BigInt(possibleStepsBack * 8n);
            const moveLeft: bigint = bitMask >> BigInt(possibleStepsLeft);
            const moveRight: bigint = bitMask << BigInt(possibleStepsRight);
            const newPossibleMove: bigint = bitBoard & ~bitMask;

            console.log(moveLeft.toString(2).padStart(64, '0'), moveRight.toString(2).padStart(64, '0'), moveAhead.toString(2).padStart(64, '0'), moveBack.toString(2).padStart(64, '0'))

            bitBoard = newPossibleMove;
            possibleMoves.push(moveAhead, moveBack, moveLeft, moveRight);
        }
    };
}

export default BitBoardRookModel;
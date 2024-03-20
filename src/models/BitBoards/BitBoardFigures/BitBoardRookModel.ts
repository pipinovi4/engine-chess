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
        const possibleMoves: bigint[] = [];
        let bitBoard = this.bitBoard;

        while (bitBoard !== 0n) {
            const bitMask = bitBoard & -bitBoard
            bitBoard &= ~bitMask;

            const position = BigInt(bitMask.toString(2).length - 1);
            const horizontalMoves = this.makeAllPossibleHorizontalMoves(position);
            const verticalMoves = this.makeAllPossibleVerticalMoves(position);

            possibleMoves.push(...horizontalMoves, ...verticalMoves);
        }

        console.log(possibleMoves);

        return possibleMoves;
    };
}

export default BitBoardRookModel;
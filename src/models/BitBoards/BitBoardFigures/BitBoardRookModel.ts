import ColorsEnum from "../../../enums/ColorsEnum";
import {
    BLACK_ROOK_INITIAL_POSITION,
    WHITE_ROOK_INITIAL_POSITION
} from "../../../constants/InitialBinaryValueBitBoards";
import FigureModel from "./FigureModel";
import {extractLowestBitMask} from "../../../utils/BitManipulations";

class BitBoardRookModel extends FigureModel {

    constructor(color: ColorsEnum) {
        super();
        this.bitBoard = color === ColorsEnum.WHITE ? WHITE_ROOK_INITIAL_POSITION : BLACK_ROOK_INITIAL_POSITION;
    };

    public makeAllPossibleMoves() {
        const possibleMoves: bigint[] = [];
        let bitBoard = this.bitBoard;

        while (bitBoard !== 0n) {
            const bitMask = extractLowestBitMask(bitBoard);
            bitBoard &= ~bitMask;

            const horizontalMoves = this.makeAllPossibleHorizontalMoves(bitMask);
            const verticalMoves = this.makeAllPossibleVerticalMoves(bitMask);

            possibleMoves.push(...horizontalMoves, ...verticalMoves);
        }

        return possibleMoves;
    };
}

export default BitBoardRookModel;
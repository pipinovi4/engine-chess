import ColorsEnum from "../../../enums/ColorsEnum";
import {
    BLACK_ROOK_INITIAL_POSITION,
    WHITE_ROOK_INITIAL_POSITION
} from "../../../constants/InitialBinaryValueBitBoards";
import FigureModel from "./FigureModel";
import {extractLowestBitMask} from "../../../utils/BitManipulations";

class BitBoardRookModel extends FigureModel {
    readonly color: ColorsEnum;

    constructor(color: ColorsEnum) {
        super();
        this.color = color;
        this.bitBoard = color === ColorsEnum.WHITE ? WHITE_ROOK_INITIAL_POSITION : BLACK_ROOK_INITIAL_POSITION;
    };

    public makeAllPossibleMoves() {
        const possibleMoves: bigint[] = [];
        let bitBoard = this.bitBoard;

        while (bitBoard !== 0n) {
            const bitMask = extractLowestBitMask(bitBoard);
            bitBoard &= ~bitMask;

            const horizontalMoves = this.makeAllPossibleHorizontalMoves(bitBoard, bitMask);
            const verticalMoves = this.makeAllPossibleVerticalMoves(bitBoard, bitMask);

            possibleMoves.push(...verticalMoves);
        }

        return possibleMoves;
    };
}

export default BitBoardRookModel;
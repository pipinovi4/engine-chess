import FigureModel from "./FigureModel";
import ColorsEnum from "../../../enums/ColorsEnum";
import {
    BLACK_QUEEN_INITIAL_POSITION,
    WHITE_QUEEN_INITIAL_POSITION,
} from "../../../constants/InitialBinaryValueBitBoards";
import {extractLowestBitMask} from "../../../utils/BitManipulations";

class BitBoardQueenModel extends FigureModel {
    private color: ColorsEnum;

    constructor(color: ColorsEnum) {
        super();
        this.bitBoard = color === ColorsEnum.WHITE ? WHITE_QUEEN_INITIAL_POSITION : BLACK_QUEEN_INITIAL_POSITION;
    };

    makeAllPossibleMoves() {
        const possibleMoves: bigint[] = [];
        let bitBoard = this.bitBoard;

        while (bitBoard !== 0n) {
            const bitMask = extractLowestBitMask(bitBoard);
            bitBoard &= ~bitMask;

            const horizontalMoves = this.makeAllPossibleHorizontalMoves(bitBoard, bitMask);
            const verticalMoves = this.makeAllPossibleVerticalMoves(bitBoard, bitMask);
            const diagonalMoves = this.makeAllPossibleDiagonalMoves(bitBoard, bitMask);

            possibleMoves.push(...horizontalMoves, ...verticalMoves, ...diagonalMoves);
        }

        return possibleMoves;
    };
}

export default BitBoardQueenModel;
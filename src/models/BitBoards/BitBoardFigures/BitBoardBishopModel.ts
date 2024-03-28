import FigureModel from "./FigureModel";
import ColorsEnum from "../../../enums/ColorsEnum";
import {
    BLACK_BISHOP_INITIAL_POSITION,
    WHITE_BISHOP_INITIAL_POSITION
} from "../../../constants/InitialBinaryValueBitBoards";
import {extractLowestBitMask} from "../../../utils/BitManipulations";

class BitBoardBishopModel extends FigureModel {
    readonly color: ColorsEnum
    constructor(color: ColorsEnum) {
        super();
        this.color = color;
        this.bitBoard = color === ColorsEnum.WHITE ? WHITE_BISHOP_INITIAL_POSITION : BLACK_BISHOP_INITIAL_POSITION;
    };

    public makeAllPossibleMoves() {
        const possibleMoves: bigint[] = [];
        let bitBoard = this.bitBoard;

        while (bitBoard !== 0n) {
            const bitMask = extractLowestBitMask(bitBoard);
            bitBoard &= ~bitMask;

            const diagonalMoves = this.makeAllPossibleDiagonalMoves(bitBoard, bitMask);

            possibleMoves.push(...diagonalMoves);
        }

        return possibleMoves;
    };
}

export default BitBoardBishopModel;
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

        const bitMask = bitBoard & -bitBoard
        const position = BigInt(bitMask.toString(2).length - 1);
        const positions = this.makeAllPossibleDiagonalMoves(position);
        const positions2 = this.makeAllPossibleHorizontalMoves(position);
        const positions3 = this.makeAllPossibleVerticalMoves(position);
    };
}

export default BitBoardRookModel;
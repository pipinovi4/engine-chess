import FigureModel from "./FigureModel";
import ColorsEnum from "../../../enums/ColorsEnum";
import {
    BLACK_KING_INITIAL_POSITION,
    WHITE_KING_INITIAL_POSITION
} from "../../../constants/InitialBinaryValueBitBoards";
import {extractLowestBitMask} from "../../../utils/BitManipulations";

class BitBoardKingModel extends FigureModel {
    readonly steps: bigint[] = [1n, -1n, 8n, -8n, 7n, 9n, -7n, -9n];

    constructor(color: ColorsEnum) {
        super();
        this.bitBoard = color === ColorsEnum.WHITE ? WHITE_KING_INITIAL_POSITION : BLACK_KING_INITIAL_POSITION;
    };

    protected makeAllPossibleMoves() {
        const possibbleMoves: bigint[] = [];
        let bitBoard = this.bitBoard;
        
        while (bitBoard !== 0n) {
            const bitMask = extractLowestBitMask(bitBoard);
            bitBoard &= ~bitMask;

            if (this.isWithinBoardBoundaries(bitMask)) {
                this.steps.forEach(step => {
                    const newPossibleMove = bitMask >> step;
                    possibbleMoves.push(newPossibleMove);
                });
            }
        }
        
        return possibbleMoves;
    };
}

export default BitBoardKingModel;
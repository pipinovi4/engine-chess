import FigureModel from "./FigureModel";

class BitBoardBishopModel extends FigureModel {
    constructor() {
        super();
    };

    protected makeAllPossibleMoves() {
        const possibleMoves: bigint[] = [];
        let bitBoard = this.bitBoard;

        while (bitBoard !== 0n) {
            const bitMask = bitBoard & -bitBoard
            bitBoard &= ~bitMask;

            const position = BigInt(bitMask.toString(2).length - 1);
            const diagonalMoves = this.makeAllPossibleDiagonalMoves(position);

            possibleMoves.push(...diagonalMoves);
        }

        return possibleMoves;
    };
}

export default BitBoardBishopModel;
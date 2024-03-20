import FigureModel from "./FigureModel";

class BitBoardQueenModel extends FigureModel {
    constructor() {
        super();
    };

    makeAllPossibleMoves() {
        const possibleMoves: bigint[] = [];
        let bitBoard = this.bitBoard;

        while (bitBoard !== 0n) {
            const bitMask = bitBoard & -bitBoard
            bitBoard &= ~bitMask;

            const position = BigInt(bitMask.toString(2).length - 1);
            const horizontalMoves = this.makeAllPossibleHorizontalMoves(position);
            const verticalMoves = this.makeAllPossibleVerticalMoves(position);
            const diagonalMoves = this.makeAllPossibleDiagonalMoves(position);

            possibleMoves.push(...horizontalMoves, ...verticalMoves, ...diagonalMoves);
        }

        return possibleMoves;
    };
}

export default BitBoardQueenModel;
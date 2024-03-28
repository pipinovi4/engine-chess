import BitBoardModel from "../BitBoardModel";

class FigureModel extends BitBoardModel {

    constructor() {
        // @ts-ignore
        super();
    }

    protected makeAllPossibleVerticalMoves(chessBoard: bigint, piecePosition: bigint): bigint[] {
        const verticalSteps: bigint[] = [8n, 16n, 24n, 32n, 40n, 48n, 56n, -8n, -16n, -24n, -32n, -40n, -48n, -56n];
        return verticalSteps.map(step => {
            let potentialMove = (chessBoard & ~piecePosition) | (piecePosition >> step);
            return (potentialMove >> 64n === 0n && potentialMove !== 0n) ? potentialMove : null;
        }).filter(move => move !== null);
    };

    protected makeAllPossibleHorizontalMoves(chessBoard: bigint, piecePosition: bigint): bigint[] {
        const horizontalSteps: bigint[] = [1n, 2n, 3n, 4n, 5n, 6n, 7n, -1n, -2n, -3n, -4n, -5n, -6n, -7n];
        return horizontalSteps.map(step => {
            let potentialMove = (chessBoard & ~piecePosition) | (piecePosition << step);
            const startPositionColumn = piecePosition.toString(2).length - Math.floor(piecePosition.toString(2).length / 8) * 8;
            const endPositionColumn = potentialMove.toString(2).length - Math.floor(potentialMove.toString(2).length / 8) * 8;
            return (potentialMove >> 64n === 0n && potentialMove !== 0n && (step < 0 ? startPositionColumn < endPositionColumn : startPositionColumn > endPositionColumn)) ? potentialMove : null;
        }).filter(move => move !== null);
    };

    protected makeAllPossibleDiagonalMoves(chessBoard: bigint, piecePosition: bigint): bigint[] {
        const possibleMoves: bigint[] = [];
        const diagonalDirections = [9n, -9n, 7n, -7n];

        for (const direction of diagonalDirections) {
            for (let i = 1; i <= 8; i++) {
                const step = BigInt(i);
                let potentialMove = (chessBoard & ~piecePosition) | (direction > 0 ? piecePosition << (step * direction) : piecePosition >> (step * -direction));
                const moveColumn = potentialMove.toString(2).length % 8 || 8;

                if (potentialMove >> 64n !== 0n || potentialMove === 0n ||
                    (direction === 9n || direction === -7n) && (moveColumn < piecePosition.toString(2).length % 8) ||
                    (direction === -9n || direction === 7n) && (moveColumn > piecePosition.toString(2).length % 8)) {
                    continue;
                }

                possibleMoves.push(potentialMove);
            }
        }

        return possibleMoves;
    };
}

export default FigureModel;
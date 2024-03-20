import FigureModel from "./FigureModel";

class BitBoardKingModel extends FigureModel {
    readonly steps: bigint[] = [1n, -1n, 8n, -8n, 7n, 9n, -7n, -9n];
    
    constructor() {
        super();
    };

    protected makeAllPossibleMoves() {
        const possibbleMoves: bigint[] = [];
        let bitBoard = this.bitBoard;
        
        while (bitBoard !== 0n) {
            const bitMask = bitBoard & -bitBoard;
            bitBoard &= ~bitMask;

            this.steps.forEach(step => {
                const newPossibleMove = bitMask >> step;
                possibbleMoves.push(newPossibleMove);
            });
        }
        
        return possibbleMoves;
    };
}

export default BitBoardKingModel;
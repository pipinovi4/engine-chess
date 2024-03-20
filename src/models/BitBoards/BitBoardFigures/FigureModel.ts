import BitBoardModel from "../BitBoardModel";

class FigureModel extends BitBoardModel{
    constructor() {
        super();
    }

    protected makeAllPossibleVerticalMoves(): bigint[] {
        return [1n];
    };

    protected makeAllPossibleHorizontalMoves(): bigint[] {
        return [1n];
    };

    protected makeAllPossibleDiagonalMoves(): bigint[] {
        return [1n];
    };

    protected isCellEmpty(): boolean {
        return false;
    };
}

export default FigureModel;
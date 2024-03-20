import BitBoardModel from "../BitBoardModel";
import BitBoardsEnum from "../../../enums/BitBoardsEnum";
import {INITIAL_POSITION} from "../../../constants/InitialBinaryValueBitBoards";

class FigureModel extends BitBoardModel{

    constructor() {
        // @ts-ignore
        super();
    }

    protected makeAllPossibleVerticalMoves(position: bigint): bigint[] {
        const result: bigint[] = [];
        const steps = [8n, -8n]
        let newBitBoard = this.bitBoard;

        while (newBitBoard !== 0n) {
            const bitMask = newBitBoard & -newBitBoard;
            newBitBoard &= ~bitMask;

            const newPossibleMove = bitMask >> 8n;

            newBitBoard |= newPossibleMove;

            result.push(newBitBoard);
        }

        return result;
    };

    protected makeAllPossibleHorizontalMoves(position: bigint): bigint[] {
        const result: bigint[] = [];
        const steps = [1n, -1n]
        let newBitBoard = this.bitBoard;

        while (newBitBoard !== 0n) {
            const bitMask = newBitBoard & -newBitBoard;
            newBitBoard &= ~bitMask;

            const newPossibleMove = bitMask >> 1n;

            newBitBoard |= newPossibleMove;

            result.push(newBitBoard);
        }

        return result;
    };

    protected makeAllPossibleDiagonalMoves(position: bigint): bigint[] {
        const result: bigint[] = [];
        let newBitBoard = this.bitBoard;
        const steps = [7n, 9n, -7n, -9n];

        steps.forEach(direction => {
            let bitBoard = newBitBoard;
            while (bitBoard !== 0n) {
                const bitMask = bitBoard & -bitBoard;

                    bitBoard &= ~bitMask;

                    const newPossibleMove = direction > 0 ? bitMask >> direction : bitMask >> -direction;
                    bitBoard |= newPossibleMove;
                    result.push(bitBoard);
            }
        });

        return result;
    };

    protected IsEmptyBit(bitMask: bigint): boolean {
        return (INITIAL_POSITION & bitMask) === 0n;
    };
}

export default FigureModel;
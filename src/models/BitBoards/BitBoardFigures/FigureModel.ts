import BitBoardModel from "../BitBoardModel";
import BitBoardsEnum from "../../../enums/BitBoardsEnum";
import {INITIAL_POSITION} from "../../../constants/InitialBinaryValueBitBoards";
import {
    STEP_AHEAD,
    STEP_BACKWARD, STEP_DIAGONAL_AHEAD_LEFT,
    STEP_DIAGONAL_AHEAD_RIGHT, STEP_DIAGONAL_LEFT_BACKWARD, STEP_DIAGONAL_RIGHT_BACKWARD,
    STEP_LEFT,
    STEP_RIGHT
} from "../../../constants/FiguresPossibleSteps";
import {BOTTOM_EDGE, LEFT_EDGE, RIGHT_EDGE, TOP_EDGE} from "../../../constants/BitBoardEdges";
import {extractLowestBitMask} from "../../../utils/BitManipulations";

class FigureModel extends BitBoardModel{

    constructor() {
        // @ts-ignore
        super();
    }

    protected makeAllPossibleVerticalMoves(bitMask: bigint): bigint[] {
        const result: bigint[] = [];
        const steps = [STEP_BACKWARD, STEP_AHEAD]
        let newBitBoard = this.bitBoard;

        newBitBoard &= ~bitMask;

        const newPossibleMove = bitMask >> STEP_AHEAD;

        if (this.isWithinBoardBoundaries(newPossibleMove)) {
            newBitBoard |= newPossibleMove;
            result.push(newBitBoard);
        }

        return result;
    };

    protected makeAllPossibleHorizontalMoves(bitMask: bigint): bigint[] {
        const result: bigint[] = [];
        const steps = [STEP_LEFT, STEP_RIGHT]
        let newBitBoard = this.bitBoard;

        newBitBoard &= ~bitMask;

        const newPossibleMove = bitMask >> 1n;
        if (this.isWithinBoardBoundaries(newPossibleMove)) {
            newBitBoard |= newPossibleMove;
            result.push(newBitBoard);
        }

        return result;
    };

    protected makeAllPossibleDiagonalMoves(bitMask: bigint): bigint[] {
        const result: bigint[] = [];
        let newBitBoard = this.bitBoard;
        const steps = [
            STEP_DIAGONAL_AHEAD_RIGHT, STEP_DIAGONAL_LEFT_BACKWARD,
            STEP_DIAGONAL_AHEAD_LEFT, STEP_DIAGONAL_RIGHT_BACKWARD
        ];

        steps.forEach(step => {
            let bitBoard = newBitBoard;
            const bitMask = extractLowestBitMask(newBitBoard);

            bitBoard &= ~bitMask;

            const newPossibleMove = step > 0 ? bitMask >> step : bitMask >> -step;
            if (this.isWithinBoardBoundaries(newPossibleMove)) {
                bitBoard |= newPossibleMove;
                result.push(bitBoard);
            }
        });

        return result;
    };

    protected isWithinBoardBoundaries(bitMask: bigint): boolean {
        return ((bitMask << 1n & LEFT_EDGE) !== 0n || (bitMask >> 1n & RIGHT_EDGE) !== 0n ||
            (bitMask << 8n & TOP_EDGE) !== 0n || (bitMask >> 8n & BOTTOM_EDGE) !== 0n);
    };
}

export default FigureModel;
import { STEP_KNIGHT_LEFT_UP, STEP_KNIGHT_LEFT_DOWN, STEP_KNIGHT_DOWN_RIGHT,
    STEP_KNIGHT_DOWN_LEFT, STEP_KNIGHT_RIGHT_DOWN, STEP_KNIGHT_RIGHT_UP, STEP_KNIGHT_UP_RIGHT } from "../../../constants/FiguresPossibleSteps";
import ColorsEnum from "../../../enums/ColorsEnum";
import {
    BLACK_ROOK_INITIAL_POSITION,
    WHITE_KNIGHT_INITIAL_POSITION,
} from "../../../constants/InitialBinaryValueBitBoards";
import FigureModel from "./FigureModel";
import { extractLowestBitMask } from "../../../utils/BitManipulations";

class BitBoardKnightModel extends FigureModel {
    readonly steps: bigint[] = [
        STEP_KNIGHT_RIGHT_DOWN , STEP_KNIGHT_DOWN_RIGHT, STEP_KNIGHT_LEFT_UP,
        STEP_KNIGHT_UP_RIGHT, STEP_KNIGHT_RIGHT_UP, STEP_KNIGHT_LEFT_DOWN, STEP_KNIGHT_DOWN_LEFT
    ]

    constructor(color: ColorsEnum) {
        super();
        this.bitBoard = color === ColorsEnum.WHITE ? WHITE_KNIGHT_INITIAL_POSITION : BLACK_ROOK_INITIAL_POSITION;
    };

    protected makeAllPossibleMoves() {
        const possibleMoves: bigint[] = [];
        let bitBoard = this.bitBoard;

        while (bitBoard !== 0n) {
            const bitMask = extractLowestBitMask(bitBoard);
            bitBoard &= ~bitMask;

            if (this.isWithinBoardBoundaries(bitMask)) {
                const knightMoves = this.steps.map(step => {
                    const possibleMove = bitMask >> step;
                    possibleMoves.push(possibleMove);
                });
            }
        }

        return possibleMoves;
    };
}

export default BitBoardKnightModel;

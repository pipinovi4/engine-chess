import FigureModel from "./FigureModel";
import ColorsEnum from "../../../enums/ColorsEnum";
import {BLACK_KING_INITIAL_POSITION, WHITE_KING_INITIAL_POSITION} from "../../../constants/InitialBinaryValueBitBoards";
import {STEP_DIAGONAL_RIGHT_BACKWARD, STEP_DIAGONAL_LEFT_BACKWARD, STEP_AHEAD, STEP_BACKWARD, STEP_LEFT, STEP_RIGHT, STEP_DIAGONAL_AHEAD_RIGHT, STEP_DIAGONAL_AHEAD_LEFT} from "../../../constants/FiguresPossibleSteps";

class BitBoardKingModel extends FigureModel {
    private steps: bigint[] = [STEP_DIAGONAL_RIGHT_BACKWARD, STEP_DIAGONAL_LEFT_BACKWARD, STEP_LEFT, STEP_RIGHT, STEP_DIAGONAL_AHEAD_RIGHT, STEP_DIAGONAL_AHEAD_LEFT, STEP_AHEAD, STEP_BACKWARD];
    readonly color: ColorsEnum;

    constructor(color: ColorsEnum) {
        super();
        this.color = color;
        this.bitBoard = color === ColorsEnum.WHITE ? WHITE_KING_INITIAL_POSITION : BLACK_KING_INITIAL_POSITION;
    };

    public makeAllPossibleMoves(): bigint[] {
        let possibleMoves: bigint[] = [];
        let bitBoard = this.bitBoard;
        let bitMask = bitBoard & -bitBoard;
        bitBoard &= ~bitMask;

        this.steps.forEach(step => {
            let newPossibleMove = this.calculateMove(bitMask, step);
            if (newPossibleMove !== null) {
                possibleMoves.push(newPossibleMove);
            }
        });

        return possibleMoves;
    }

    private calculateMove(bitMask: bigint, step: bigint): bigint | null {
        let newPossibleMove = bitMask << step;
        if ((newPossibleMove >> 64n) !== 0n || newPossibleMove === 0n) {
            return null;
        }
        return newPossibleMove;
    }
}

export default BitBoardKingModel;

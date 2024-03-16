import BitBoardTypes from '../enums/BitBoardsEnum';
import ColorsEnum from "../enums/ColorsEnum";
import BitBoardsEnum from "../enums/BitBoardsEnum";

class BitBoardModel {
    protected board: bigint;
    private boardType: BitBoardTypes;
    private colors: ColorsEnum | null;

    constructor(boardType: BitBoardTypes, colors: ColorsEnum | null = null) {
        this.board = 0n;
        this.boardType = boardType;
        this.colors = colors;
    };

    public getBoard = (): bigint => {
        return this.board;
    };

    public setPosition = (position: number, value: boolean): void => {
        if (value) {
            this.board |= 1n << BigInt(position);
        } else {
            this.board &= ~(1n << BigInt(position));
        }
    };

    public getPosition = (position: number): boolean => {
        return (this.board & (1n << BigInt(position))) !== 0n;
    };

    public generateBitBoardKey = (type: BitBoardsEnum, color: ColorsEnum): string => {
        return `${type}_${color}`;
    }
}

export default BitBoardModel;
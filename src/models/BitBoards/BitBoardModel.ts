import BitBoardsEnum from '../../enums/BitBoardsEnum';
import ColorsEnum from "../../enums/ColorsEnum";
import EngineModel from "../Engine/EngineModel";
import {
    BLACK_INITIAL_POSITION,
    INITIAL_POSITION,
    WHITE_INITIAL_POSITION
} from "../../constants/InitialBinaryValueBitBoards";

class BitBoardModel extends EngineModel {
    protected bitBoard: bigint;

    public getBoard = (): bigint => {
        return this.bitBoard;
    };

    public setPosition = (position: number, value: boolean): void => {
        if (value) {
            this.bitBoard |= 1n << BigInt(position);
        } else {
            this.bitBoard &= ~(1n << BigInt(position));
        }
    };

    protected setBitBoard(bitBoard: bigint) {
        this.bitBoard = bitBoard;
    }

    public getBitBoard() {
        return this.bitBoard;
    }

    public getPosition = (position: number): boolean => {
        return (this.bitBoard & (1n << BigInt(position))) !== 0n;
    };

    public generateBitBoardKey = (type: BitBoardsEnum, color: ColorsEnum): string => {
        return `${type}_${color}`;
    };

    protected bitOccupiedEnemy(bitMask: bigint, color: ColorsEnum): boolean {
        return (color === ColorsEnum.WHITE ? BLACK_INITIAL_POSITION & bitMask : WHITE_INITIAL_POSITION & bitMask) !== 0n;
    };

    protected bitOccupiedFriendly(bitMask: bigint, color: ColorsEnum): boolean {
        return (color === ColorsEnum.WHITE ? WHITE_INITIAL_POSITION & bitMask : BLACK_INITIAL_POSITION & bitMask) !== 0n;
    };

    protected bitOccupied(bitMask: bigint): boolean {
        return (INITIAL_POSITION & bitMask) === 0n;
    }
}

export default BitBoardModel;
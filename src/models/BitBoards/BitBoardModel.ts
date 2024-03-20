import BitBoardTypes from '../../enums/BitBoardsEnum';
import ColorsEnum from "../../enums/ColorsEnum";
import BitBoardsEnum from "../../enums/BitBoardsEnum";
import EngineModel from "../EngineModel/EngineModel";

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
    }
}

export default BitBoardModel;
import BitBoardModel from "../BitBoards/BitBoardModel";
import BitBoardsEnum from "../../enums/BitBoardsEnum";
import ColorsEnum from "../../enums/ColorsEnum";
import EngineModeEnum from "../../enums/EngineModeEnum";

const ENGINE_TIMEOUT = 2 * 60 * 1000;

class EngineModel {
    public deep: number;
    public mode: EngineModeEnum;
    readonly timeOut = ENGINE_TIMEOUT;
    private bitBoards: Map<string, BitBoardModel> = new Map();

    private initBitBoards() {
        Object.values(BitBoardsEnum).forEach((type ) => {
            if (type === BitBoardsEnum.ALL) this.bitBoards.set(type.toString(), new BitBoardModel());

            Object.values(ColorsEnum).forEach((color) => {
                const bitBoardValue = new BitBoardModel();
                const bitBoardKey = bitBoardValue.generateBitBoardKey(type as BitBoardsEnum, color as ColorsEnum);

                this.bitBoards.set(bitBoardKey, bitBoardValue);
            });
        });
    }

    constructor(deep: number = 20, mode: EngineModeEnum) {
        this.deep = deep;
        this.mode = mode;
        this.initBitBoards();
    }
}

export default EngineModel;

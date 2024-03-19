import BitBoardModel from "../BitBoardModel";
import ColorsEnum from "../../../enums/ColorsEnum";
import FigureNames from "../../../enums/FigureNames";

class FigureModel extends BitBoardModel {
    protected color: ColorsEnum;
    protected figureName: FigureNames;

    constructor() {
        super();
    };
}

export default FigureModel;
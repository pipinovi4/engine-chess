import BitBoardRookModel from "./src/models/BitBoards/BitBoardFigures/BitBoardRookModel";
import ColorsEnum from "./src/enums/ColorsEnum";
import BitBoardQueenModel from "./src/models/BitBoards/BitBoardFigures/BitBoardQueenModel";
import BitBoardPawnModel from "./src/models/BitBoards/BitBoardFigures/BitBoardPawnModel";

const start = () => {
    const pawnWhiteBitBoard = new BitBoardPawnModel(ColorsEnum.BLACK);

    const startTime = performance.now();

    pawnWhiteBitBoard.makeAllPossibleMoves();

    const endTime = performance.now();

    console.log(`Функция makeAllPossibleMoves выполнялась ${(endTime - startTime).toFixed(2)} миллисекунд.`);
}

start();

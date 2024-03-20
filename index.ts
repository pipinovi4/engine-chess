import BitBoardRookModel from "./src/models/BitBoards/BitBoardFigures/BitBoardRookModel";
import ColorsEnum from "./src/enums/ColorsEnum";

const start = () => {
    const rookBitBoard = new BitBoardRookModel(ColorsEnum.WHITE);

    const startTime = performance.now();
    rookBitBoard.makeAllPossibleMoves();
    rookBitBoard.makeAllPossibleMoves();
    rookBitBoard.makeAllPossibleMoves();
    rookBitBoard.makeAllPossibleMoves();
    rookBitBoard.makeAllPossibleMoves();
    rookBitBoard.makeAllPossibleMoves();
    rookBitBoard.makeAllPossibleMoves();
    rookBitBoard.makeAllPossibleMoves();
    rookBitBoard.makeAllPossibleMoves();
    rookBitBoard.makeAllPossibleMoves();

    const endTime = performance.now();

    console.log(`Функция makeAllPossibleMoves выполнялась ${(endTime - startTime).toFixed(2)} миллисекунд.`);
}

start();

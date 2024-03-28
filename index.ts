import ColorsEnum from "./src/enums/ColorsEnum";
import bitBoardKnightModel from "./src/models/BitBoards/BitBoardFigures/BitBoardKnightModel";
import bitBoardBishopModel from "./src/models/BitBoards/BitBoardFigures/BitBoardBishopModel";
import bitBoardPawnModel from "./src/models/BitBoards/BitBoardFigures/BitBoardPawnModel";
import bitBoardRookModel from "./src/models/BitBoards/BitBoardFigures/BitBoardRookModel";
import bitBoardQueenModel from "./src/models/BitBoards/BitBoardFigures/BitBoardQueenModel";
import bitBoardKingModel from "./src/models/BitBoards/BitBoardFigures/BitBoardKingModel";

const start = () => {
    const bitBoardWhiteKnight = new bitBoardKnightModel(ColorsEnum.WHITE);
    const bitBoardWhiteBishop = new bitBoardBishopModel(ColorsEnum.WHITE);
    const bitBoardWhitePawn = new bitBoardPawnModel(ColorsEnum.WHITE);
    const bitBoardWhiteRook = new bitBoardRookModel(ColorsEnum.WHITE);
    const bitBoardWhiteQueen = new bitBoardQueenModel(ColorsEnum.WHITE);
    const bitBoardWhiteKing = new bitBoardKingModel(ColorsEnum.WHITE);

    const bitBoardBlackKnight = new bitBoardKnightModel(ColorsEnum.BLACK);
    const bitBoardBlackBishop = new bitBoardBishopModel(ColorsEnum.BLACK);
    const bitBoardBlackPawn = new bitBoardPawnModel(ColorsEnum.BLACK);
    const bitBoardBlackRook = new bitBoardRookModel(ColorsEnum.BLACK);
    const bitBoardBlackQueen = new bitBoardQueenModel(ColorsEnum.BLACK);
    const bitBoardBlackKing = new bitBoardKingModel(ColorsEnum.BLACK);

    const startTime = performance.now();

    bitBoardWhiteKnight.makeAllPossibleMoves();
    bitBoardWhiteBishop.makeAllPossibleMoves();
    bitBoardWhitePawn.makeAllPossibleMoves();
    bitBoardWhiteRook.makeAllPossibleMoves();
    bitBoardWhiteQueen.makeAllPossibleMoves();
    bitBoardWhiteKing.makeAllPossibleMoves();

    bitBoardBlackBishop.makeAllPossibleMoves();
    bitBoardBlackKing.makeAllPossibleMoves();
    bitBoardBlackKnight.makeAllPossibleMoves();
    bitBoardBlackPawn.makeAllPossibleMoves();
    bitBoardBlackQueen.makeAllPossibleMoves();
    bitBoardBlackRook.makeAllPossibleMoves();

    const endTime = performance.now();

    console.log(`Функция makeAllPossibleMoves выполнялась ${(endTime - startTime).toFixed(4)} миллисекунд`);
}

start();

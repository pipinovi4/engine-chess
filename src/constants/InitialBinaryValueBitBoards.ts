//Here are the starting board positions for all variants - the board states that will be needed to fully analyze the game.
//Boards have 16 bits representation in binary format here, we use the most efficient approach called - bitboards.

// ---------------------------------------------------------------------------------------------------------------------\\

// Definition of the initial position of the chess board in binary bitboards

const BLACK_PAWN_INITIAL_POSITION = 0x00FF000000000000n;
const WHITE_PAWN_INITIAL_POSITION = 0x000000000000FF00n;
const WHITE_KNIGHT_INITIAL_POSITION = 0x0000000000000042n;
const BLACK_KNIGHT_INITIAL_POSITION = 0x4200000000000000n;
const WHITE_BISHOP_INITIAL_POSITION = 0x0000000000000024n;
const BLACK_BISHOP_INITIAL_POSITION = 0x2400000000000000n;
const WHITE_ROOK_INITIAL_POSITION = 0x0000000000000081n;
const BLACK_ROOK_INITIAL_POSITION = 0x8100000000000000n;
const WHITE_QUEEN_INITIAL_POSITION = 0x0000000000000010n;
const BLACK_QUEEN_INITIAL_POSITION = 0x1000000000000000n;
const WHITE_KING_INITIAL_POSITION = 0x0000000000000008n;
const BLACK_KING_INITIAL_POSITION = 0x0800000000000000n;


//Plank values of the initial positions of the chess binary board

const WHITE_INITIAL_POSITION = WHITE_PAWN_INITIAL_POSITION | WHITE_KNIGHT_INITIAL_POSITION | WHITE_BISHOP_INITIAL_POSITION | WHITE_ROOK_INITIAL_POSITION | WHITE_QUEEN_INITIAL_POSITION | WHITE_KING_INITIAL_POSITION;
const BLACK_INITIAL_POSITION = BLACK_PAWN_INITIAL_POSITION | BLACK_KNIGHT_INITIAL_POSITION | BLACK_BISHOP_INITIAL_POSITION | BLACK_ROOK_INITIAL_POSITION | BLACK_QUEEN_INITIAL_POSITION | BLACK_KING_INITIAL_POSITION;

const INITIAL_POSITION = WHITE_INITIAL_POSITION | BLACK_INITIAL_POSITION;

//Plank values of the initial attacks difference colors figures of the chess binary board

const INITIAL_WHITE_ATTACK_POSITION = 0x0000000000FFFFFFn;
const INITIAL_BLACK_ATTACK_POSITION = 0xFFFFFF0000000000n;

// ---------------------------------------------------------------------------------------------------------------------\\

export { WHITE_KING_INITIAL_POSITION, BLACK_KING_INITIAL_POSITION, WHITE_PAWN_INITIAL_POSITION,
    BLACK_KNIGHT_INITIAL_POSITION, BLACK_QUEEN_INITIAL_POSITION, WHITE_BISHOP_INITIAL_POSITION,
    WHITE_ROOK_INITIAL_POSITION, BLACK_PAWN_INITIAL_POSITION, BLACK_ROOK_INITIAL_POSITION,
    WHITE_KNIGHT_INITIAL_POSITION, WHITE_QUEEN_INITIAL_POSITION, BLACK_BISHOP_INITIAL_POSITION,
    BLACK_INITIAL_POSITION, INITIAL_POSITION, WHITE_INITIAL_POSITION, INITIAL_WHITE_ATTACK_POSITION,
    INITIAL_BLACK_ATTACK_POSITION }

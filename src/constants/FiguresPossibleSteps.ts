// Chess Movement Steps Documentation

//This documentation provides details on the constants used to represent different chess piece movements in a bitboard representation.
// Bitboards offer an efficient way to represent and manipulate the chess board state using bitwise operations.
// Each movement direction is represented as a step value, allowing for clear and optimized chess move calculations.

// ---------------------------------------------------------------------------------------------------------------------\\

// The following constants represent the step values for each possible movement direction of a basic cases.

const STEP_AHEAD = 8n;
const STEP_BACKWARD = -8n;
const STEP_LEFT = 1n;
const STEP_RIGHT = -1n;
const STEP_DIAGONAL_AHEAD_LEFT = 7n;
const STEP_DIAGONAL_AHEAD_RIGHT = 9n;
const STEP_DIAGONAL_LEFT_BACKWARD = -7n;
const STEP_DIAGONAL_RIGHT_BACKWARD = -9n;

// The following constants represent the step values for each possible movement direction of a knight.

const STEP_KNIGHT_UP_LEFT = 6n;
const STEP_KNIGHT_UP_RIGHT = 10n;
const STEP_KNIGHT_RIGHT_UP = 15n;
const STEP_KNIGHT_RIGHT_DOWN = 17n;
const STEP_KNIGHT_DOWN_LEFT = -6n;
const STEP_KNIGHT_DOWN_RIGHT = -10n;
const STEP_KNIGHT_LEFT_UP = -15n;
const STEP_KNIGHT_LEFT_DOWN = -17n;
// ---------------------------------------------------------------------------------------------------------------------\\

export { STEP_AHEAD, STEP_BACKWARD, STEP_DIAGONAL_AHEAD_LEFT, STEP_DIAGONAL_AHEAD_RIGHT,
        STEP_DIAGONAL_RIGHT_BACKWARD, STEP_DIAGONAL_LEFT_BACKWARD,
        STEP_LEFT, STEP_RIGHT, STEP_KNIGHT_LEFT_UP, STEP_KNIGHT_LEFT_DOWN, STEP_KNIGHT_DOWN_RIGHT,
        STEP_KNIGHT_DOWN_LEFT, STEP_KNIGHT_RIGHT_DOWN, STEP_KNIGHT_RIGHT_UP, STEP_KNIGHT_UP_RIGHT,}
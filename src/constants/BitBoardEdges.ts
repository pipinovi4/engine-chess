// LEFT_EDGE represents the left edge of the chess board.
// Every 8th bit from the start is set to 1, representing the left edge of the board.
const LEFT_EDGE = 0x8080808080808080n;

// RIGHT_EDGE represents the right edge of the chess board.
// Every 8th bit from the end is set to 1, representing the right edge of the board.
const RIGHT_EDGE = 0x0101010101010101n;

// TOP_EDGE represents the top edge of the chess board.
// All bits in the top byte are set to 1, representing the top edge of the board.
const TOP_EDGE = 0xFF00000000000000n;

// BOTTOM_EDGE represents the bottom edge of the chess board.
// All bits in the bottom byte are set to 1, representing the bottom edge of the board.
const BOTTOM_EDGE = 0x00000000000000FFn;

// Export the constants, so they can be used in other parts of the program.
export { LEFT_EDGE, RIGHT_EDGE, TOP_EDGE, BOTTOM_EDGE };
function extractLowestBitMask(bitBoard: bigint): bigint {
    return bitBoard & -bitBoard;
}

export { extractLowestBitMask };

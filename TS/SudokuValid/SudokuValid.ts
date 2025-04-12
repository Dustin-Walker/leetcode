function isValidSudoku(board: string[][]): boolean {
    // Check for valid rows
    const rowsValid = board.every((row) => {
        const cellsWithEntries = row.filter((cell) => cell !== ".");
        return cellsWithEntries.length === new Set(cellsWithEntries).size
    });
    if (!rowsValid) {
        return false;
    }
    // Check for valid columns and squares
    for (let i = 0; i < 9; i++) {
        const cellsWithEntries = board.map((row) => row[i]).filter((cell) => cell !== ".");
        // Check for valid columns
        if (cellsWithEntries.length !== new Set(cellsWithEntries).size) {
            return false;
        }
        // Check for validity inside square
        const xOrigin = Math.floor((i+1) % 3) * 3;
        const yOrigin = Math.floor(i/3) * 3;
        let squareCells = [];
        for (let y = yOrigin; y < yOrigin + 3; y++) {
            let x = xOrigin;
            for (; x < xOrigin + 2; x++) {
                squareCells.push(board[y][x])
            }
            x = xOrigin;
        }
        const squareCellsWithEntries = squareCells.filter((cell) => cell !== ".");
        if (squareCellsWithEntries.length !== new Set(squareCellsWithEntries).size) {
            return false;
        }
    }
    return true;
}
import { winner_combos } from '../constants'
export const checkWinner = (boardToCheck) => {
  for (const combo of winner_combos) {
    const [a, b, c, d] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c] &&
      boardToCheck[a] === boardToCheck[d]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (newBoard) => {
  return newBoard.every((Square) => Square != null)
}

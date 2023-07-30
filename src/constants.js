export const TURNS = {
  a: '🟡',
  b: '🔴',
}

const ROWS = 6
const COLS = 7
const CONNECT_COUNT = 4

function generateCombos() {
  const combos = []

  // Combinaciones horizontales
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col <= COLS - CONNECT_COUNT; col++) {
      const combo = []
      for (let i = 0; i < CONNECT_COUNT; i++) {
        combo.push(row * COLS + col + i)
      }
      combos.push(combo)
    }
  }

  // Combinaciones verticales
  for (let col = 0; col < COLS; col++) {
    for (let row = 0; row <= ROWS - CONNECT_COUNT; row++) {
      const combo = []
      for (let i = 0; i < CONNECT_COUNT; i++) {
        combo.push((row + i) * COLS + col)
      }
      combos.push(combo)
    }
  }

  // Combinaciones diagonales de izquierda a derecha
  for (let row = 0; row <= ROWS - CONNECT_COUNT; row++) {
    for (let col = 0; col <= COLS - CONNECT_COUNT; col++) {
      const combo = []
      for (let i = 0; i < CONNECT_COUNT; i++) {
        combo.push((row + i) * COLS + col + i)
      }
      combos.push(combo)
    }
  }

  // Combinaciones diagonales de derecha a izquierda
  for (let row = 0; row <= ROWS - CONNECT_COUNT; row++) {
    for (let col = COLS - 1; col >= CONNECT_COUNT - 1; col--) {
      const combo = []
      for (let i = 0; i < CONNECT_COUNT; i++) {
        combo.push((row + i) * COLS + col - i)
      }
      combos.push(combo)
    }
  }

  return combos
}

// Llamamos a la función para obtener todos los combos posibles
export const winner_combos = generateCombos()

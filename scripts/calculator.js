export const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') return "one or more inputs is not a number"
  return a + b
}

export const subtract = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') return "one or more inputs is not a number"
  return a - b
}

export const multiply = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') return "one or more inputs is not a number"
  return a * b
}

export const divide = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') return "one or more inputs is not a number"
  if (a === 0 || b === 0) return 'What are you crazy!?!'
  return a / b
}
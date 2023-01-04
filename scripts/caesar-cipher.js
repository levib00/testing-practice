

export const caesarCipher = (shift) => {
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  if (shift >= 0) {
    for (let i = 0; i < shift; i++) {
      alphabet.unshift(alphabet.pop())
    }
  } else {
    for (let i = 0; i > shift; i--) {
      alphabet.push(alphabet.shift())
    }
  }
  return alphabet
}

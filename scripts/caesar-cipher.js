

export const caesarCipher = (shift) => {
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  alphabet.unshift(alphabet.pop())
  console.log(alphabet)
  return alphabet
}

const encode = (shift, alphabet) => {
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

export const caesarCipher = (shift, str) => {
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const indexArray = []
  for (let i = 0; i < str.length; i ++) {
    indexArray.push(alphabet.indexOf(str.charAt(i)))
  }
  const encodedAlphabet = encode(shift, alphabet);
  let encodedString = ''
  for (let index of indexArray) {
    encodedString = encodedString += encodedAlphabet[index]
  }
  return encodedString
}

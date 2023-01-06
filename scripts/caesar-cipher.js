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
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const indexArray = []
  for (let i = 0; i < str.length; i ++) {
    if (/^[A-Z]$/i.test(str.charAt(i))) {
      const lowerChar = str.charAt(i).toLowerCase()
      indexArray.push({
        char : alphabet.indexOf(lowerChar),
        isUpperCase : str.charAt(i) === str.charAt(i).toUpperCase()
      })
    } else {
      indexArray.push({
        char : str.charAt(i),
        isUpperCase : false
      })
    }
  }
  const encodedAlphabet = encode(shift, alphabet);
  let encodedString = ''
  for (let index of indexArray) {
    if (/^\d+$/.test(index.char)) {
      if (!index.isUpperCase) {
        encodedString = encodedString += encodedAlphabet[index.char]
      } else {
        encodedString = encodedString += encodedAlphabet[index.char].toUpperCase()
      }
    } else {
      encodedString = encodedString += index.char
    }
  }
  return encodedString
}

export const reverse = (string) => {
  let newString = ''
  for (let i = string.length; i >= 0; i--) {
    newString = newString += string.charAt(i)
  }
  return newString
}
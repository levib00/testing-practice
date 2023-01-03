export const reverse = (string) => {
  if (typeof string !== 'string') return 'input is not a string'
  let newString = ''
  for (let i = string.length; i >= 0; i--) {
    newString = newString += string.charAt(i)
  }
  return newString
  
}
export const capitalize = (string) => {
  if (typeof string != 'string') return 'input is not a string'
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i).match(/[a-z]/i)) {
      return string.slice(0, i ) + string.charAt(i).toUpperCase() + string.slice(i + 1, string.length)
    }
  }
  return string
}
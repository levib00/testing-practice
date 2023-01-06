const getAverage = (numbers) => {
  let sum = 0
  for (let number of numbers) {
    sum = sum + number
  }
  return sum / numbers.length
}

const minMax = (numbers) => {
  numbers.sort(function(a, b) {
    return a - b;
  });
  return [numbers[0], numbers[numbers.length - 1]]
}

const checkNonNumbers = (numbers) => {
  for (let number of numbers) {
    if (typeof number !== 'number') return true
  }
  return false
}

export const analyzeArray = (numbers) => {
  if (checkNonNumbers(numbers)) return 'one or more element is not a number'
  const minMaxArray = minMax(numbers)
  return {
    min : minMaxArray[0],
    max : minMaxArray[1],
    average : getAverage(numbers),
    length : numbers.length
  }
}
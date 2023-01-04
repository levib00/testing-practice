import {sum, subtract, multiply, divide} from './calculator.js'
test('sum 2 numbers', () => {
  expect(sum(1, 2)).toBe(3)
})

test('subtract one number from another number', () => {
  expect(subtract(4, 1)).toBe(3)
})

test('multiply 2 numbers together', () => {
  expect(multiply(3, 2)).toBe(6)
})

test('divide one number from another', () => {
  expect(divide(6, 2)).toBe(3)
})

test('dividing by zero', () => {
  expect(divide(0, 12)).toBe('What are you crazy!?!')
})

test('working with floating point numbers', () => {
  expect(sum(12.4, 3.2)).toBeCloseTo(15.6)
})

test('working with floating point numbers', () => {
  expect(divide(12.4, 3.2)).toBeCloseTo(3.875)
})

test('working with floating point numbers', () => {
  expect(multiply(12.4, 3.2)).toBeCloseTo(39.68)
})

test('working with floating point numbers', () => {
  expect(subtract(12.4, 3.2)).toBeCloseTo(9.2)
})

test('working with negative numbers', () => {
  expect(sum(-11, -3)).toBe(-14)
})

test('working with negative numbers', () => {
  expect(subtract(-12, -3)).toBe(-9)
})

test('working with negative numbers', () => {
  expect(multiply(-3, -3)).toBe(9)
})

test('working with negative numbers', () => {
  expect(divide(-12, -3)).toBe(4)
})


test('non-number is input', () => {
  expect(sum('12', 3)).toBe('one or more inputs is not a number')
})

test('non-number is input', () => {
  expect(subtract('12', 3)).toBe('one or more inputs is not a number')
})

test('non-number is input', () => {
  expect(multiply('12', 3)).toBe('one or more inputs is not a number')
})

test('non-number is input', () => {
  expect(divide('12', 3)).toBe('one or more inputs is not a number')
})
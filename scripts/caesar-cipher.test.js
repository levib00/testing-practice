import { caesarCipher } from "./caesar-cipher.js"

test('caesar cipher with an offset of 1', () => {
  expect(caesarCipher(1)[0]).toBe('Z')
  expect(caesarCipher(1)[1]).toBe('A')
})

test('cipher with an offset of more than 1', () => {
  expect(caesarCipher(5)[4]).toBe('Z')
  expect(caesarCipher(5)[5]).toBe('A')
})

test('test with negative numbers to shift key the other way', () => {
  expect(caesarCipher(-5)[0]).toBe('F')
  expect(caesarCipher(-5)[25]).toBe('E')
})
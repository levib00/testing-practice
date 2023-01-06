import { caesarCipher } from "./caesar-cipher.js"

test('test encoding a given string', () => {
  expect(caesarCipher(5, 'CHECKING')).toBe('XCZXFDIB')
})

test('test encoding a given string with punctuation ', () => {
  expect(caesarCipher(5, 'CHEC.K,ING')).toBe('XCZX.F,DIB')
})

test('test encoding a given string with whitespace', () => {
  expect(caesarCipher(5, 'CHEC K ING')).toBe('XCZX F DIB') 
})

test('test encoding a given with varied cases', () => {
  expect(caesarCipher(5, 'cHECKINg')).toBe('xCZXFDIb')
})
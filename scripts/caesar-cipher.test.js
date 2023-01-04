import { caesarCipher } from "./caesar-cipher.js"

test('test encoding a given string', () => {
  expect(caesarCipher(5, 'CHECKING')).toBe('XCZXFDIB')
})
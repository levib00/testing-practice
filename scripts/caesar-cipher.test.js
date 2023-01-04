import { caesarCipher } from "./caesar-cipher.js"
test('caesar cipher with an offset of 1', () => {
  expect(caesarCipher(1)[0]).toBe('Z')
  expect(caesarCipher(1)[1]).toBe('A')
})
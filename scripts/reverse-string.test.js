import {reverse} from './reverse-string.js'

test('reverse string', () => {
  expect(reverse('string')).toBe('gnirts')
})

test('reverse string with spaces', () => {
  expect(reverse('string with spaces')).toBe('secaps htiw gnirts')
})

test('reverse string with non letters', () => {
  expect(reverse('string. with 123')).toBe('321 htiw .gnirts')
})

test('test if input is not a string', () => {
  expect(reverse('string')).toBe('gnirts')
})
import { analyzeArray } from "./analyzeArray.js"

test('test that average gives the average of the array', () => {
  expect(analyzeArray([1,8,3,4,2,6]).average).toBeCloseTo(4)
})

test('test that min gives the min of the array', () => {
  expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1)
})

test('test that max gives the max of the array', () => {
  expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8)
})

test('test that length gives the length of the array', () => {
  expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6)
})

test('test array with non-numbers', () => {
  expect(analyzeArray([1,8,3,4,2,'egg'])).toBe('one or more element is not a number')
})
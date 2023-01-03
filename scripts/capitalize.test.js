import {capitalize} from "./capitalize";
test('capitalize the first letter of a string', () => {
  expect(capitalize('check')).toBe('Check');
});

test('capitalize the first letter of a string with a space', () => {
  expect(capitalize('double check')).toBe('Double check')
});

test('test on an already capitalized string', () => {
  expect(capitalize('CHECK')).toBe('CHECK')
});

test('test on a string where first char is not a letter', () => {
  expect(capitalize('123check')).toBe('123Check')
})

test('string with no letters', () => {
  expect(capitalize('1234')).toBe('1234')
})
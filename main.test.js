import { sort, search, newsList } from "./main.js";

//Example testing for search function
// test("Search function testing", () => {
//   expect(search(newsList)).toBe("I am a cool web developer");
// });

test('has an undefined input', () => {
  expect(search.newsList).toBeUndefined();
})

test('to contain an equal value', () => {
  expect(newsList).toContainEqual("What films should an aspiring journalist watch?");
})

test('to sort in ascending order', () => {
  expect(sort(`ascending`)).toEqual(newsList.sort())
})

test('to sort in descending order', () => {
  expect(sort(`descending`)).toEqual(newsList.reverse())
})
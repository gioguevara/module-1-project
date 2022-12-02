import { sort, search, newsList } from "./main.js";

//Example testing for search function
// test("Search function testing", () => {
//    expect(search(newsList)).toBe("I am a cool web developer");
// });

test("search function testing", () => {
    expect(JSON.stringify(search)).toBeUndefined();
})
test('if search has an undefined input', () => {
  expect(search.newsList).toBeUndefined();
})

test('if newslist contains an equal value', () => {
  expect(newsList).toContainEqual("What films should an aspiring journalist watch?");
})

test('if search can sort in ascending order', () => {
  expect(sort(`ascending`)).toEqual(newsList.sort())
})

test('if search can sort in descending order', () => {
  expect(sort(`descending`)).toEqual(newsList.reverse())
})
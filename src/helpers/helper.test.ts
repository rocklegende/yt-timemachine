import {getNRandomElements} from "./helper";

const testArray = ["cat", "dog", "car", "vehicle"];

test("get n elements, n smaller then array size", () => {
    expect(getNRandomElements(testArray, 2)).toHaveLength(2);
})

test("get n elements: if n greater then array size, then return complete array shuffled", () => {
    expect(getNRandomElements(testArray, 6)).toHaveLength(4);
})

test("get n elements: if n negative, then return complete array shuffled", () => {
    expect(getNRandomElements(testArray, -2)).toHaveLength(4);
})

test("get n elements: if n == 0, then empty array", () => {
    expect(getNRandomElements(testArray, 0)).toHaveLength(0);
})
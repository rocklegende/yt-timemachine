import {findWordsRelatedTo} from "./relatedWordsHelper";

test("should return n random elements", () => {
    expect(findWordsRelatedTo("Film & Animation", 8)).toHaveLength(8);
})

test("ess", () => {
    expect(findWordsRelatedTo("Autos & Vehicles", 8)).toHaveLength(8);
})
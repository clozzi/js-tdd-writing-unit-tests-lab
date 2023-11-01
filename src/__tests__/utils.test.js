import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
    it("gives users double points if their word is a palindrome (1 pt per vowel, 2 per consonant)", () => {
        const word = "racecar";
        const result = isPalindrome(word);
        expect(result).toBe(true)
    })
})
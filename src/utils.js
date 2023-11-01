export function isPalindrome(word) {
    let flipped = word.split('').reverse().join('');
    if (flipped === word) {
        return true;
    } else {
        return false
    }
}
const callback = (string = "") => {
    const text = string
        .replace(/\W/g, "")
        .toLowerCase()
    const reverseText = text
        .split("")
        .reverse()
        .join("")
    return text == reverseText

}

const checkPalindrome = (string, back) => {
    return back(string)
}

console.log(checkPalindrome("ibu ratna antar ubi", callback));
console.log(checkPalindrome("kasur ini rusak", callback));
console.log(checkPalindrome("A nut for a jar of tuna.", callback));
console.log(checkPalindrome("Borrow or rob?", callback));
console.log(checkPalindrome("Was it a car or a cat I saw?", callback));
console.log(checkPalindrome("Yo, banana boy!", callback));
console.log(checkPalindrome("UFO tofu?", callback));
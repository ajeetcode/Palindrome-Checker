function palindrome(str) {
  
  
  let onlyChars = str.match(/[a-zA-Z0-9]+/gi)
  
  let onlyCharString = onlyChars.join("").toLowerCase();
  
  let reversedString = onlyCharString.split("").reverse().join("")
  
  if( onlyCharString === reversedString){
    return true;
  }
  return false;
}

console.log(palindrome("eye"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye."));

// PSEUDOCODE I CREATED FOR IT 👇

// what i want ?

// A = first my programm should read from left to right
// B = rading programm from right to left.

// then A=B .

// Process.

// 1. match only the characters.
// 2. strore all those chars in a variable.
// 3. iterate it from left to right, store it in a var
// 4. same for right to left, store it in a var
// 5. compare both side var, return true or false accordingly.



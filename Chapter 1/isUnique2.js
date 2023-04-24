// determine if a string has all unique characters
// add each character to an array
// check if each new character is in the array
//

let isUnique = (s) => {
  //   console.log(array);
  for (i = 0; i < s.length; i++) {
    for (j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isUnique("sseed"));

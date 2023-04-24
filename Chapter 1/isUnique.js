let string = "abcefgh";
// const array = string.split("");

const isUnique = () => {
  // first data structure
  // parses through string starting with first letter
  for (let i = 0; i < string.length; i++) {
    // second data structure
    // parses through string starting with second letter
    for (let j = i + 1; j < string.length; j++) {
      // checks if the preceding letter is equal to the upcoming letter
      if (string[i] === string[j]) {
        console.log("not unique");
        // function stops the instance that the letters are not equal because of 'return'
        return false;
      }
    }
  }
  return true;
};

isUnique(string);

console.log(isUnique(string), "is unique");
// function everyCharUnique(str) {
//     let obj = {};
//     for (let i = 0; i < str.length; i++) {
//       if (obj[str[i]] && obj[str[i]] >= 1) {
//         return false;
//       } else {
//         obj[str[i]] = 1;
//       }
//     }
//     return true;
//   }

//   /* TESTS */
//   console.log(everyCharUnique('abccd'), 'false');

const everyCharUnique = (str) => {
  // create an array that captures each letter in the string as a separate string
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] && obj[str[i]] >= 1) {
      return false;
    } else {
      obj[str[i]] = 1;
    }
  }
  return true;
};

const uniqueChar = (str) => {
  if (str.length() > 128) {
    return false;
  }

  let obj = {};

  
};

console.log(everyCharUnique("abccd"));

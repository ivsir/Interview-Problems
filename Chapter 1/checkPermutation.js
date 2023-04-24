const stringOne = "ABC";
const stringTwo = "CAB";

// is the string a reordered version of the other string
// splice each string
// find out if first string has the same length as the second string
// find out if next string has a figure that matches any of the figures in the first string
// find out if said figure has the same amount of figures in both strings

const equalArray = [];

const stringParser = (one, two) => {
  if ((one.length = two.length)) {
    for (let i = 0; i < one.length; i++) {
      for (let j = 0; j < two.length; j++) {
        if (one[i] != two[j]) {
          console.log("not equal");
        } else {
          console.log("equal");
          equalArray.push("equal");
        }
      }
    }
    if (equalArray.length = one.length) {
      return true;
    } else {
      return false;
    }
  }
};



console.log(stringParser(stringOne, stringTwo));

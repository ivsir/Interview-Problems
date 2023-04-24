const isRotation = (string1, string2) => {
  if ((string1.length = string2.length && string1.length > 0)) {
    // double the first string
    //   rotation of a string will always be a substring of the original string twice
    var strComb = string1 + string1;
    if (strComb.includes(string2)) {
      return true;
    }
    return false;
  }
  return false;
};

console.log(isRotation("waterbottle", "erbottlewat"));
console.log(isRotation("waterbottles", "ersbottlewat"));


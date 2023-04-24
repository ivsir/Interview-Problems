const stringCompression = (string) => {
  var compressed = "";
  var currChar = "";
  var currCount = "";
  var maxCount = 1;
  for (var i = 0; i < string.length; i++) {
    // if next character is different than current character, append
    // detects different character
    // console.log(currChar,"current Character to count")
    // console.log(string[i], "current letter in string");
    if (currChar !== string[i]) {
      // appends to the compressed string once new character is detected
      compressed = compressed + currChar + currCount;
      // console.log(compressed, "compressed");

      // sets the maxCount equal to the highest number of the two variables
      maxCount = Math.max(maxCount, currCount);
      // console.log(maxCount, "max count");

      // sets the currChar to the letter in the string
      currChar = string[i];
      // console.log(currChar, "new current character")
      // current count is changed to 1 once new character is detected
      currCount = 1;
    } else {
      currCount++;
      // console.log(currCount, "curr count");
    }
  }
  compressed = compressed + currChar + currCount;
  console.log(compressed, "compressed2");
  maxCount = Math.max(maxCount, currCount);

  return compressed.length > string.length ? string : compressed;
};

const compress = (txt) => {
  var compressed = txt.replace(
    /(\w)(\1+)/g,
    (_, m1, m2) => `${m1}${m2.length + 1}`
  );
  return compressed.length > txt.length ? txt : compressed;
};

const compress2 = (string) => {
  let compressed = "";
  let stringArray = string.split("");
  for (let i = 0; i < stringArray.length; i++) {
    // next letter in array
    let count = 1 ;
  // current letter in array
    let letter = stringArray[i];
    // while string length is
    while (
      // i < stringArray.length 
      stringArray[i] === stringArray[i + 1]
    ) {
      count++;
      console.log(count,"letter count")
      i++;
      console.log(i,"current letter")
    }
    if (count === 1) {
      // recompresses the letter without the count if the count of the letter in the string is 1
      compressed += letter;
    } else {
      compressed += letter + count;
    }
  }
  return compressed;
};

console.log(stringCompression("aabcccccaaa"));
console.log(stringCompression("abcdee"), "string 2");
console.log(compress2("aabbbbbbbbcccss")); // a3b4
console.log(compress2("abc")); // a3b4


var palinPerm = function(string) {
    // create object literal to store charcount
    var chars = {};
    var currChar;
    var isOdd = false;
    var isPerm = true;
    // pump characters in, spaces not counted, all lowercase
    string.split('').forEach((char) => {
      if (char !== ' ') {
        currChar = char.toLowerCase();
        if (chars[currChar] === undefined) {
          chars[currChar] = 0;
        }
        // counts the frequency 0f a letter
        chars[currChar]++;
        console.log(chars);
      }
    });
    // check that all chars are even count, except for one exception
    Object.keys(chars).forEach((char) => {
      if (chars[char] % 2 > 0) {
      // if more than one exception, return false
        if (isOdd) {
          isPerm = false; // return in a forEach statment doesn't flow out of function scope
        } else {
          isOdd = true;
        }
      }
    });
    // if not return true
    return isPerm;
  };
  
  // TESTS
  console.log(palinPerm('iivilllli'), );
  console.log(palinPerm('Tacot boab'));
var oneAway = function(string1, string2) {
    // insert a char for str1 -> remove a char for str2
    // logic is used when a word is one letter away from being the same length
    var checkOneMissing = function(first, second) {
      // ensures that the function only continues if the first length is strictly one character
      // above of the second length
      if (first.length !== second.length - 1) {
        return false;
      } else {
        var mulligan = false;
        var fP = 0; // first Pointer
        var sP = 0; // second Pointer
        while (fP < first.length) {
          // logic used when the character being read is not equal
          if (first[fP] !== second[sP]) {
            // if one exception has already been used, then return false
            if (mulligan) {
              return false;
            } else {
              // sets mulligan to true (makes one exception) 
              // then counts up to make the second length longer
              mulligan = true;
              sP++; // second length is longer
            }
            // logic below is used until it finds letters that are not equal
          } else {
            fP++;
            sP++;
            console.log(sP)
          }
        }
        return true;
      }
    };
    
    var checkOneDiff = function(first, second) {
      // ensures that the lengths are equal before continuing the function
      if (first.length !== second.length) {
        return false;
      } else {
        var mulligan = false;
        var fP = 0; // first Pointer
        var sP = 0; // second Pointer
        while (fP < first.length) {
          if (first[fP] !== second[sP]) {
            if (mulligan) {
              return false; // more than one mismatch
            } else {
              mulligan = true; // use up mulligan
            }
          }
          fP++;
          sP++;
        }
        return true;
      }
    };
    // insert a char for str1 -> remove a char for str2
    // check one diff
  
    return checkOneMissing(string1, string2) || checkOneMissing(string2, string1) || checkOneDiff(string1, string2);
  };
  
  
  // Test
  console.log(oneAway('pale', 'ple'));
  console.log(oneAway('pales', 'pale'));
  console.log(oneAway('pale', 'bale'));
  console.log(oneAway('pale', 'bake'));
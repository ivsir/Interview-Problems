const rotate = (matrix) => {
  console.log(matrix.length);
    console.log(matrix)
  console.log(matrix[0])
  console.log(matrix[0].length);
// matrix.length refers to the number of row arrays in the matrix or the height
// matrix.length[0] refers to the number of items in the row or the length
  if (matrix.length == 0 || matrix.length != matrix[0].length) {
    return false;
  }

  var n = matrix.length;
// divide by 2 because the matrix is 2 dimensional
// n/2 represents the end of the matrix
// layer is representative of a matrix divided into 2 sides
// allows us to evalute both sides of the matrix
  for (var layer = 0; layer < n / 2; layer++) {
    var first = layer;
    var last = n - 1 - layer;
    for (var i = first; i < last; i++) {
      var offset = i - first;

      var top = matrix[first][i]; //save top

      //left-> top
      matrix[first][i] = matrix[last - offset][first];

      //bottom->left
      matrix[last - offset][first] = matrix[last][last - offset];

      // right->bottom
      matrix[last][last - offset] = matrix[i][last];

      // top->right
      matrix[i][last] = top; //right <-saved top
    }
  }
  return true;
};

console.log(rotate(Array(9).fill(Array(9))));
console.log(rotate(Array(9).fill(Array(8))));

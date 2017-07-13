/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var matrix = zeroMatrix(n);

  for(var i = 0; i < n; i++){
    matrix[i][i] = 1;
  }

  return matrix;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var matrix = zeroMatrix(n);

  for(var i = 0; i < n - 1; i++) {
    var decisionTree = [];
    decisionTree.push([new rookNode]);
    for(var i = 1; i < n; i++){

    }
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

var zeroMatrix = function(n) {
  var matrix = [];
  var row = [];

  for(var i = 0; i < n; i++) {
    row.push(0);
  }

  for(var i = 0; i < n; i++) {
    matrix.push(row.slice());
  }

  return matrix;

}

var rookNode = function(){
  this.children = [];
}

var hasColConflictAt = function(n, matrix, colIndex) {
      var seen = false;

      var colArray = [];
      for(var i = 0; i < n; i++){
        colArray.push(matrix[i][colIndex]);
      }

      for(var i = 0; i < colArray.length; i++) {
        if(colArray[i] === 1) {
          if(seen){
            return true;
          } else {
            seen = true;
          }
        }
      }

      return false;
    }

    // test if any columns on this board contain conflicts
var hasAnyColConflicts = function(n, matrix) {
  var hasConflict = false;

  for(var i = 0; i < n; i++){
    hasConflict = hasConflict || hasColConflictAt(n, matrix, i);
  }

  return hasConflict;
}

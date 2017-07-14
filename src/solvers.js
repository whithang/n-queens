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
  var matrix = new Board({n: n});
  var arrayOfArrays = [];

  for(var i = 0; i < n; i++){
    matrix.attributes[i][i] = 1;
    arrayOfArrays.push(matrix.attributes[i]);
  }

  return arrayOfArrays;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var matrix = zeroMatrix(n);

  // for(var i = 0; i < n - 1; i++) {
  //   var decisionTree = [];
  //   decisionTree.push([new rookNode]);
  //   for(var i = 1; i < n; i++){

  //   }
  // }
  var solutionCount = 0;
  var matrix = new Board({n: n});
  var rookAdded = 0;
  var combinationArray = [];

  var generateCombination = function(width){
    var rowArr = [];
    var index = width;
    for(var i = 0; i < n; i++) {
      rowArr.push(0);
    }

    rowArr[index] = 1;
    combinationArray.push(rowArr.slice());
    if(width + 1 !== n){
      generateCombination(width + 1);
    }
  }

  generateCombination(0);

  var root = new rookNode();

  var createTree = function(depth, node){
    for(var i = 0; i < n; i++){
      var child = new rookNode();
      child.data = combinationArray[i]
      node.children.push(child);
    }
    //node.children = combinationArray.slice();

    if(depth + 1 !== n){
      for(var i = 0; i < n; i++){
        createTree(depth + 1, node.children[i]);
      }
    }
  }

  createTree(0, root);
  //console.log('testing');

  var container = [];
  var createBoardAndSolutions = function(node, depth, matrix){
    if(depth === n){
      container.push(matrix);
    } else {

    matrix.push(node.data);

    for(var i = 0; i < n; i++){
      createBoardAndSolutions(node.children[i], depth + 1, matrix.slice());
    }
  }

    // for(var i = 0; i < node.data.length; i++) {
    //   if(node.data[i] === 1) {
    //     matrix[depth][i] = 1;
    //   }
    // }

    // if(depth + 1 !== n){
    //   for(var i = 0; i < n; i++){
    //     createBoardAndSolutions(node.children[i], depth + 1, matrix.slice());
    //   }
    // } else {
    //   var board = new Board(matrix);
    //   if(!board.hasAnyRooksConflicts()) {
    //     solutionCount++;
    //   }
    //   // console.log(JSON.stringify(matrix));

    // }
  }

  var theMatrix = [];
  var matrixRow = [];

  for(var i = 0; i < n; i++){
    matrixRow[i] = 0;
  };
  for(var i = 0; i < n; i++){
    theMatrix[i] = matrixRow.slice();
  }

  for(var i = 0; i < root.children.length; i++){
    createBoardAndSolutions(root.children[i], 0, []);
  }

  for(var i = 0; i < container.length; i++){
    var board = new Board(container[i]);
    if(!board.hasAnyRooksConflicts()) {
      solutionCount++;
    }
  }

  console.log(solutionCount);

  return solutionCount / n;


};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  if(n === 0) {
    return 1;
  }
  // if(n === 3) {
  //   return 0;
  // }

  var solutionCount = 0;
  var matrix = new Board({n: n});
  var rookAdded = 0;
  var combinationArray = [];

  var generateCombination = function(width){
    var rowArr = [];
    var index = width;
    for(var i = 0; i < n; i++) {
      rowArr.push(0);
    }

    rowArr[index] = 1;
    combinationArray.push(rowArr.slice());
    if(width + 1 < n){
      generateCombination(width + 1);
    }
  }

  generateCombination(0);

  var root = new rookNode();

  var createTree = function(depth, node){
    for(var i = 0; i < n; i++){
      var child = new rookNode();
      child.data = combinationArray[i]
      node.children.push(child);
    }

    if(depth + 1 !== n){
      for(var i = 0; i < n; i++){
        createTree(depth + 1, node.children[i]);
      }
    }
  }

  createTree(0, root);

  var container = [];
  var createBoardAndSolutions = function(node, depth, matrix){
    if(depth === n){
      container.push(matrix);
    } else {

      matrix.push(node.data);

      for(var i = 0; i < n; i++){
        createBoardAndSolutions(node.children[i], depth + 1, matrix.slice());
      }
    }

  }
  var theMatrix = [];
  var matrixRow = [];

  for(var i = 0; i < n; i++){
    matrixRow[i] = 0;
  };
  for(var i = 0; i < n; i++){
    theMatrix[i] = matrixRow.slice();
  }

  for(var i = 0; i < root.children.length; i++){
    createBoardAndSolutions(root.children[i], 0, []);
  }
  console.log(n);
  for(var i = 0; i < container.length; i++){
    var board = new Board(container[i]);
    if(!board.hasAnyQueensConflicts()) {
      console.log(container[i])
      solutionCount++;
    }
  }

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);


  return solutionCount / n;


};

// var zeroMatrix = function(n) {
//   var matrix = [];
//   var row = [];

//   for(var i = 0; i < n; i++) {
//     row.push(0);
//   }

//   for(var i = 0; i < n; i++) {
//     matrix.push(row.slice()); // why slice?
//   }

//   return matrix;

// }

var rookNode = function(){
  this.data = null;
  this.children = [];
}


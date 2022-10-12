function searchMatrix(matrix: number[][], target: number): boolean {
    
    let l = 0, r = matrix.length - 1;
    let row = 0;

    while (l <= r) {
      let mid = l + Math.floor((r - l) / 2);

      if (target > matrix[mid][matrix[mid].length - 1]) {
        l = mid + 1;
      } else if (target < matrix[mid][0]) {
        r = mid - 1;
      } else {
        row = mid;
        break;
      }
    }

    if (l > r) return false;

    l = 0, r = matrix[row].length - 1;

    while( l <= r ) {
      let mid = l + Math.floor((r - l) / 2);

      if (matrix[row][mid] < target) {
        l = mid + 1;
      } else if (matrix[row][mid] > target) {
        r = mid - 1;
      } else {
        return true;
      }
    }

    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 30));
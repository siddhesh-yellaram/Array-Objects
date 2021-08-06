function TotalSum(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

function TotalAvg(arr) {
    var res = TotalSum(arr) / arr.length;
    return res;
}

function MinMax(arr) {
    var min = arr[0], max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        min = (arr[i] < min) ? arr[i] : min;
        max = (arr[i] > max) ? arr[i] : max;
    }
    return [min, max];
}

var CGPA = new Array(8.74, 8.5, 8.81, 8.9, 9.2);
console.log("Sum of all cgpa: " + TotalSum(CGPA));
console.log("Average of all cgpa: " + TotalAvg(CGPA));
var MinAndMax = MinMax(CGPA);
console.log("Min element of all cgpa: " + MinAndMax[0] + " & Max element of all cgpa: " + MinAndMax[1]);

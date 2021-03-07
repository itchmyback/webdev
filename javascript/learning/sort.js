function sorter(inputArr) {
//  inputArr.sort(function(a, b){return a - b});
console.log(inputArr);
inputArr.sort();
console.log(inputArr);
inputArr.sort(function(a, b){return a - b});
console.log(inputArr);
}

sorter([10, 9, 8, 2]);

sorter([69,-1,43,-22,0]);
let mixedArray = [3,13,74,14,66,15,22,4];

let result = mixedArray.filter(function(elem) {
    if (elem % 2 == 0) {
        return true;
    } else{
        return false;
    }
});

console.log(result);
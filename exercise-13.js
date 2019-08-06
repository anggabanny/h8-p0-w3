function targetTerdekat(arr) {
    var targetO = 0;
    var targetX = [];

    for(var i = 0; i < arr.length; i++){
        if (arr[i] == 'o') {
            targetO = i
        } else if (arr[i] == 'x'){
            targetX.push(i);
        }
    }
    
    if (targetX.length == 0) {
        return 0
    } else {
        if (targetX[0] > targetO) {
            return targetX[0] - targetO
        } else {
            return targetO - targetX[targetX.length-1]
        }
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

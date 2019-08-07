function pasanganTerbesar(num) {
    var newNum = num.toString();
    var numMax = 0;

    for(var i = 0; i < newNum.length; i++){
        var checkNum = newNum[i] + newNum[i+1];
        if (checkNum > numMax) {
            numMax = checkNum
        }
    }
    return Number(numMax);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

function hitungJumlahKata(kalimat) {
    if (kalimat == '') {
        return 0
    }

    var num = 0;
    for(var k = kalimat.length-1; k > 0; k--){
        if (kalimat[k] != ' ') {
            break;
        } else {
            num++
        }
        console.log(kalimat[k]);
    }
    
    var temp = [];
    for(var i = 0; i < kalimat.length-num; i++){
        if ((kalimat[i] != ' ' && kalimat[i+1] == ' ')){
            temp.push(kalimat[i])
        }
    }

    if (kalimat[kalimat.length-1] == ' ') {
        return temp.length
    } else if (kalimat[kalimat.length-1] != ' ') {
        return temp.length + 1
    }
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6 
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
function groupAnimals(animals) {
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var temp1 = [];
    for(var i = 0; i < alphabet.length; i++){
        var temp=[];
        for(var j = 0; j < animals.length; j++){
            if (animals[j][0] == alphabet[i]) {
                temp.push(animals[j]);
            }
        }
        if (temp != '') {
            temp1.push(temp)
        }
    }
    return temp1
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

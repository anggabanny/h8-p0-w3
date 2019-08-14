function groupAnimals(animals) {
    var temp = [
        []
    ];
    var indeks = 0;
    animals.sort();
    temp[0].push(animals[0]);
    for (var i = 1; i < animals.length; i++) {
        if (animals[i][0] === temp[indeks][0][0]) {
            temp[indeks].unshift(animals[i]);
        } else {
            indeks++;
            temp[indeks] = [animals[i]];
        }
    }
    temp[1].sort()
    return temp;
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

function groupAnimals(animals) {
    var tempAnimals = [
        []
    ];
    var indeks = 0;
    animals.sort();
    tempAnimals[0].push(animals[0]);
    for (var i = 1; i < animals.length; i++) {
        if (animals[i][0] === tempAnimals[indeks][0][0]) {
            tempAnimals[indeks].unshift(animals[i]);
        } else {
            indeks++;
            tempAnimals[indeks] = [animals[i]];
        }
    }
    return tempAnimals;
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
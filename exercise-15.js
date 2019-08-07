function groupAnimals(animals) {
    // var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    // var temp1 = [];
    // for(var i = 0; i < alphabet.length; i++){
    //     var temp=[];
    //     for(var j = 0; j < animals.length; j++){
    //         if (animals[j][0] == alphabet[i]) {
    //             temp.push(animals[j]);
    //         }
    //     }
    //     if (temp != '') {
    //         temp1.push(temp)
    //     }
    // }
    // return temp1
    
    
    var indeks = 0;
    var temp = [];

    for( var i = 0 ; i <= animals.length -1; i++){
        
        if(temp == 0){
            temp.push([animals[i]])
        } else if (temp[indeks][0][0] === animals[i][0]){
            temp[indeks].push(animals[i])
        } else  {
            temp.push([animals[i]])
            indeks++
        }
    }
    return temp
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

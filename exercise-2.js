function balikString(value){
    var temp = '';
    for(var i = value.length-1 ; i >=0 ; i--){
        temp+=value[i];
    }
    return temp
}
console.log(balikString('hello world!'));
console.log(balikString('hacktiv8'));
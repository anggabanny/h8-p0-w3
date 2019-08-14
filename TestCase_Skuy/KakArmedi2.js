/*
    =======================
    Alphabet Multidimension
    =======================
​
    Buatlah sebuah function yang berfungsi mengenerate Alphabet Multidimension. 
    yang artinya di dalam array multidimension terdapat alphabet yang isinya 
    berurutan. dimana Array multidimension nya memiliki row dan col yang sama
    
    [EXAMPLE]
    alphabetMultidimension(6)
​
    maka output nya adalah : 
​
    [
        [A,B,C,D,E,F],
        [G,H,I,J,K,L],
        [M,N,O,P,Q,R],
        [S,T,U,V,W,X],
        [Y,Z,A,B,C,D], <--- perhatikan, jika sudah sampai z maka , kembali lagi ke A
        [E,F,G,H,I,J]
    ]
*/

function alphabetMultidimension(size) {
    var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var output = [];
    var count = 0;
    for(var i = 0; i < size; i++){
        var temp = [];
        for(var j = 0; j < size; j++){
            if (count > 25) {
                count = 0;
            }
            temp.push(alphabet[count])
            count++
        }
        output.push(temp)
    }
    return output
    
}

console.log(alphabetMultidimension(3));
/*
output:
[
  [A, B, C],
  [D, E, F],
  [G, H, I]
]
*/

console.log(alphabetMultidimension(6))
/*
output:
[
  [A,B,C,D,E,F],
  [G,H,I,J,K,L],
  [M,N,O,P,Q,R],
  [S,T,U,V,W,X],
  [Y,Z,A,B,C,D],
  [E,F,G,H,I,J]
]
*/
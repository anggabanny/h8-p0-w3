/* 
===============
Number Triangle
===============

Instruction:
Buatlah sebuah proses untuk membuat deret angka yang membentuk segitiga seperti contoh berikut.

Contoh 1 (height = 5):
Output:
12345
2345
345
45
5

Contoh 2 (height = 3):
Output:
123
23
3

Contoh 3 (height = 1):
Output:
1
 */

function deretAngka(height){
    for(i = 1; i <= height; i++){
        var temp = '';
        for(j = i; j <= height; j++){
            temp+=j
        }
        console.log(temp);
    }
}

deretAngka(5);
// deretAngka(3);
// deretAngka(1);
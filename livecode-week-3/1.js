/* 
==============
Bilangan Prima
==============

Bilangan prima merupakan bilangan yang hanya habis dibagi oleh angka 1 dan angka itu sendiri.
Buat algoritma DAN pseudocode untuk mengecek apakah sebuah angka merupakan angka prima atau bukan.
 */

// Tulis algoritma di sini
1. buat 'angka' dengan nilai angka bebas
2. jika 'angka' lebih besar dari 1, masuk ke langkah 3, jika tidak tampilkan false
3. jika 'angka' sama dengan 2, atau jika 'angka' sama dengan 3, maka tampilkan true
4. jika 'angka' di modulus 2 tidak sama dengan 0, dan jika angka di modulus 3 tidak sama dengan 0, dan 'angka' modulus 'angka' sama dengan 0, tampilkan true, jika tidak memenuhi tampilkan false

// Tulis pseudocode di sini
STORE 'angka' with any value
IF 'angka' more than 1, go to next step, if not DISPLAY false
    IF 'angka' equal to 2, OR 'angka' equal to 3 DISPLAY true
    ELSE IF 'angka' MOD 2 no equal to 0 AND 'angka' MOD 3 no equal to 0 AND 'angka' MOD 'angka' equal to 0
        DISPLAY true
    ELSE
        DISPLAY false

// CODE
// var angka = 0;

// if (angka > 1) {
//     if (angka == 2 || angka == 3) {
//         console.log(true);
//     } else if (angka % 2 != 0 && angka % 3 != 0 && angka % angka == 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// } else {
//     console.log(false);
// }

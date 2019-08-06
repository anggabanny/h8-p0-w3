/* 

Sebuah wahana permainan mengenakan tarif Rp15.000 untuk satu kali bermain.
Selain itu juga disyaratkan pengunjung berusia minimal 7 tahun dan tinggi badan minimal 125 cm.
Khusus untuk anak dibawah usia 10 tahun wajib didampingi oleh orang dewasa.

INSTRUCTIONS
1. Jika uang tidak cukup, tampilkan "Maaf, uang kamu tidak cukup".
   Jika uang cukup, maka lanjut ke step berikutnya.
2. Jika usia pengunjung kurang dari 7 tahun atau tinggi badan kurang dari 125, tampilkan
   "Kamu belum diperbolehkan menaiki wahana ini".
   Jika tidak, maka lanjut ke step berikutnya
3. Jika pengunjung berusia dibawah 10 tahun dan tidak didampingi oleh orang dewasa, tampilkan
   "Kamu harus ditemani oleh orang dewasa untuk menaiki wahana ini"
   Jika tidak, maka tampilkan "Selamat menikmati wahana ini"

*/

var money = 16000; // silahkan beri nilai  15000
var age  = 9;// silahkan beri nilai 7
var height = 128;// silahkan beri nilai 125
var accompaniedByAdult = true; // silahkan beri nilai

if (money < 15000) {
    console.log("Maaf, uang kamu tidak cukup");
} else if(age < 7 || height < 125){
    console.log("Kamu belum diperbolehkan menaiki wahana ini");
} else if(age < 10 && accompaniedByAdult == false){
    console.log("Kamu harus ditemani oleh orang dewasa untuk menaiki wahana ini");
} else {
    console.log("Selamat menikmati wahana ini");
}
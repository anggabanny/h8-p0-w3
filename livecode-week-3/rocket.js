/* 

Terdapat 31 hari pada bulan agustus 2019 dengan jumlah minggu sebanyak 5 minggu.
- Tanggal 1 dimulai pada hari kamis, yang juga awal dari minggu pertama di bulan agustus.
- Minggu ke 2 dimulai tanggal 4
- Minggu ke 3 dimulai tanggal 11
- Minggu ke 4 dimulai tanggal 18
- Minggu ke 5 dimulai tanggal 25
Pada bulan agustus ada 2 tanggal merah yaitu tanggal 11 dan 17.
Pada weekdays dan bukan tanggal merah, maka semua karyawan akan masuk bekerja, sedangkan pada weekend dan tanggal merah adalah hari libur.

Buatlah function infoAgustus yang akan menentukan apakah hari pada minggu yang diinput adalah hari libur atau tidak pada bulan agustus ini.

NOTES:
  - Output harus PERSIS sesuai dengan yang dicontohkan.

contoh 1: infoAgustus('Sunday', 3)
INPUT:
  day: 'Sunday'
  week: 3
PROCESS:
  Sunday (Minggu) pada week 3 adalah weekend dan jatuh pada tanggal 11, yang merupakan tanggal merah.
  Jadi hari tersebut adalah hari libur
OUTPUT:
  'Hari Minggu, 11 Agustus 2019 adalah hari libur weekend dan juga tanggal merah '


contoh 2: infoAgustus('Rabu', 4)
INPUT:
  day: 'Rabu'
  week: 4
PROCESS:
  Hari Rabu pada week 4 adalah weekday dan jatuh pada tanggal 21 yang bukan merupakan tanggal merah.
  Jadi hari tersebut bukan hari libur
OUTPUT:
  Hari Rabu, 21 Agustus 2019 bukan hari libur


contoh 3: infoAgustus('Minggu', 5)
INPUT:
  day: 'Minggu'
  week: 5
PROCESS:
  Hari Minggu pada week 5 adalah weekend dan jatuh pada tanggal 25.
  Jadi hari tersebut adalah hari libur
OUTPUT:
  Hari Minggu, 25 Agustus 2019 adalah hari libur weekend


contoh 4: infoAgustus('Sabtu', 3)
INPUT:
  day: 'Sabtu'
  week: 3
PROCESS:
  Hari Sabtu pada week 3 adalah weekend dan jatuh pada tanggal 17 yang juga tanggal merah.
  Jadi hari tersebut adalah hari libur
OUTPUT:
  Hari Sabtu, 17 Agustus 2019 adalah hari libur weekend dan juga tanggal merah


contoh 5: infoAgustus('Senin', 6))
INPUT:
  day: 'Senin'
  week: 6
PROCESS:
  Di bulan agustus hanya ada 5 minggu
OUTPUT:
  Input minggu harus dalam range 1 - 5


contoh 6: infoAgustus('Kliwon', 1)
INPUT:
  day: 'Kliwon'
  week: 1
PROCESS:
  Hari Kliwon tidak ada dalam bahasa Indonesia atau Inggris
OUTPUT:
  Input hari harus dalam bahasa Indonesia atau Inggris yang benar
*/

function infoAgustus(day, week){
  var tanggal = 0;
  var bulan = 'agustus';
  var tahun = 2019;
    if (week == 1) {
      if(day == 'Kamis'){
        tanggal = 1;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Jumat'){
        tanggal = 2;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Sabtu'){
        tanggal = 3;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' adalah hari libur weekend';
      } else {
        return 'Input hari harus dalam bahasa Indonesia atau Inggris yang benar';
      }
    } else if (week == 2) {
      if(day = 'Minggu'){
        tanggal = 4;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' adalah hari libur weekend';
      } else if (day == 'Senin'){
        tanggal = 5;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Selasa'){
        tanggal = 6;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Rabu'){
        tanggal = 7;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Kamis'){
        tanggal = 8;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Jumat'){
        tanggal = 9;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Sabtu'){
        tanggal = 10;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' adalah hari libur weekend';
      } else {
        return 'Input hari harus dalam bahasa Indonesia atau Inggris yang benar';
      }
    } else if (week == 3) {
      if(day == 'Minggu'){
        tanggal = 11;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' adalah hari libur weekend dan juga tanggal merah'
      } else if (day == 'Senin'){
        tanggal = 12;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Selasa'){
        tanggal = 13;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Rabu'){
        tanggal = 14;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Kamis' || day == 'Thursday'){
        tanggal = 15;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Jumat'){
        tanggal = 16;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Sabtu'){
        tanggal = 17;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' adalah hari libur weekend dan juga tanggal merah'
      } else {
        return 'Input hari harus dalam bahasa Indonesia atau Inggris yang benar';
      }
    } else if (week == 4) {
      if(day == 'Minggu'){
        tanggal = 18;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' adalah hari libur weekend';
      } else if (day == 'Senin'){
        tanggal = 19;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Selasa'){
        tanggal = 20;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Rabu'){
        tanggal = 21;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Kamis'){
        tanggal = 22;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Jumat'){
        tanggal = 23;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Sabtu'){
        tanggal = 24;
      } else {
        return 'Input hari harus dalam bahasa Indonesia atau Inggris yang benar';
      }
    }  else if (week == 5) {
      if(day == 'Minggu'){
        tanggal = 25;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' adalah hari libur weekend';
      } else if (day == 'Senin'){
        tanggal = 26;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Selasa'){
        tanggal = 27;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Rabu'){
        tanggal = 28;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Kamis'){
        tanggal = 29;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Jumat'){
        tanggal = 30;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' bukan hari libur';
      } else if (day == 'Sabtu'){
        tanggal = 31;
        return 'Hari '+ day + ', '+tanggal+' '+bulan+' '+tahun+' adalah hari libur weekend';
      } else {
        return 'Input hari harus dalam bahasa Indonesia atau Inggris yang benar';
      }
  }  else if(week < 1 || week > 5){
    return 'range 1 - 5'
  }
}



console.log(infoAgustus('Rabu', 4)) // Hari Rabu, 21 Agustus 2019 bukan hari libur
console.log(infoAgustus('Sunday', 3)) // Hari Minggu, 11 Agustus 2019 adalah hari libur weekend dan juga tanggal merah 
console.log(infoAgustus('Sabtu', 3)) // Hari Sabtu, 17 Agustus 2019 adalah hari libur weekend dan juga tanggal merah 
console.log(infoAgustus('Minggu', 5)) // Hari Minggu, 25 Agustus 2019 adalah hari libur weekend
console.log(infoAgustus('Thursday', 3)) // Hari Kamis, 15 Agustus 2019 bukan hari libur
console.log(infoAgustus('Minggu', 0)) // Input minggu harus dalam range 1 - 5
console.log(infoAgustus('Senin', 6)) // Input minggu harus dalam range 1 - 5
console.log(infoAgustus('Kliwon', 1)) // Input hari harus dalam bahasa Indonesia atau Inggris yang benar
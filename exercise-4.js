var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arr){
    // SPLICE (INGIN MULAI DARI INDEX KEBERAPA?, HAPUS INDEX DARI INDEX YANG DI MULAI, TAMBAHKAN INDEX BERIKUTNYA)
    arr.splice(1,1, arr[1] +" Elsharawy");
    arr.splice(2,1, 'Provinsi ' + arr[2]);
    arr.splice(4,1, 'Pria' , 'SMA Internasional Metro');
    console.log(arr);
    // ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

    // SPLIT(PISAHKAN DENGAN OPERATOR YANG TERDAPAT PADA INDEX TERSEBUT)
    var tanggal = arr[3].split('/');
    var bulan = tanggal[1];
    switch(bulan){
        case '01' : { console.log('Januari'); break;}
        case '02' : { console.log('Februari'); break;}
        case '03' : { console.log('Maret'); break;}
        case '04' : { console.log('April'); break;}
        case '05' : { console.log('Mei'); break;}
        case '06' : { console.log('Juni'); break;}
        case '07' : { console.log('Juli'); break;}
        case '08' : { console.log('Agustus'); break;}
        case '09' : { console.log('September'); break;}
        case '10' : { console.log('Oktober'); break;}
        case '11' : { console.log('November'); break;}
        case '12' : { console.log('Desember'); break;}
        default : {console.log('bulan invalid'); break;}
    }
    
    // SORT(FUNGSI PARAMETER A DAN B, PANGGIL A KE B ATAU B KE A)
    var tanggalSort = arr[3].split('/');
    var sortDescending = tanggalSort.sort(function(a,b){ return b - a}) 
    console.log(sortDescending);
    
    // // JOIN(GABUNGKAN DENGAN PARAMETER YANG DIPILIH)
    var tanggalJoin = arr[3].split('/');
    var joinTanggal = tanggalJoin.join('-')
    console.log(joinTanggal);

    // // SLICE(MEMOTONG DARI INDEX YG DIPILIH, KE INDEX YANG DI AKHIRI)
    var slice = arr[1].slice(0,15);
    console.log(slice);
}

dataHandling2(input)

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
]

function dataHandling(arr) {
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            if (j == 0) {
                console.log('Nomor ID:', arr[i][j]);
            } else if (j == 1){
                console.log('Nama Lengkap:', arr[i][j]);
            } else if (j == 2){
                console.log('TTL:', arr[i][j] , arr[i][j+1]);
            } else if (j == 4) {
                console.log('Hobi:', arr[i][j]);
            }
        }
        if (i !== arr.length-1) {
            console.log('');
        }
    }
}
dataHandling(input);
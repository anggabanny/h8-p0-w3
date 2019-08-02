function angkaPalindrome(num) {
    if (num <=10) {
        var num1 = 0;
        while(num1 <= 10){
            if(num == num1){
                return num + 1;
            } else if (num != num1){
                num1++;
            }
        }
    } else if (num > 10){
        while(true){
            num = num + 1
            var num2 = String(num);
            var numTemp = '';
            for(i = num2.length-1; i >=0; i--){
                numTemp+=num2[i];
            }

            if (num2 == numTemp){
                return Number(numTemp);
            }
        }
    }
}
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
  var jumlahX = 0
  var jumlahO = 0
  for (var i = 0; i < str.length; i++) {
    if (str[i] == 'x') {
      jumlahX += 1
    } else {
      jumlahO += 1
    }
  }

  if (jumlahO == jumlahX) {
    return true
  } else {
    return false
  }
}

// function xo (str) {

// 	if (str.split('o').length !== str.split('x').length) {
//   		return false;
// 	} else {
//   	return true;
//   	}
// }

// function xo(str) {
//   var countX = 0
//   var countO = 0

//   for(var i=0; i<=str.length-1; i++){
//     if(str[i]=='x'){
//       countX++
//     }else{
//       countO++
//     }
//   }
//   if(countO==countX){
//     return true
//   }else{
//     return false
//   }
// }


// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

/*
1. dilihat dulu bentuk dr pada hasil (apakah string,number atau boolean), lanjut ke step 2..
2. membuat variabel untuk menampung hasil, lanjut ke step 3..
3. looping untuk mencari jumlah x dan o, lanjut ke step 4..
4. buat pengkondisian untuk mengecek apakah true atau false..
*/
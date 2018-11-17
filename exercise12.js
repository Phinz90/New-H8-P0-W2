/*
Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. Contoh, jika menit adalah 63, maka function akan me-return "1:03".
*/

function konversiMenit(menit) {
    // you can only write your code here!

	var sisaMenit = menit % 60
	var jam = (menit - sisaMenit) / 60
    if (sisaMenit < 10) {
    	return jam + ':0' + sisaMenit
    } else {
     	return jam + ':' + sisaMenit
    }
}

// var mins = menit % 60;
// var hrs = (menit - mins) /60
//   if (mins < 10) {
//     return hrs + ":" + "0" + mins
//   } else {
//     return hrs +":"+ mins
//   }
// }


// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
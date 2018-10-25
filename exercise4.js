/*
Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

Gunakan switch case untuk kasus ini!

Contoh:

var hari = 21; var bulan = 1; var tahun = 1945;

Maka hasil yang akan tampil di console adalah: '21 Januari 1945';
*/

 
// assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var tanggal = 28 ;
// assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var bulan = 5;
// assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var tahun = 1990;


if (tanggal < 1 || tanggal > 31) {
	console.log ('Tanggal tidak tersedia.')
} else if (bulan < 1 || bulan > 12) {
	console.log ('Bulan tidak tersedia.')
} else if (tahun < 1900 || tahun > 2200) {
	console.log ('Tahun tidak tersedia.')
} else {

	switch(bulan) {
	  case 1: { bulan = ' Januari '; break; }
	  case 2: { bulan = ' Februari '; break; }
	  case 3: { bulan = ' Maret '; break; }
	  case 4: { bulan = ' April '; break; }
	  case 5: { bulan =  'Mei' ; break; }
	  case 6: { bulan = ' Juni '; break; }  
	  case 7: { bulan = ' Juli '; break; }
	  case 8: { bulan = ' Agustus '; break; }
	  case 9: { bulan = ' September '; break; }
	  case 10: { bulan = ' Oktober '; break; }
	  case 11: { bulan = ' November '; break; }
	  case 12: { bulan = ' Desember '; break; }
	  default: {
	    		tanggal = 'Bulan tidak tersedia'
	    		bulan = ''
	    		tahun = ''
	 } 
  	}
}

console.log (tanggal+' ' + bulan+' ' + tahun )





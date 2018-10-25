console.log('---------------Soal ke-1---------------')

var orang = 0;
while (orang < 20) {
	orang = orang + 2;
	console.log (orang + ' - Yoyo loves coding');
}
var orang = 22
while (orang > 2){
  orang = orang - 2;
  console.log (orang + ' - Yoyo will become fullstack developer');
}

/*
LOOPING PERTAMA
2 - I love coding
4 - I love coding
6 - I love coding
8 - I love coding
10 - I love coding
12 - I love coding
14 - I love coding
16 - I love coding
18 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become fullstack developer
18 - I will become fullstack developer                                                                              
16 - I will become fullstack developer
14 - I will become fullstack developer
12 - I will become fullstack developer
10 - I will become fullstack developer
8 - I will become fullstack developer
6 - I will become fullstack developer
4 - I will become fullstack developer
2 - I will become fullstack developer
*/

console.log('---------------Soal ke-2---------------')

var batasMax = 20
for(var orang = 1 ; orang <= batasMax; orang++) {
	console.log(orang + ' - Yoyo loves coding')
}
var batasMin = 1
for(var orang = 20; orang >= batasMin; orang--) {
	console.log(orang + ' - Yoyo will become fullstack developer')
}

/*
LOOPING PERTAMA
1 - I love coding
2 - I love coding
3 - I love coding
4 - I love coding
5 - I love coding 
6 - I love coding
7 - I love coding
8 - I love coding
9 - I love coding
10 - I love coding
11 - I love coding
12 - I love coding 
13 - I love coding
14 - I love coding
15 - I love coding
16 - I love coding
17 - I love coding
18 - I love coding
19 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become fullstack developer
19 - I will become fullstack developer
18 - I will become fullstack developer
17 - I will become fullstack developer
16 - I will become fullstack developer
15 - I will become fullstack developer
14 - I will become fullstack developer
13 - I will become fullstack developer
12 - I will become fullstack developer
11 - I will become fullstack developer
10 - I will become fullstack developer
9 - I will become fullstack developer
8 - I will become fullstack developer
7 - I will become fullstack developer
6 - I will become fullstack developer
5 - I will become fullstack developer
4 - I will become fullstack developer
3 - I will become fullstack developer
2 - I will become fullstack developer
1 - I will become fullstack developer
*/

console.log ('---------------Soal ke-3---------------')


//contoh - ganjil genap
//counter sekarang = 1,
//output
//"GANJIL"
//counter sekarang = 2,
//output
//"GENAP"
// dan seterusnya :)

var max = 100
for (var numb = 1; numb <= max; numb++) {
	if ( numb % 2 === 0) {
		console.log(numb + ' adalah angka GENAP')
	} else if ( numb % 1 === 0 ) {
		console.log(numb + ' adalah angka GANJIL')
	}
}


//contoh - untuk pertambahan counter 2
//counter sekarang = 1, 
//output
//"" 
//counter sekarang = 3, 
//output
//"3 KELIPATAN 3" 
// dan seterusnya :)

var max = 100
for ( var numb = 1; numb <= max; numb += 2) {
  if(numb % 3 === 0){
    console.log ( numb + ' Kelipatan 3')
  } else {
  console.log ('')
	}
}

var max = 100
for ( var numb = 1; numb <= max; numb += 5) {
  if(numb % 3 === 0){
    console.log ( numb + ' Kelipatan 3')
  }else 
  console.log ('')
}

var max = 100
for ( var numb = 1; numb <= 100; numb += 9) {
  if(numb % 3 === 0){
    console.log ( numb + ' Kelipatan 3')
  }else 
  console.log ('')
}


//contoh - untuk pertambahan counter 5
//counter sekarang = 1, 
//output
//"" 
//counter sekarang = 6, 
//output
//"6 KELIPATAN 6" 
// dan seterusnya :)



//contoh - untuk pertambahan counter 9
//counter sekarang = 1, 
//output
//"" 
//counter sekarang = 10, 
//output
//"10 KELIPATAN 10" 
// dan seterusnya :)




























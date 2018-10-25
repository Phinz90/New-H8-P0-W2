console.log('----------Soal ke-1----------')

var rows1 = 5
for ( var i= 0; i <= rows1; i++){
	console.log('*')	
}



console.log('----------Soal ke-2----------')
/*
Output:
		***** 01234
		***** 01234
		***** 01234
		***** 01234

*/
var bintang =''
var rows2 = 5
for (var i = 0; i < rows2; i++) {
	bintang += '*'
}
for (var j= 0; j< rows2; j++) {
	console.log(bintang)	
}



console.log('----------Soal ke-3----------')
/*
Output:
		*		0
		**		01
		***		012
		****	0123
		*****	01234

*/
var bintang =''
var rows3 = 5
for (var i = 0; i < rows3; i++) {
	for (var j= 0; j <=a i; j++) {
	bintang += '*'
	}

	bintang += '\n'
}
console.log(bintang)



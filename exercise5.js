/*String
Soal latihan string ini memiliki 4 nomor. Simpan di 1 file yang sama!

1. Let's Form a Sentence
Problem
Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +. Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

Skeleton Code
*/
console.log ('------------soal ke-1-------------')

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word +' ' + second +' '+ third+' ' +fourth+' ' +fifth +' '+ sixth+' ' + seventh)
// Output
// JavaScript is awesome and I love it!

/*
2. Index Accessing - 1 by 1
Problem
Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya. Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata. Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

Hints
Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata tersebut!

Skeleton Code
*/
console.log('------------soal ke-2------------')

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
var thirdWord = word[15] + word[16];
var fourthWord = word[18] + word[19];
var fifthWord = word[21] + word[22]+ word[23] + word[24]

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// Output
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool

/*
3. Breaking Sentence (Again) using Substring
Problem
Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

Skeleton Code
*/
console.log('------------soal ke-3------------')

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14);
var thirdWord3 = word3.substring(15, 17);
var fourthWord3 = word3.substring(18, 20);
var fifthWord3 = word3.substring(21, 25);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);

// Output
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool

/*
4. Breaking Sentence (yet Again) and Count Each Length
Problem
Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

Skeleton Code
Buatlah variable-variable baru untuk menyimpan panjang string, dan ubah console dibawah untuk menampilkan nya.
*/
console.log('------------soal ke 4------------')

var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4, 14); 
var thirdWord4 = word4.substring(15, 17); 
var fourthWord4 = word4.substring(18, 20); 
var fifthWord4 = word4.substring(21, 25); 

var firstWord4Length = exampleFirstWord4.length;
var secondWord4Length = secondWord4.length;
var thirdWord4Length = thirdWord4.length;
var fourthWord4Length = fourthWord4.length;
var fifthWord4Length = fifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWord4Length);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWord4Length);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWord4Length);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWord4Length);
console.log('Fifth Word: ' + fifthWord4 +', with length: ' + fifthWord4Length);

// Output
// First Word: wow, with length: 3
// Second Word: JavaScript, with length: 10
// Third Word: is, with length: 2
// Fourth Word: so, with length: 2
// Fifth Word: cool, with length: 4













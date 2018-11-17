console.log('--------SOAL NO. 1--------)

STORE 'resultanGaya' with ANY VALUE
STORE 'masaBenda' with ANY VALUE
STORE 'percepatanBenda' with ANY VALUE
  IF 'masaBenda' multiply with 'percepatanBenda' the result is 'resultanGaya'
  IF 'masaBenda' is '600'
  IF 'percepatanBenda' is '2'
    DISPLAY 'resultanGaya' is '600' multiply '2' is '1200'

console.log('--------SOAL NO. 2--------)
STORE 'tahun' with ''
  IF 'tahun' modulus '4 'is '0' AND 'tahun' modulus '100' is '1'
  ELSE IF 'tahun' modulus '4' is '0' OR 'tahun' modulus '100' is '0' OR 'tahun' modulus '400' is '0'
    DISPLAY 'tahun' is 'tahunKabisat'

console.log('--------SOAL NO. 3--------)
STORE 'pakaian' with ANY VALUE
STORE 'limit' with '20'
  FOR 'pakaian' is '0' and 'pakaian' is less than 'limit' then 'i' ++
    IF 'pakaian' is '20'
      DISPLAY 'mesin cuci' is ON

console.log('--------SOAL NO. 4--------)
STORE 'students' with '40'
STORE 'siswa' with '0'
    WHILE 'siswa' is '0' and 'siswa' is less than 'students' then 'siswa' ++
        IF  'siswa' is 'kukupanjang' 
          DISPLAY 'guru akan memuji siswa'
        ELSE
          DISPLAY 'guru menghukum siswa'




function gameProxytia(nama, peran) {

  var namaPeran = ['Ksatria', 'Tabib', 'Penyihir'];

  if (nama === '') {
    console.log('Nama harus diisi!')
  } else if (nama !== '' && peran === '') {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!')
 
  } else {
    console.log('Selamat datang di Dunia Proxytia, ' + nama)

    if (peran === 'Ksatria') {
      console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!')
    } else if (peran === 'Tabib') {
      console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.')
    } else if (peran === 'Penyihir') {
      console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
    } else if (peran !== namaPeran) {
      console.log('Halo ' + nama + ', Peran yang kamu pilih tidak sesuai dengan system.')
    }
  }
}

gameProxytia('Garry', 'Ksatria')

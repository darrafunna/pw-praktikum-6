document.getElementById("buttonID").onclick = function(){
    var nama = document.getElementById("namaID").value;
    var kategori = document.getElementById("kategoriID").value;
    var jumlahPemakaian = document.getElementById("pemakaianID").value;
    var tarif = 0;
    var abodemen = 0 ;
    var pajak = 0;
    var subtotal = 0;
    var tabel = '';

    if(nama==""){
        alert("Kolom nama harus diisi!");
    }else if(jumlahPemakaian==""){
        alert("Kolom jumlah pemakaian harus diisi!")
    }else if(jumlahPemakaian>30){
        alert("Jumlah pemakaian tidak valid!")
    }

    document.getElementById("outputNama").innerHTML = nama;
    document.getElementById("outputKategori").innerHTML = kategori;
    document.getElementById("outputJumlah").innerHTML = jumlahPemakaian;

    if (kategori == "Sosial"){
        abodemen = 10000;
        tarif = 300;
        pajak = 0;
    }
    else if (kategori == "Rumah"){
        abodemen = 30000;
        tarif = 500;
        pajak = 0.1;
    }
    else if (kategori == "Apartemen"){
        abodemen = 50000;
        tarif = 750;
        pajak = 0.15;
    }
    else if (kategori == "Industri"){
        abodemen = 75000;
        tarif = 1000;
        pajak = 0.2;
    }
    else {
        abodemen = 100000;
        tarif = 1250;
        pajak = 0.25;
    }


    for (var i = 1; i <= jumlahPemakaian ; i++){
        subtotal = tarif + abodemen;
        tabel += "<tr>";
        tabel += "<td>" + i + "</td>";
        tabel += "<td>" + tarif + "</td>";
        tabel += "<td>" + abodemen + "</td>"; 
        tabel += "<td>" + subtotal + "</td>"; 
        tabel += "</tr>"
        tarif += tarif;
    }
    
    document.getElementById("tabelID").innerHTML = tabel;
    document.getElementById("outputSubtotal").innerHTML = subtotal;
    document.getElementById("outputPajak").innerHTML = pajak * subtotal;
    document.getElementById("outputBayar").innerHTML = subtotal - (pajak * subtotal);
  
}
document.getElementById("buttonID").onclick = function(){
    var nama = document.getElementById("namaID").value;
    var kategori = document.getElementById("kategoriID").value;
    var jumlahPemakaian = document.getElementById("pemakaianID").value;
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
        const sosial = [300, 10000];
        for (var i = 1; i <= jumlahPemakaian ; i++){
            subtotal = sosial[0] + sosial[1];
            tabel += "<tr>";
            tabel += "<td>" + i + "</td>";
            tabel += "<td>" + sosial[0] + "</td>";
            tabel += "<td>" + sosial[1] + "</td>"; 
            tabel += "<td>" + subtotal + "</td>"; 
            tabel += "</tr>"
            sosial[0] += sosial[0];
        }
        pajak = 0;
    }
    else if (kategori == "Rumah"){
        const rumah = [500, 30000];
        for (var i = 1; i <= jumlahPemakaian ; i++){
            subtotal = rumah[0] + rumah[1];
            tabel += "<tr>";
            tabel += "<td>" + i + "</td>";
            tabel += "<td>" + rumah[0] + "</td>";
            tabel += "<td>" + rumah[1] + "</td>"; 
            tabel += "<td>" + subtotal + "</td>"; 
            tabel += "</tr>"
            rumah[0] += rumah[0];
        }
        pajak = 0.1;
    }
    else if (kategori == "Apartemen"){
        const apart = [750, 50000];
        for (var i = 1; i <= jumlahPemakaian ; i++){
            subtotal = apart[0] + apart[1];
            tabel += "<tr>";
            tabel += "<td>" + i + "</td>";
            tabel += "<td>" + apart[0] + "</td>";
            tabel += "<td>" + apart[1] + "</td>"; 
            tabel += "<td>" + subtotal + "</td>"; 
            tabel += "</tr>"
            apart[0] += apart[0];
        }
        pajak = 0.15;
    }
    else if (kategori == "Industri"){
        const industri = [1000, 75000];
        for (var i = 1; i <= jumlahPemakaian ; i++){
            subtotal = industri[0] + industri[1];
            tabel += "<tr>";
            tabel += "<td>" + i + "</td>";
            tabel += "<td>" + industri[0] + "</td>";
            tabel += "<td>" + industri[1] + "</td>"; 
            tabel += "<td>" + subtotal + "</td>"; 
            tabel += "</tr>"
            industri[0] += industri[0];
        }
        pajak = 0.2;
    }
    else {
        const villa = [1250, 100000];
        for (var i = 1; i <= jumlahPemakaian ; i++){
            subtotal = villa[0] + villa[1];
            tabel += "<tr>";
            tabel += "<td>" + i + "</td>";
            tabel += "<td>" + villa[0] + "</td>";
            tabel += "<td>" + villa[1] + "</td>"; 
            tabel += "<td>" + subtotal + "</td>"; 
            tabel += "</tr>"
            villa[0] += villa[0];
        }
        pajak = 0.25;
    }
    
    document.getElementById("tabelID").innerHTML = tabel;
    document.getElementById("outputSubtotal").innerHTML = subtotal;
    document.getElementById("outputPajak").innerHTML = pajak * subtotal;
    document.getElementById("outputBayar").innerHTML = subtotal - (pajak * subtotal);
  
}

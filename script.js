var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var p = prompt("Pilih : gajah, semut, orang");

  // menangkap pilihan komputer
  // generet bilangan random
  var comp = Math.random();
  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  var hasil = "";
  // rule
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    if (comp == "orang") {
      hasil = "MENANG";
    } else {
      hasil = "KALAH";
    }
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "KALAH" : "MENANG"; // menggunakan operator ternari, tanda ? di baca MAka JIka
  } else if (p == "semut") {
    hasil = (comp = "gajah") ? "MENANG" : "KALAH"; // menggunakan operator ternari, untuk mempersingkat kode if else di baris 18
  } else {
    hasil = "Memasukan Pilihan yang salah";
  }
  //tampilkan hasil
  alert(
    "Kamu memilih : " +
      p +
      " dan komputer memilih : " +
      comp +
      "\nMaka hasilnya Kamu " +
      hasil
  );
  tanya = confirm("lagi");
}
alert("Terimakasih Sudah bermain");

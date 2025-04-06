function ubahLabelUsia() {
    const kategori = document.getElementById("usiaKategori").value;
    const label = document.getElementById("usiaLabel");
  
    if (kategori === "bayi") {
      label.innerText = "Usia (bulan):";
    } else {
      label.innerText = "Usia (tahun):";
    }
  }
  
  function hitungBBI() {
    const gender = document.getElementById("gender").value;
    const usiaKategori = document.getElementById("usiaKategori").value;
    const age = parseFloat(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("result");
  
    if (isNaN(age) || age < 0) {
      result.innerText = "Masukkan usia yang valid!";
      return;
    }
  
    let bbi;
  
    if (usiaKategori === "bayi") {
      if (age > 11) {
        result.innerText = "Usia bayi maksimal 11 bulan.";
        return;
      }
      bbi = (age + 9) / 2;
      result.innerText = `BBI (usia ${age} bulan): ${bbi.toFixed(1)} kg`;
  
    } else {
      // Anak & Dewasa
      if (age >= 1 && age <= 6) {
        bbi = 2 * age + 8;
        result.innerText = `BBI (usia ${age} tahun): ${bbi.toFixed(1)} kg`;
      } else if (age > 6 && age <= 12) {
        bbi = (7 * age - 5) / 2;
        result.innerText = `BBI (usia ${age} tahun): ${bbi.toFixed(1)} kg`;
      } else if (age > 12) {
        if (isNaN(height) || height <= 0) {
          result.innerText = "Masukkan tinggi badan (cm) untuk usia di atas 12 tahun.";
          return;
        }
        const tinggiMin100 = height - 100;
        if (gender === "pria") {
          bbi = tinggiMin100 - (tinggiMin100 * 0.10);
        } else {
          bbi = tinggiMin100 - (tinggiMin100 * 0.15);
        }
        result.innerText = `BBI (usia ${age} tahun): ${bbi.toFixed(1)} kg`;
      } else {
        result.innerText = "Usia tidak valid.";
      }
    }
  }
  
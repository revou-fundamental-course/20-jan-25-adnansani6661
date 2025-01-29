// Menambahkan event listener ke form dan tombol reset
document.getElementById("form-bmi").addEventListener("submit", hitungBMI);
document.getElementById("reset-btn").addEventListener("click", resetForm);

// Fungsi untuk menghitung BMI
function hitungBMI(event) {
    event.preventDefault();

    // Ambil nilai input dari form
    let gender = document.getElementById("gender").value;
    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    // Konversi tinggi dari cm ke meter
    height = height / 100;

    // Hitung BMI
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(1);

    // Tampilkan hasil BMI
    tampilkanHasil(bmi);
}

// Fungsi untuk menampilkan hasil BMI
function tampilkanHasil(bmi) {
    let category = "";
    let explanation = "";
    let diseases = "";
    let solution = "";

    if (bmi < 18.5) {
        category = "Kurus";
        explanation = "Anda memiliki berat badan di bawah normal.";
        diseases = "Risiko anemia, kekurangan nutrisi, dan osteoporosis.";
        solution = "Konsumsi makanan bernutrisi tinggi dan tingkatkan asupan kalori.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal";
        explanation = "Berat badan Anda ideal.";
        diseases = "Risiko penyakit rendah.";
        solution = "Tetap jaga pola makan sehat dan olahraga rutin.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Gemuk";
        explanation = "Anda memiliki berat badan berlebih.";
        diseases = "Risiko diabetes, tekanan darah tinggi, dan penyakit jantung.";
        solution = "Kurangi makanan tinggi gula dan lemak, serta rutin berolahraga.";
    } else {
        category = "Obesitas";
        explanation = "Anda memiliki berat badan sangat berlebih.";
        diseases = "Risiko tinggi diabetes, stroke, penyakit jantung, dan kanker.";
        solution = "Segera konsultasi ke dokter dan atur pola makan serta olahraga.";
    }

    // Tampilkan hasil di HTML
    document.getElementById("bmi-value").innerText = `BMI: ${bmi}`;
    document.getElementById("bmi-category").innerText = `Kategori: ${category}`;
    document.getElementById("bmi-explanation").innerText = `Penjelasan: ${explanation}`;
    document.getElementById("bmi-diseases").innerText = `${diseases}`;
    document.getElementById("bmi-solution").innerText = `${solution}`;
}

// Fungsi untuk mereset form dan hasil BMI
function resetForm() {
    document.getElementById("form-bmi").reset();

    // Kosongkan hasil BMI
    document.getElementById("bmi-value").innerText = "BMI: -";
    document.getElementById("bmi-category").innerText = "Kategori: -";
    document.getElementById("bmi-explanation").innerText = "Penjelasan: -";
    document.getElementById("bmi-diseases").innerText = "-";
    document.getElementById("bmi-solution").innerText = "-";
}

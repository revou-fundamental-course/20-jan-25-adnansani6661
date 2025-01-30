// Ambil elemen yang diperlukan
const genderresult = document.getElementById('genderresult');
const resultsection = document.getElementById('resultsection');
const bmresult = document.getElementById('bmresult');
const bmcategory = document.getElementById('bmcategory');
const diseasediagnosis = document.getElementById('diseasediagnosis');
const diseaseInfo = document.getElementById('diseaseInfo');
const solution = document.getElementById('solution');
const resetbtn = document.getElementById('resetbtn');
const bmiform = document.getElementById('bmiform');

// Menyimpan jenis kelamin yang dipilih
let selectedGender = '';

// Fungsi untuk menghitung BMI
function calculateBMI(event) {
    event.preventDefault(); // Mencegah form untuk submit dan reload halaman

    // Ambil nilai input
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Konversi ke meter

    // Validasi input
    if (!selectedGender) {
        alert("Pilih jenis kelamin!");
        return;
    }

    if (isNaN(age) || age <= 0) {
        alert("Usia harus berupa angka yang valid dan lebih dari 0!");
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        alert("Berat badan harus berupa angka yang valid dan lebih dari 0!");
        return;
    }

    if (isNaN(height) || height <= 0) {
        alert("Tinggi badan harus berupa angka yang valid dan lebih dari 0!");
        return;
    }

    // Hitung BMI
    const bmi = weight / (height * height);

    // Tentukan kategori BMI, diagnosis, penyakit yang dapat muncul, dan solusi
    let category = '';
    let diagnosis = '';
    let disease = ''; // Penyakit yang dapat muncul
    let solutionText = '';

    if (bmi < 18.5) {
        category = 'Kekurangan Berat Badan';
        diagnosis = 'Anda memiliki berat badan kurang.';
        disease = 'Anemia, Osteoporosis, Gangguan hormonal.';
        solutionText = 'Disarankan untuk meningkatkan asupan kalori dengan makan lebih banyak dan berfokus pada diet yang seimbang.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal (Ideal)';
        diagnosis = 'Berat badan Anda normal.';
        disease = 'Risiko rendah terhadap penyakit terkait berat badan.';
        solutionText = 'Pertahankan gaya hidup sehat dan pola makan seimbang.';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Kelebihan Berat Badan';
        diagnosis = 'Anda memiliki kelebihan berat badan.';
        disease = 'Diabetes tipe 2, Hipertensi, Kolesterol tinggi.';
        solutionText = 'Disarankan untuk meningkatkan aktivitas fisik dan memperbaiki pola makan.';
    } else {
        category = 'Kegemukan (Obesitas)';
        diagnosis = 'Anda mengalami obesitas.';
        disease = 'Diabetes tipe 2, Penyakit jantung, Stroke, Sleep Apnea.';
        solutionText = 'Disarankan untuk berkonsultasi dengan ahli gizi dan memulai program penurunan berat badan yang sehat.';
    }

    // Tampilkan hasil BMI, kategori dan jenis kelamin
    bmresult.textContent = `BMI Anda adalah: ${bmi.toFixed(2)}`;
    bmcategory.textContent = `Kategori: ${category}`;
    genderresult.textContent = `Jenis Kelamin: ${selectedGender === 'male' ? 'Laki-laki' : 'Perempuan'}`;

    // Tampilkan diagnosis, penyakit yang dapat muncul, dan solusi
    diseasediagnosis.textContent = `Diagnosis: ${diagnosis}`;
    diseaseInfo.textContent = `Penyakit yang dapat muncul: ${disease}`;
    solution.textContent = `Solusi: ${solutionText}`;

    // Pastikan semua section terkait hasil dan solusi tampil
    resultsection.style.display = 'block'; // Tampilkan section hasil BMI
    diseaseInfoSection.style.display = 'block'; // Tampilkan section diagnosis, penyakit, dan solusi
    resultsection.scrollIntoView({ behavior: 'smooth' }); // Scroll ke bagian hasil
}

// Fungsi untuk memperbarui tampilan tombol yang dipilih
function updateGenderButtons() {
    const maleBtn = document.getElementById('maleBtn');
    const femaleBtn = document.getElementById('femaleBtn');

    // Reset semua tombol
    maleBtn.classList.remove('selected');
    femaleBtn.classList.remove('selected');

    // Tambahkan kelas 'selected' pada tombol yang dipilih
    if (selectedGender === 'male') {
        maleBtn.classList.add('selected');
    } else if (selectedGender === 'female') {
        femaleBtn.classList.add('selected');
    }
}

// Fungsi untuk mereset form
function resetForm() {
    bmiform.reset();
    resultsection.style.display = 'none'; // Sembunyikan hasil ketika reset
    diseaseInfoSection.style.display = 'none'; // Sembunyikan diagnosis dan solusi saat reset
    selectedGender = ''; // Reset pilihan jenis kelamin
    updateGenderButtons(); // Reset tampilan tombol jenis kelamin
}

// Event listener untuk memilih jenis kelamin dengan tombol
document.getElementById('maleBtn').addEventListener('click', () => {
    selectedGender = 'male';
    updateGenderButtons();
});
document.getElementById('femaleBtn').addEventListener('click', () => {
    selectedGender = 'female';
    updateGenderButtons();
});

// Event listener untuk form
bmiform.addEventListener('submit', calculateBMI);

// Event listener untuk tombol reset
resetbtn.addEventListener('click', resetForm);

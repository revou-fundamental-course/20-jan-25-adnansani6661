// Ambil elemen yang diperlukan
const genderresult = document.getElementById('genderresult');
const diagnosissection = document.getElementById('diagnosissection');
const disease = document.getElementById('disease');
const tip = document.getElementById('tip');

// Fungsi untuk menghitung BMI
function calculateBMI(event) {
    event.preventDefault(); // Mencegah form untuk submit dan reload halaman

    // Ambil nilai input
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Konversi ke meter

    // Hitung BMI
    const bmi = weight / (height * height);

    // Tentukan kategori BMI, diagnosis, penyakit yang dapat muncul, dan solusi
    let category = '';
    let diagnosis = '';
    let disease = ''; // Penyakit yang dapat muncul
    let solutionText = '';

    if (bmi < 18.5) {
        category = 'Kurus';
        diagnosis = 'Anda memiliki berat badan kurang.';
        disease = 'Anemia, Osteoporosis, Gangguan hormonal.';
        solutionText = 'Disarankan untuk meningkatkan asupan kalori dengan makan lebih banyak dan berfokus pada diet yang seimbang.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal';
        diagnosis = 'Berat badan Anda normal.';
        disease = 'Risiko rendah terhadap penyakit terkait berat badan.';
        solutionText = 'Pertahankan gaya hidup sehat dan pola makan seimbang.';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight (Kelebihan Berat Badan)';
        diagnosis = 'Anda memiliki kelebihan berat badan.';
        disease = 'Diabetes tipe 2, Hipertensi, Kolesterol tinggi.';
        solutionText = 'Disarankan untuk meningkatkan aktivitas fisik dan memperbaiki pola makan.';
    } else {
        category = 'Obesitas';
        diagnosis = 'Anda mengalami obesitas.';
        disease = 'Diabetes tipe 2, Penyakit jantung, Stroke, Sleep Apnea.';
        solutionText = 'Disarankan untuk berkonsultasi dengan ahli gizi dan memulai program penurunan berat badan yang sehat.';
    }

    // Tampilkan hasil BMI dan kategori
    bmresult.textContent = `BMI Anda adalah: ${bmi.toFixed(2)}`;
    bmcategory.textContent = `Kategori: ${category}`;

    // Tampilkan diagnosis, penyakit yang dapat muncul, dan solusi
    diseasediagnosis.textContent = `Diagnosis: ${diagnosis}`;
    diseaseInfo.textContent = `Penyakit yang dapat muncul: ${disease}`;
    solution.textContent = `Solusi: ${solutionText}`;

    // Tampilkan section hasil dan scroll ke bagian hasil
    resultsection.style.display = 'block';
    diseaseInfoSection.style.display = 'block'; // Tampilkan section diagnosis, penyakit, dan solusi
    resultsection.scrollIntoView({ behavior: 'smooth' });
}


// Fungsi untuk mereset form
function resetForm() {
    bmiform.reset();
    resultsection.style.display = 'none'; // Sembunyikan hasil ketika reset
    diseaseInfoSection.style.display = 'none'; // Sembunyikan diagnosis dan solusi saat reset
}

// Event listener untuk form submit dan tombol reset
bmiform.addEventListener('submit', calculateBMI);
resetbtn.addEventListener('click', resetForm);

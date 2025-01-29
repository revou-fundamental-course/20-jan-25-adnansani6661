// Ambil elemen yang diperlukan
const bmiform = document.getElementById('bmiform');
const resultsection = document.getElementById('resultsection');
const bmresult = document.getElementById('bmresult');
const bmcategory = document.getElementById('bmcategory');
const diseasediagnosis = document.getElementById('diseasediagnosis');
const solution = document.getElementById('solution');
const resetbtn = document.getElementById('resetbtn');

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

    // Tentukan kategori BMI
    let category = '';
    let diagnosis = '';
    let solutionText = '';

    if (bmi < 18.5) {
        category = 'Kurus';
        diagnosis = 'Anda memiliki berat badan kurang.';
        solutionText = 'Disarankan untuk meningkatkan asupan kalori dengan makan lebih banyak dan berfokus pada diet yang seimbang.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal';
        diagnosis = 'Berat badan Anda normal.';
        solutionText = 'Pertahankan gaya hidup sehat dan pola makan seimbang.';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight (Kelebihan Berat Badan)';
        diagnosis = 'Anda memiliki kelebihan berat badan.';
        solutionText = 'Disarankan untuk meningkatkan aktivitas fisik dan memperbaiki pola makan.';
    } else {
        category = 'Obesitas';
        diagnosis = 'Anda mengalami obesitas.';
        solutionText = 'Disarankan untuk berkonsultasi dengan ahli gizi dan memulai program penurunan berat badan yang sehat.';
    }

    // Tampilkan hasil BMI dan kategori
    bmresult.textContent = `BMI Anda adalah: ${bmi.toFixed(2)}`;
    bmcategory.textContent = `Kategori: ${category}`;
    diseasediagnosis.textContent = `Diagnosis: ${diagnosis}`;
    solution.textContent = `Solusi: ${solutionText}`;

    // Tampilkan section hasil dan scroll ke bagian hasil
    resultsection.style.display = 'block';
    resultsection.scrollIntoView({ behavior: 'smooth' });
}

// Fungsi untuk mereset form
function resetForm() {
    bmiform.reset();
    resultsection.style.display = 'none'; // Sembunyikan hasil ketika reset
}

// Event listener untuk form submit dan tombol reset
bmiform.addEventListener('submit', calculateBMI);
resetbtn.addEventListener('click', resetForm);

function calculateBMI() {
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    
    if (age <= 0 || height <= 0 || weight <= 0) {
        alert("Masukkan data yang valid!");
        return;
    }

    let bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    document.getElementById("gender-result").innerText = gender;
    document.getElementById("bmi-result").innerText = bmi;

    let category = "";
    let description = "";
    let tips = "";
    let diagnosis = "";

    if (bmi < 18.5) {
        category = "Kurus (Underweight)";
        description = "Anda memiliki berat badan di bawah normal.";
        tips = "Perbanyak konsumsi makanan bergizi dan olahraga.";
        diagnosis = "Berisiko mengalami kekurangan gizi dan sistem imun lemah.";
    } else if (bmi < 24.9) {
        category = "Normal";
        description = "Berat badan Anda ideal.";
        tips = "Pertahankan pola makan sehat dan olahraga teratur.";
        diagnosis = "Risiko penyakit lebih rendah.";
    } else if (bmi < 29.9) {
        category = "Gemuk (Overweight)";
        description = "Anda memiliki berat badan berlebih.";
        tips = "Kurangi makanan tinggi lemak dan perbanyak aktivitas fisik.";
        diagnosis = "Berisiko terkena tekanan darah tinggi dan diabetes.";
    } else {
        category = "Obesitas";
        description = "Anda memiliki berat badan sangat berlebih.";
        tips = "Konsultasikan ke dokter dan jalani pola hidup sehat.";
        diagnosis = "Risiko tinggi penyakit jantung, stroke, dan diabetes.";
    }

    document.getElementById("bmi-category").innerText = category;
    document.getElementById("bmi-description").innerText = description;
    document.getElementById("bmi-tips").innerText = tips;
    document.getElementById("bmi-diagnosis").innerText = diagnosis;
}

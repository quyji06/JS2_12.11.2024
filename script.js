
function BMI(waga, wzrost) {
    const bmi = waga / (wzrost * wzrost);
    return bmi;
}

function klasyfikujBMI(bmi) {
    if (bmi < 18.5) {
        return "Niedowaga";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Waga prawidłowa";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Nadwaga";
    } else {
        return "Otyłość";
    }
}

function pokazBMI(waga, wzrost) {
    const bmi = BMI(waga, wzrost); 
    const klasyfikacja = klasyfikujBMI(bmi); 
    console.log(`Twoje BMI wynosi: ${bmi.toFixed(2)} - ${klasyfikacja}`); 
}


const waga = 70; 
const wzrost = 1.75;

pokazBMI(waga, wzrost);

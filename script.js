const enteredNum = document.getElementById("number");
const converted = document.getElementById("convert-btn");
const result = document.getElementById("output");

converted.addEventListener("click", () => {
    let text = enteredNum.value;
    if (text === "") {
        result.innerText = "Please enter a valid number";
    }
    else if (text <= 0) {
        result.innerText = "Please enter a number greater than or equal to 1";
    }
    else if (text >= 4000) {
        result.innerText = "Please enter a number less than or equal to 3999";
    }
    else {
        const romanNumbers = {
            "M": 1000,
            "CM": 900,
            "D": 500,
            "CD": 400,
            "C": 100,
            "XC": 90,
            "L": 50,
            "XL": 40,
            "X": 10,
            "IX": 9,
            "V": 5,
            "IV": 4,
            "I": 1
        };
        let sonuc = ""
        for (let i in romanNumbers) {
            sonuc += (i.repeat(Math.floor(text / romanNumbers[i])));
            text %= romanNumbers[i];
        }
        result.innerText = sonuc;
    }
})
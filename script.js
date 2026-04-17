const celsiusInput = document.getElementById("celsius"); // ต้องสะกดตรงกับ ID ใน HTML
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const temInput = document.querySelectorAll("input");

temInput.forEach(input => {
    input.addEventListener("input", (e) => {
        // ใช้ parseFloat เพื่อให้คำนวณทศนิยมได้แม่นยำ
        let temValue = parseFloat(e.target.value);
        let inputName = e.target.name;

        if (e.target.value === "") {
            celsiusInput.value = "";
            fahrenheitInput.value = "";
            kelvinInput.value = "";
            return;
        }

        // เช็คเงื่อนไขชื่อ name ให้ตรงกับ HTML
        if (inputName === "celsius") {
            fahrenheitInput.value = ((temValue * 9 / 5) + 32).toFixed(2);
            kelvinInput.value = (temValue + 273.15).toFixed(2);
            let kelvinValue = temValue + 273.15;
            kelvinInput.value = kelvinValue.toFixed(2);
        } else if (inputName === "fahrenheit") {
            // ฟาเรนไฮต์ -> เซลเซียส และ เคลวิน
            let celsiusValue = (temValue - 32) * 5 / 9;
            celsiusInput.value = celsiusValue.toFixed(2);
            kelvinInput.value = (celsiusValue + 273.15).toFixed(2);
        }
        else if (inputName === "kelvin") {
            // เคลวิน -> เซลเซียส และ ฟาเรนไฮต์
            let celsiusValue = temValue - 273.15;
            celsiusInput.value = celsiusValue.toFixed(2);
            fahrenheitInput.value = ((celsiusValue * 9 / 5) + 32).toFixed(2);
        }

    });
});
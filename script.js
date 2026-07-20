const passwordDisplay = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

generateBtn.addEventListener("click", () => {
    let password = "";

    for (let i = 0; i < lengthSlider.value; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordDisplay.textContent = password;
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordDisplay.textContent);
    alert("Password copied!");
});

// staged mistake
// bad feature
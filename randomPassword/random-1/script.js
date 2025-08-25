//todo Yapılması Gerekenler
//todo 1- Rastgele sayi
//todo 2- Rasrgele harf
//todo 3- Rastgele sembol

const sifre = document.getElementById("sifre");

const sayiBtn = document.getElementById("sayiBtn");
const harfBtn = document.getElementById("harfBtn");
const sembolBtn = document.getElementById("sembolBtn");

const silBtn = document.getElementById("silBtn");

sifre.textContent = "";

//!
sembolBtn.style.backgroundColor = "orange";
sayiBtn.style.backgroundColor = "blue";
harfBtn.style.backgroundColor = "green";
//!

sembolBtn.addEventListener("click", function () {
  sifre.style.color = "orange";
  const symbols = ["!", "@", "#", "$", "%", "&", "*", "?", "+", "="];
  const randomSymbols = Math.floor(Math.random() * symbols.length);

  sifre.textContent += symbols[randomSymbols];
});

sayiBtn.addEventListener("click", function () {
  sifre.style.color = "blue";

  const sayi = Math.floor(Math.random() * 10);
  sifre.innerText += sayi;
});

harfBtn.addEventListener("click", function () {
  sifre.style.color = "green";
  const letters = [
    "A",
    "B",
    "C",
    "Ç",
    "D",
    "E",
    "F",
    "G",
    "Ğ",
    "H",
    "I",
    "İ",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "Ö",
    "P",
    "R",
    "S",
    "Ş",
    "T",
    "U",
    "Ü",
    "V",
    "Y",
    "Z",
  ];
  const randomLetter = Math.floor(Math.random() * letters.length);
  sifre.textContent += letters[randomLetter];
});

silBtn.addEventListener("click", function () {
  sifre.textContent = sifre.textContent.slice(0, -1);
});

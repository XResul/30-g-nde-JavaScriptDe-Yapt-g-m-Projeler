//! https://www.net-comber.com/charset.html
//? Charset tablosuna bakarak fonksiyonlarımızı yazdık

//!! GENERATEPASSWORD FUNCTİON'DA KALDIK TEK ORAYI ANLAMADIM

//! Dom(Document Object Model(Belge Nesne model))
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const clipboardEl = document.getElementById("clipboard");
const generateEl = document.getElementById("generate");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

//? Kopyalama işlemi
clipboard.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});

//! Generate Even List yaptık //Bunu oluşturduktan sorna generatePassword Function oluşturacagız
//?? NOT  =  Burada tam olarak checkBox'lar dan alınan değerlerin true/false olup olmadığını aldık
generateEl.addEventListener("click", function () {
  const length = parseInt(lengthEl.value); //Şifre uzunluk değerini alıyoruz .Gelen veri string olarak geliyor bir onu int olarak çeviriyoruz
  //--- checkbox ların true/false değerlerini buradan alıyoruz  ---\\
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  //--- checkbox ların true/false değerlerini buradan alıyoruz  ---\\

  resultEl.innerText = generatePassWord(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
  //?console.log(typeof length);
});

function generatePassWord(lower, upper, number, symbol, length) {
  let generatedPassword = ``;
  const typesCount = lower + upper + number + symbol; //? Buradan checkbox'ların kaç  tanesi aktif
  //console.log(`TypsCount`, typesCount);
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  //console.log(typesArr);
  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

//? 97-122 arası a'dan z'ye
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//? 65-90 arası A'dan Z'ye
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//? 0-1 arası 0'dan 9'e
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//? rastgele semboller veriyor
function getRandomSymbol() {
  const semboller = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    "\\",
    "|",
    ";",
    ":",
    "'",
    '"',
    ",",
    ".",
    "/",
    "<",
    ">",
    "?",
    "`",
    "~",
  ];
  // console.log(semboller); //? Sembolleri console'a ekranına yazdırdık
  return semboller[Math.floor(Math.random() * semboller.length)];
  //?return String.fromCharCode(Math.floor(Math.random() * 16) + 33);
  //? bu yöntemle tabloda olan verileri çekebiliriz ama semboller az olur
}

// console.log(getRandomNumber());
// console.log(getRandomSymbol());
// console.log(getRandomSymbol());
//?bu şekilde object oluşturup oradan da funtionları çekebiliriz
// console.log(randomFunction.lower());
// console.log(randomFunction.upper());
// console.log(randomFunction.number());
// console.log(randomFunction.symbol());

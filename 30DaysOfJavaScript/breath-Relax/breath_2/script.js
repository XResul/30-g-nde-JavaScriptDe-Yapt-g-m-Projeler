// //? html 'de oluşturduğumuz container ve text verilerini id'sinden çekeceğiz

// const container = document.getElementById("container");

// const text = document.getElementById("text");

// totalTime = 7500; //? toplam süre
// const breathTime = (totalTime / 5) * 2; //?nefes alma süresi
// const holdTime = totalTime / 5; //? bekleme süresi

// breathAnimation();

// function breathAnimation() {
//   text.innerText = `Nefes al`; //?bu fonksiyon çalıştığında text'e Nefes al vericeğiz
//   container.className = `container grow`; //?bu fonksiyon çalıştıgında container'ın class'ı değişecek

//   setTimeout(() => {
//     text.innerText = `Bekle`;

//     setTimeout(() => {
//       text.innerText = `Nefes ver`;
//       container.classList = `container shrink`;
//     }, holdTime);
//   }, breathTime);
// }
// setInterval(breathAnimation, totalTime);

//!! Benim Yazdığım kod aşagıda
const text = document.getElementById("text");
const toplamSure = 7500;
const nefesAlma = (toplamSure / 5) * 2;
const nefesTut = toplamSure / 5;

// Sesler
const bgMusic = document.getElementById("bgMusic");
const breathIn = document.getElementById("breathIn");
const breathOut = document.getElementById("breathOut");

// Müzik başlat
bgMusic.volume = 0.2;
bgMusic.play();

// Yazıyı büyütme efekti
function animateText() {
  text.style.transform = "scale(1.5)";
  setTimeout(() => {
    text.style.transform = "scale(1)";
  }, 600);
}

// Nefes animasyonu
function nefesAnimasyonu() {
  text.textContent = "Nefes Al";
  animateText();
  breathIn.currentTime = 0;
  breathIn.play();

  setTimeout(() => {
    text.textContent = "Nefesi Tut";
    animateText();

    setTimeout(() => {
      text.textContent = "Nefesi Ver";
      animateText();
      breathOut.currentTime = 0;
      breathOut.play();
    }, nefesTut);
  }, nefesAlma);
}

// Başlat
nefesAnimasyonu();
setInterval(nefesAnimasyonu, toplamSure);
//!!benim yadıgım kod

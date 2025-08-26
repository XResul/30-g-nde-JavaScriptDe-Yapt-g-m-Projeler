//Todo Dinamik web site yaparken kullanacaklarımız
//Todo html kısmında
//Todo kullanıcı 2 değer girecek ve yukarıda saati alıcagız
//Todo contenteditable=true(içerigi düzenlenebilir)

// HTML'deki elementleri seçiyoruz
const nameSpan = document.getElementById("name"); // Kullanıcının ismini yazacağı alan
const time = document.getElementById("time"); // Saat bilgisini göstereceğimiz alan
const focusSpan = document.getElementById("focus"); // Kullanıcının o anki odaklandığı şeyi yazacağı alan

// localStorage'da kullanacağımız anahtar isimlerini değişkene atıyoruz
const storageKey = "kullaniciAdi"; // isim için sabit anahtar

// ------------------------
// SAAT GÖSTERME FONKSİYONU
// ------------------------
function showTime() {
  let today = new Date(); // Şu anki tarih ve saati alıyoruz

  // Saat, dakika ve saniyeyi değişkenlere atıyoruz
  hours = today.getHours();
  minutes = today.getMinutes();
  seconds = today.getSeconds();

  // Saat bilgisini HTML'e yazdırıyoruz
  time.innerHTML = `${hours}:${minutes}:${seconds}`;

  // Bu fonksiyonu her saniye tekrar çağırıyoruz, böylece saat canlı güncellenir
  setTimeout(showTime, 1000);
}

// Sayfa açıldığında saati başlatıyoruz
showTime();

// ------------------------
// NAME SPAN (Kullanıcı Adı) İÇİN FONKSİYONLAR
// ------------------------

// Girilen ismi localStorage'a kaydeden fonksiyon
function setNameSpan() {
  localStorage.setItem(storageKey, nameSpan.innerText);
  // innerText sayesinde span içindeki yazıyı alıyoruz
}

// localStorage'dan kaydedilmiş ismi getiren fonksiyon
function getNameSpan() {
  return localStorage.getItem(storageKey);
}

// Sayfa açıldığında daha önce kaydedilmiş isim varsa ekrana yaz
const savedName = getNameSpan();
if (savedName) {
  nameSpan.innerText = savedName;
}

// ------------------------
// FOCUS SPAN (Kullanıcının odaklandığı şey) İÇİN FONKSİYONLAR
// ------------------------

// Girilen focus bilgisini localStorage'a kaydeden fonksiyon
function setFocusSpan() {
  localStorage.setItem("focus", focusSpan.innerText);
}

// Daha önce kaydedilmiş focus bilgisini getiren fonksiyon
function getFocusSpan() {
  return localStorage.getItem("focus");
}

// Sayfa açıldığında focus bilgisi varsa ekrana yaz
const savedFocus = getFocusSpan();
if (savedFocus) {
  focusSpan.innerText = savedFocus;
}

// ------------------------
// EVENT LISTENERLAR
// ------------------------
//? addEventListener(event(durum-olay),function) çalışma mantığı  budur

// focusSpan için:
// keypress → kullanıcı bir şey yazarken otomatik kaydetmek için
// blur → kullanıcı yazmayı bitirip alanı terk ettiğinde kaydetmek için
focusSpan.addEventListener("keypress", setFocusSpan);
focusSpan.addEventListener("blur", setFocusSpan);

// nameSpan için:
// keypress → kullanıcı yazarken kaydetmek için
// blur → kullanıcı yazmayı bitirip alanı terk ettiğinde kaydetmek için
nameSpan.addEventListener("keypress", setNameSpan);
nameSpan.addEventListener("blur", setNameSpan);

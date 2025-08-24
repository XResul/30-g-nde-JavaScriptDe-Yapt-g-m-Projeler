//!1. forEach()
//? Dizideki her eleman için bir işlem yapar.
//? Geri dönüş değeri yoktur (undefined döner).
//? Örnek:
// [1, 2, 3].forEach((x) => console.log(x));

//! 2. map()
//? Diziyi dönüştürür, yeni bir dizi döner.
//? Eleman sayısı değişmez (her eleman işlenir).
//? Örnek:
// const kareler = [1, 2, 3].map((x) => x * x); // [1,4,9]

//!3. filter()
//?Koşulu sağlayan elemanları seçer ve yeni bir dizi döner.
//?Eleman sayısı azalabilir.
//?Örnek:
// const ciftler = [1, 2, 3, 4].filter((x) => x % 2 === 0); // [2,4]

//! 4. reduce()
//? Diziyi tek bir değere indirger (toplam, çarpım vb.).
//? Başlangıç değeri verilebilir.
//? Örnek:
// const toplam = [1, 2, 3].reduce((t, x) => t + x, 0); // 6

//! 5. find()
//? Koşulu sağlayan ilk elemanı döner.
//? Bulamazsa undefined döner.
//? Örnek:
// const sonuc = [5, 10, 15].find((x) => x > 7); // 10
// console.log(sonuc);

//!6. some()
//? En az bir eleman koşulu sağlıyor mu? → true/false döner.
//? Örnek:
//console.log([1, 3, 5].some((x) => x % 2 === 0)); // false

//! 7. every()
//? Tüm elemanlar koşulu sağlıyor mu? → true/false döner.
//? Örnek:
// console.log([2, 4, 6].every((x) => x % 2 === 0)); // true

//! 8.sort()
//? Diziyi sıralar, orijinal diziyi değiştirir.
//? Varsayılan sıralama string (alfabetik) yapar.
//? Örnek:
// console.log([10, 2, 5].sort((a, b) => a - b)); // [2,5,10]

//! 9. includes()
//? Eleman dizide var mı? → true/false döner.
//? Örnek:
// const a = [1, 2, 3].includes(2); // true
// console.log(a);

//todo Önemli Notlar:
//? 1-map/filter/reduce → yeni dizi veya değer döner (immutable davranış)
//? 2-forEach → geriye değer döndürmez, sadece işlem yapar
//? 3-sort → diziyi yerinde değiştirir (mutable davranış)

//!Özet:
//? -forEach → yan etkiler için
//? -map → dönüştürme için
//? -filter → eleme için
//? -reduce → toplama / birleştirme için

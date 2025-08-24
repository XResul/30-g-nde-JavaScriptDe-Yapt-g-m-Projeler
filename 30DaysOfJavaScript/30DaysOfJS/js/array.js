//------------------------------------------------------------------------
//!! ARRAY'LERİN KULLANIŞLARI  ↓

//? Boş dizi tanımlar  ↓
// const letArry_1 = [];

//? Literalle(Gerçek) dizi Not="Genlede bunu kullanırız" ↓
// const letArry_2 = [1, 2, 3];

//?  // [ <3 boş slot> ] — dikkat: 3 uzunluklu boş dizi ↓
// const letArry_3 = new Array(3);
// letArry_3.push(12);
// letArry_3.push("12");
// letArry_3.push(122);
// console.log(letArry_3);

//? [3] — tek elemanlı güvenli oluşturma ↓
// const letArry_4 = Array.of(3);

//? ['R','e','s','u','l'] — iterable'dan üretir ↓
// const letArry_5 = Array.from("Resul");
// console.log(letArry_5);

//!! ARRAY'LERİN KULLANIŞLARI  ↑
//------------------------------------------------------------------------

//------------------------------------------------------------------------
//!! ARRAY TEMEL ÖZELLİKLER ↓
// const nums = [10, 20, 30, "Resul", "R", 1];
// console.log(nums.length); //? bu verinin uzunluğunun 6 olduğunu söyler
// console.log(nums[0]); //? dizi'deki ilk elamını çeker
// console.log(nums.lastIndexOf("R")); //? girilen verinin hangi index'de olduğunu gösterir
// console.log(nums.at(-1)); //? Sondaki elemanı yakalar
//!! ARRAY TEMEL ÖZELLİKLER ↑
//------------------------------------------------------------------------

//------------------------------------------------------------------------
//todo Veri arama ve kontrol ↓

//? find / findIndex → koşula göre eleman/indeks bul

//? some / every → koşulu sağlayan var mı / hepsi sağlıyor mu

//? includes → eleman var mı kontrolü
// const urunler = [
//   {
//     id: 1,
//     ad: "Kitap",
//   },
//   {
//     id: 2,
//     ad: "Kablo",
//   },
// ];
// const yakalama = urunler.find((u) => u.id === 2); //? id'si 2 olanı yakalar
// const yakalamaKablo = urunler.some((u) => u.ad === "Kablo" && u.id === 2); //? Koşul doğru ise true/false döner

// console.log(yakalama);
//todo Veri arama ve kontrol ↑
//------------------------------------------------------------------------

//------------------------------------------------------------------------
//!! Okuma-Ekleme-Güncelleme-Silme ↓
// const sepet = ["Elma"];

// //? Eklemeler
// sepet.push("Çilek"); //?? sona ekler
// sepet.push("Karpuz"); //?? sona ekler
// sepet.unshift("Kiraz"); //?? başa ekler
// sepet.splice(1, 0, "Patlıcan"); //?? index 1'e "Patlıcan" ekle (silmeden)

// console.log(sepet.length); //? kaç elemanlı olduğuna baktık.
// console.log(sepet);
// //??   ['Kiraz', 'Patlıcan', 'Elma', 'Çilek', 'Karpuz']

// sepet[2] = "Kavun";
// console.log(sepet); //?Elma yerine kavun olarak güncelleme yaptık
// //?? ['Kiraz', 'Patlıcan', 'Kavun', 'Çilek', 'Karpuz']

// Silme
// sepet.pop(); //? sondan birini sil
// sepet.shift(); //? baştan birini sil
// sepet.splice(0, 1); //? index 0’dan 1 eleman sil
// console.log(sepet);

// let sepet = ["elma", "armut"];
// sepet.push("muz"); //? sona ekle
// sepet = sepet.with(1, "kavun"); //? armut -> kavun (değiştir)
// sepet = sepet.toSpliced(0, 1); //? baştaki elmayı sil (immutably)

// sepet = sepet.with(0, "Tatlı");
//console.log(sepet);
//!! Okuma-Ekleme-Güncelleme-Silme ↑
//------------------------------------------------------------------------

//------------------------------------------------------------------------
//!! Veri dönüştürme ve filtreleme ↓

// map → API’den gelen veri üzerinde alanları dönüştürmek

// filter → arama, kategori, koşula göre liste daraltmak

// reduce → toplam, istatistik hesaplamak (toplam fiyat, ortalama vs.)

// const fiyatlar = [100, 200, 300, 400, 500, 600];

// const kdvFiyatlar = fiyatlar.map((f) => f * 1.2); //?bütün sayıları 1.2 ile çarpar tekrar listeler

// const pahaliFiyatlar = fiyatlar.filter((f) => f > 170); //??150'den büyükleri alır
// const toplam = fiyatlar.reduce((t, f) => t + f, 0); //?bütün sayıların toplamını alır

// console.log(fiyatlar);
// console.log(pahaliFiyatlar);
//!! Veri dönüştürme ve filtreleme ↑
//------------------------------------------------------------------------

//------------------------------------------------------------------------
//!! Veri birleştirme ↓
const a = [1, 2];
const b = [3, 4];
const birlesim = [...a, ...b];
console.log(birlesim);
//!! Veri birleştirme ↑
//------------------------------------------------------------------------

//------------------------------------------------------------------------
//!! Sıralama ve sayfa gösterimi ↓

// sort((a,b)=>a-b) → sayıları küçükten büyüğe

// sort((a,b)=>a.fiyat-b.fiyat) → obje listesi sıralama

// slice → sayfalama (ör. ilk 10 kaydı göster)

// const urunler = [
//   { ad: "Mouse", fiyat: 300 },
//   { ad: "Klavye", fiyat: 900 },
//   { ad: "Kulaklık", fiyat: 500 },
// ];
// const sirali = urunler.toSorted((a, b) => a.fiyat - b.fiyat);
// const ilkIki = sirali.slice(0, 2); // ilk iki ürün
// console.log(ilkIki);
//!! Sıralama ve sayfa gösterimi ↑
//------------------------------------------------------------------------

//? meyveler dizisi
const meyveler = ["Elma", "Kivi", "Karpuz", "Portakal"];
//? meyvelerdizisini döndük ve tek tek yazdırdık
for (let i = 0; i < meyveler.length; i++) {
  console.log(meyveler[i]);
}
//---------------------

//? for...of döngüsü – daha temiz bir yazım
const sayilar = [12, 42, 83, 95, 35];
//? for...of doğrudan elemanlara gider, indeksle uğraşmazsın.
for (let sayi of sayilar) {
  console.log("Sayi = " + sayi);
}

//---------------------

const dizi = [12, 13, 14, 15, 16, 17, 18, 19, 20];

//? benim yaptığım döngü
for (let i = 0; i < dizi.length; i++) {
  let cift = dizi[i] % 2;
  if (!cift) {
    console.log("Dizide bulunan ciftler = " + dizi[i]);
  }
}
//? Bu şekilde daha sade ve kolay
for (let sayi of dizi) {
  if (sayi % 2 === 0) {
    console.log("Cift sayilar: ", sayi);
  }
}

//---------------------

const numbers = [4, 9, 16, 25, 36];
const karekoklar = [];

for (let sayi of numbers) {
  karekoklar.push(Math.sqrt(sayi)); //! sayilarin kareköklerini alıp karekoklar dizisine atıyor
}
console.log(karekoklar);

//---------------------
//!! Gerçek mini proje – Alışveriş Sepeti Hesaplama
// Bir ürün listesi olsun.
// Döngü ile fiyatları toplayalım.
// %20 KDV ekleyelim.

const urunler = [
  { isim: "Kitap", fiyat: 1400 },
  { isim: "Kalem", fiyat: 1200 },
  { isim: "Ferrari", fiyat: 1800 },
];

let toplam = 0;

for (let urun of urunler) {
  console.log(`${urun.isim} - ${urun.fiyat} ₺`);
  toplam += urun.fiyat; //? bütün ürünlerin fiyatlarını toplama attık
}

console.log(`Sepet toplamı = ${toplam} ₺`);

const kdv = toplam * 0.2; //?%20 KDV
console.log(`KDV: ${kdv} ₺`);

console.log(`Genel Toplam: ${toplam + kdv} ₺`);

//?? 1500 TL üstü ürünleri filtrelemek
const pahaliUrunler = urunler.filter((u) => u.fiyat > 1500);
console.log(pahaliUrunler);

//? Toplam fiyatı reduce ile almak
const toplamFiyat = urunler.reduce((t, u) => t + u.fiyat, 0);
console.log(`Toplam Fiyat: ${toplamFiyat}`);
//---------------------

//!!dizi oluştururken kullandıgımız map,filter,reduce gibi önemli ifadelerin açıklmasını yazdır ve öğren

const nums = [2, 5, 8, 11];
const sonuc = nums.filter((x) => x % 2 === 0).map((x) => x * 2);
console.log(sonuc);

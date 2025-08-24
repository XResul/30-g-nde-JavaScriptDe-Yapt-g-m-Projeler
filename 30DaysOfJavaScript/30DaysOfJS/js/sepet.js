//Todo SEPET UYGULAMASININ DA NELER YAPACCAĞIZ
// 1-Kullanıcı birden fazla ürün ekleyebilir.
// 2-Her ürünün fiyatı ve stok miktarı var.
// 3-Eğer kullanıcı stoktan fazla eklemeye çalışırsa uyarı verilecek.
// 4-Sepetteki toplam fiyat hesaplanacak.
// 5-Eğer toplam 500 TL üstü ise %10 indirim uygulanacak.
// Ekstra: Sepetteki ürünlerin adlarını ve adetlerini forEach ile ekrana yazdırın.

// Ürün listesi (isim, fiyat, stok)
// const urunler = [
//   { isim: "Telefon", fiyat: 3000, stok: 5 },
//   { isim: "Kulaklık", fiyat: 500, stok: 10 },
//   { isim: "Şarj Aleti", fiyat: 200, stok: 3 },
//   { isim: "Kılıf", fiyat: 100, stok: 20 },
// ];

// // Kullanıcının sepete eklemek istediği ürünler (isim, adet)
// const sepeteEklenecekler = [
//   { isim: "Telefon", adet: 2 },
//   { isim: "Kulaklık", adet: 1 },
//   { isim: "Şarj Aleti", adet: 4 }, // stok yetersiz
//   { isim: "Kılıf", adet: 5 },
// ];

// let sepet = [];

// // Sepeti oluştur
// sepeteEklenecekler.forEach((item) => {
//   const urun = urunler.find((u) => u.isim === item.isim);
//   if (!urun) {
//     console.log(`${item.isim} bulunamadı.`);
//     return;
//   }
//   if (item.adet > urun.stok) {
//     console.log(`${urun.isim} için yeterli stok yok. Mevcut: ${urun.stok}`);
//     return;
//   }
//   sepet.push({
//     isim: urun.isim,
//     adet: item.adet,
//     fiyat: urun.fiyat,
//     toplamFiyat: urun.fiyat * item.adet,
//   });
// });

// // Sepeti göster ve toplam fiyatı hesapla
// let toplam = 0;
// console.log("\n--- Sepetiniz ---");
// sepet.forEach((u) => {
//   console.log(`${u.isim} - Adet: ${u.adet}, Fiyat: ${u.toplamFiyat} TL`);
//   toplam += u.toplamFiyat;
// });

// // İndirim uygulama
// if (toplam > 500) {
//   console.log("500 TL üstü alışveriş için %10 indirim uygulanıyor.");
//   toplam *= 0.9;
// }

// console.log("Genel Toplam:", toplam.toFixed(2), "TL");
//-------------console ekranında yapılan sepet ----------------/

const urunler = [
  { isim: "Telefon", fiyat: 3000 },
  { isim: "Kulaklık", fiyat: 500 },
  { isim: "Kılıf", fiyat: 100 },
];

const sepet = [];

const urunListesi = document.getElementById("urunListesi");

// Ürünleri ekrana yazdır
urunler.forEach((urun, index) => {
  const li = document.createElement("li");
  li.textContent = `${urun.isim} - ${urun.fiyat} TL`;

  const btn = document.createElement("button");
  btn.textContent = "Sepete Ekle";
  btn.onclick = () => sepeteEkle(index);

  li.appendChild(btn);
  urunListesi.appendChild(li);
});

// Sepete ürün ekleme
function sepeteEkle(index) {
  sepet.push(urunler[index]);
  sepetiGoster();
}

// Sepeti ekrana yazdır
function sepetiGoster() {
  const sepetListesi = document.getElementById("sepetListesi");
  sepetListesi.innerHTML = "";

  let toplam = 0;
  sepet.forEach((urun) => {
    const li = document.createElement("li");
    li.textContent = `${urun.isim} - ${urun.fiyat} TL`;
    sepetListesi.appendChild(li);
    toplam += urun.fiyat;
  });

  if (toplam > 500) {
    toplam *= 0.9; // %10 indirim
  }

  document.getElementById("toplamFiyat").textContent = `Toplam: ${toplam} TL`;
}

// Satın alma işlemi
function satınAl() {
  if (sepet.length === 0) {
    alert("Sepetiniz boş, lütfen ürün ekleyin.");
    return;
  }
  alert("Satın alma işlemi başarıyla tamamlandı!");
  sepetiTemizle();
}

// Sepeti temizleme işlemi
function sepetiTemizle() {
  sepet.length = 0; // sepeti sıfırla
  sepetiGoster(); // ekrandan kaldır
}

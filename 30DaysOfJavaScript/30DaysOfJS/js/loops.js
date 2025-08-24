//todo
// Klasik for → index kontrolü lazımsa veya ileri/geri saymak gerekiyorsa.

// for...of → dizi veya iterable üzerinde değer odaklı temiz döngü.

// for...in → dizi için değil, sadece obje key’leri üzerinde dönmek için.

// while / do...while → koşul bazlı döngüler (duruma göre ilerleyen).

// forEach → yan etkiler için, break/continue çalışmaz (durdurulamaz).

// map, filter, reduce → modern projelerde döngü yazmadan veri işlemek için (daha fonksiyonel yaklaşım).
//todo

//??KLASİK DÖNGÜ
const sayilar = [10, 12, 20, 32];
for (i = 0; i < sayilar.length; i++) {
  console.log("a" + i, sayilar[i]);
}

//??KLASİK DÖNGÜ
let a = 0;
for (const deger of sayilar) {
  console.log(a + "-" + deger);
  a++;
}

const obje = { ad: "Resul", yas: 21 };
for (const key in obje) {
  console.log(key, obje[key]);
}
// ad Resul
// yas 21

//?? While döngüsü
let z = 0;
while (z < sayilar.length) {
  console.log(sayilar[z]);
  z++;
}

//? do while döngüsü
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 12);

console.log("---------");
//?forEach (durdurulamaz, ama pratik)
sayilar.forEach((deger, index) => {
  console.log(index, deger);
});

//? Döngü kontrolü: break, continue
for (let i = 0; i < 10; i++) {
  if (i === 2) continue; // 2'yi atla
  if (i === 7) break; // döngüyü tamamen bitir
  console.log(i);
}

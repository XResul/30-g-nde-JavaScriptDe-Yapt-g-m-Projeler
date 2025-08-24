// console.log("Bu yazı introduction'dan geldi ve hazır");

// console.log(typeof "Resul");
// console.log(typeof 1);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);

// console.log(Math.min(12, 1, -1, 90, 84));

// console.log("Rastgele gelen Rakam = " + Math.random());

// console.log(Math.floor(Math.random() * 12)); //?Math.floor(2.50) gibi bir sayı girersen o sayıyı 3'e yuvarlar
//? Math.random * 12 girersek 12'e kadar olan sayıları rastgele verir 12 dahil değil!!

//!Kullanıcan aldığımız değerler ile randoms sayı üreteceğiz

// let sayi1 = Number(prompt("1. sayi giriniz = "));

// console.log(Math.floor(Math.random() * (sayi1 + 1)));

// let metin = "resulun evine gitmesi gerekiyor.\n 9'da";
// console.log(metin);
//?? /Escape Sequences in Strings
//??  \n: new line
//??  \t: Tab, means 8 spaces
//??  \\: Back slash
//??  \': Single quote (')
//??  \": Double quote (")

let name = "Resul";
let yas = 21;
let metin = `${name} Binici 
Yaşı = ${yas}`;

console.log(metin);

let a = 12;
let b = 3;

let metinSayi = `Alınan iki değerin toplamı ${a} + ${b} = ${a + b}`;

console.log(metinSayi);

//!! bur veriyi böyle çekebiliriz ama ters tırnak kullanmalıyız altgr+virgüle basınca oluyor

let isim = "Resul";
console.log(isim.length);
//?? girilen string ifadenin içinde kaç tane karekterleri sayıyor

let isim2 = "Habil";

console.log(isim2);

let sayi = +"21";
console.log(typeof sayi);

let metin_2 = "kitap okumayı severim oku.";
console.log(metin_2.lastIndexOf("kitap"));

const newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getHours() + ":" + newDate.getUTCMinutes());

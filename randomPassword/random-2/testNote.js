console.log(
  String.fromCharCode(72, 101, 108, 108, 111, "---", 189, 43, 190, 61)
);

// Her sayıya 65 ekliyoruz → 65–90 aralığına kaydırıyoruz.
// 0 + 65 = 65 → "A"
// 25 + 65 = 90 → "Z"
//?Math.floor(Math.random() * 26) 0 ile 25'de dahil arasında rastgele sayı veriyor Çıkan sonucu +65 yapıyor BU KOD işte buda min=65 max=95 arası sayıları veriyor
const randomCode = Math.floor(Math.random() * 26) + 65; // 65–90 arası (A-Z)

const randomCode2 = Math.floor(Math.random() * 26) + 97; //97-122 arası (a-z)
console.log(String.fromCharCode(randomCode).toLowerCase()); //! kücük hali ile yazdırıyoruz
console.log(String.fromCharCode(randomCode).toUpperCase()); //! büyük hali ile yazdırıyoruz
console.log(String.fromCharCode(randomCode2)); //! büyük hali ile yazdırıyoruz

for (let i = 65; i <= 90; i++) {
  document.writeln(String.fromCharCode(i));
}
for (let i = 97; i <= 122; i++) {
  document.writeln(String.fromCharCode(i));
}

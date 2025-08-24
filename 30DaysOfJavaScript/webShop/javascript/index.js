// ===============================
// 1️⃣ Sepet verisi
// ===============================
// Sepete eklenen ürünleri tutacak bir array
const cart = [];

// ===============================
// 2️⃣ Ürünleri API’den çekme
// ===============================
async function urunleriGetir() {
  const productsDiv = document.getElementById("products");
  productsDiv.innerHTML = "Yükleniyor...";

  try {
    // Fake Store API’den ürünleri çekiyoruz
    const response = await fetch("https://fakestoreapi.com/products");

    // Eğer fetch başarısız olursa hata fırlat
    if (!response.ok) throw new Error("Ürünler alınamadı!");

    // JSON formatına çevir
    const products = await response.json();

    // Ürünleri ekrana yazdır
    productsDiv.innerHTML = ""; // Önce yükleniyor yazısını temizle
    products.forEach((product) => {
      // Her ürün için bir div oluştur
      const productDiv = document.createElement("div");
      productDiv.className = "product";

      // Ürün bilgilerini ekle
      productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Fiyat: ${product.price}₺</p>
            <button>Sepete Ekle</button>
          `;

      // Butona tıklanınca sepete ekle
      const button = productDiv.querySelector("button");
      button.addEventListener("click", () => {
        sepeteEkle(product);
      });

      productsDiv.appendChild(productDiv);
    });
  } catch (err) {
    // Hata olursa ekranda göster
    productsDiv.innerHTML = `<p style="color:red">${err}</p>`;
  }
}

// ===============================
// 3️⃣ Sepete ekleme fonksiyonu
// ===============================
function sepeteEkle(product) {
  cart.push(product); // Ürünü array'e ekle
  guncelleSepet(); // Sepeti ekranda güncelle
}

// ===============================
// 4️⃣ Sepeti ekranda güncelleme
// ===============================
function guncelleSepet() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = ""; // Önce temizle

  let toplam = 0;

  cart.forEach((item) => {
    toplam += item.price; // Toplam fiyatı hesapla

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
          <h4>${item.title}</h4>
          <p>Fiyat: ${item.price}₺</p>
        `;
    cartDiv.appendChild(itemDiv);
  });

  // Toplam fiyatı ekranda göster
  document.getElementById("totalPrice").textContent = `Toplam: ${toplam.toFixed(
    2
  )}₺`;
}

// ===============================
// 5️⃣ Sayfa yüklendiğinde ürünleri çek
// ===============================
urunleriGetir();

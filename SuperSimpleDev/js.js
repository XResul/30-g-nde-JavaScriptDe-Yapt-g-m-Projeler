// // ---- Asenkron veri çeken fonksiyon ----
// async function fetchMeals() {
//   try {
//     // API isteği gönder
//     const response = await fetch(
//       "https://www.themealdb.com/api/json/v1/1/random.php"
//     );
//     const data = await response.json();

//     // meals dizisini al
//     const meals = data.meals;

//     // Hedef div'i seç (ID kullanıyoruz)
//     const container = document.getElementById("meal-list");

//     // Eğer div yoksa hata fırlat
//     if (!container) throw new Error("meal-list div bulunamadı!");

//     // Eğer yemek yoksa mesaj göster
//     if (!meals) {
//       container.textContent = "Herhangi bir pizza tarifi bulunamadı.";
//       return;
//     }

//     // Her yemeği HTML'e ekle
//     meals.forEach((meal) => {
//       const div = document.createElement("div");
//       div.classList.add("meal");
//       div.innerHTML = `
//             <h3>${meal.strMeal}</h3>
//             <p><strong>Kategori:</strong> ${meal.strCategory}</p>
//             <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
//           `;
//       container.appendChild(div);
//     });
//   } catch (error) {
//     console.error("Hata:", error);
//   }
// }

// // ---- DOM tamamen yüklendiğinde fonksiyonu çalıştır ----
// document.addEventListener("DOMContentLoaded", fetchMeals);

//! Ürün listesi gerçek projede bunu api'den çekeceğiz

// Örnek ürün listesi (gerçek projede API'den gelir)
const products = [
  { id: 1, name: "Pizza Margherita", price: 50 },
  { id: 2, name: "Burger", price: 30 },
  { id: 3, name: "Pasta", price: 40 },
  { id: 4, name: "Salata", price: 20 },
];

const menuDiv = document.getElementById("menu");
const cartDiv = document.getElementById("cart");

// LocalStorage'dan sepeti al veya boş dizi oluştur
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Sepeti DOM'a güncelle
function renderCart() {
  cartDiv.innerHTML = "";
  cart.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.textContent = `${item.name} - ${item.price}₺ x ${item.quantity}`;
    cartDiv.appendChild(div);
  });
}

// Menü ürünlerini DOM'a ekle
products.forEach((product) => {
  const div = document.createElement("div");
  div.classList.add("menu-item");
  div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Fiyat: ${product.price}₺</p>
      <button>Sepete Ekle</button>
    `;
  const btn = div.querySelector("button");
  btn.addEventListener("click", () => addToCart(product));
  menuDiv.appendChild(div);
});

// Sepete ekleme fonksiyonu
function addToCart(product) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Sepeti temizleme
document.getElementById("clearCart").addEventListener("click", () => {
  cart = [];
  localStorage.removeItem("cart");
  renderCart();
});

// Sayfa açılır açılmaz sepeti göster
renderCart();

// ===============================
// Asenkron fonksiyon: rastgele kullanıcı getir
// ===============================
async function rastgeleKullaniciGetir() {
  const userDiv = document.getElementById("userInfo");

  // Kullanıcıya bilgi veriyoruz: veri yükleniyor
  userDiv.innerHTML = "Yükleniyor...";

  try {
    // 1️⃣ API çağrısı: fetch ile veri çekiyoruz
    // fetch bir Promise döndürür
    const response = await fetch("https://randomuser.me/api/");

    // 2️⃣ API hatalarını kontrol et
    // response.ok false ise hata fırlatıyoruz
    if (!response.ok) throw new Error("Kullanıcı bilgisi alınamadı!");

    // 3️⃣ JSON formatına çeviriyoruz
    // response.json() da bir Promise döndürür, await ile bekliyoruz
    const data = await response.json();

    // 4️⃣ JSON içerisinden kullanıcı bilgisini alıyoruz
    const user = data.results[0];

    // 5️⃣ Kullanıcı bilgilerini ekrana yazdırıyoruz
    userDiv.innerHTML = `
          <img src="${user.picture.large}" alt="Kullanıcı Foto" width="100">
          <p><strong>İsim:</strong> ${user.name.first} ${user.name.last}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Ülke:</strong> ${user.location.country}</p>
        `;
  } catch (err) {
    // 6️⃣ Hata yönetimi: API çalışmazsa veya başka hata olursa
    // Hata mesajını kırmızı renk ile ekrana yazdırıyoruz
    userDiv.innerHTML = `<p style="color:red">${err}</p>`;
  }
}

// ===============================
// Butona tıklanınca asenkron fonksiyonu çağır
// ===============================
document
  .getElementById("fetchUser")
  .addEventListener("click", rastgeleKullaniciGetir);

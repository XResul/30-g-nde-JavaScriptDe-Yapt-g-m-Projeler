const validUsername = "admin";
const validPassword = "1";

// Async fonksiyon ile giriş kontrolü
async function girisKontrol(username, password) {
  const messageDiv = document.getElementById("message");

  try {
    if (!username || !password)
      throw new Error("Kullanıcı adı ve şifre boş bırakılamaz!");

    // Promise ile 1 saniye gecikme ve kontrol
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === validUsername && password === validPassword) {
          resolve(); // Başarılı
        } else {
          reject("Hatalı kullanıcı adı veya şifre!"); // Hatalı giriş
        }
      }, 1000);
    });

    // Başarılı giriş → index.html yönlendirme
    messageDiv.textContent = "Giriş başarılı! Yönlendiriliyorsunuz...";
    messageDiv.className = "success";
    window.location.href = "index.html";
  } catch (err) {
    // Hata varsa ekranda göster
    messageDiv.textContent = err;
    messageDiv.className = "error";
  }
}

// Butona tıklayınca çalıştır
document.getElementById("loginBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  girisKontrol(username, password);
});

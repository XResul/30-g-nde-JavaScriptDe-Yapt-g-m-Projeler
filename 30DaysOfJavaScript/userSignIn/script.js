document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message").value;

  const kullaniciAdi = "Resul";
  const sifre = "1";

  if (userName === kullaniciAdi && sifre === password) {
    document.getElementById("message").textContent = "Giriş başarılı!";
    document.getElementById("message").style.color = "green";
  } else {
    document.getElementById("message").textContent =
      "Kullanıcı adı veya şifre hatalı.";
    document.getElementById("message").style.color = "red";
  }
});

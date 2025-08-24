//?APİ Key'i nasıl aldık??
//OpenWeatherMap
//Bu web siteye kayıt olup
//sonra kendin için özel bir api üretip kullanabilirsin!!
//BURADAN VERİLERİ ÇEKİYORUZ

//!!apiKey'i =  c7f4108bfb4cb2ac209d78cd3a474686

// Butona tıklandığında çalışacak olayı dinliyoruz
document.getElementById("getWeather").addEventListener("click", function () {
  // 1. Kullanıcının girdiği şehir adını al
  const city = document.getElementById("city").value;

  // 2. API keyimizi burada saklıyoruz (kendi keyinizi buraya yazın!)
  const apiKey = "c7f4108bfb4cb2ac209d78cd3a474686";

  // 3. API isteği için URL'yi hazırlıyoruz
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;

  // 4. fetch() ile API'den veri çekiyoruz
  //! Promise
  fetch(url)
    .then((response) => {
      // Eğer cevap başarısızsa hata fırlat
      if (!response.ok) {
        throw new Error("Şehir bulunamadı!");
      }
      // Cevabı JSON formatına çevir
      return response.json();
    })
    .then((data) => {
      // API'den gelen veriyi ekranda göster
      document.getElementById("result").innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Sıcaklık: ${data.main.temp}°C</p>
                <p>Hava: ${data.weather[0].description}</p>
            `;
    })
    .catch((error) => {
      // Bir hata olursa kullanıcıya göster
      document.getElementById(
        "result"
      ).innerHTML = `<p style="color:red">${error}</p>`;
    });
});

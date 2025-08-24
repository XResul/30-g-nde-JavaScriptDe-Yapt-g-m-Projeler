//!! Aldığımız api=   23141d0a
//!! BUTONA TIKLADIĞINDA BU FUNCTİON GERÇEKLEŞCEK
document.getElementById("searchMovie").addEventListener("click", function () {
  //?? KULLANICININ GİRDİĞİ MOVİE BAŞLIĞI BİR DEĞİŞKENE ATILIYOR
  const title = document.getElementById("movieTitle").value;

  //?? ALDIĞIMIZ APİ KEY'İNİ BURAYA YAZDIK
  const apiKey = "23141d0a";

  //?? OMDb api url'sini hazırladık
  const url_ = `https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;

  //?? fetch() ile api'den verileri çekiceğiz
  fetch(url_)
    .then((response) => {
      //?? Gelen istek başarılı değilse hata fırlatır
      if (!response.ok) {
        throw new Error("Film bilgisine ulaşılmadı!!!");
      }
      //?? yanıtı json formatına çecir
      return response.json();
    })
    .then((data) => {
      // 6. OMDb API, film bulunamazsa Response:"False" döndürür
      if (data.response == "False") {
        document.getElementById(
          "result"
        ).innerHTML = `<p style="color:red">${data.Error}</p>`;
        return;
      } else {
        //? gelen json verilerini ekrana yazdırıcağız
        document.getElementById("result").innerHTML = `
                    <h2>${data.Title} (${data.Year})</h2>
                    <img src="${data.Poster}" alt="Poster" width="200"/>
                    <p><strong>IMDb Puanı:</strong> ${data.imdbRating}</p>
                    <p><strong>Tür:</strong> ${data.Genre}</p>
                    <p><strong>Konu:</strong> ${data.Plot}</p>
                `;
      }
    })
    .catch((error) => {
      //!! Hata olursa ekrana yazdırır
      document.getElementById(
        "result"
      ).innerHTML = `<p style="color:red">${error}</p>`;
    });
});

const date = new Date();

let year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getDate(),
  hour = date.getHours(),
  miunte = date.getMinutes(),
  second = date.getSeconds(),
  dayName = date.getDay();

let months = [
  "Ocak",
  "Şubat",
  "Mart",
  "nisan",
  "mayıs",
  "haziran",
  "temmuz",
  "agustos",
  "eylül",
  "ekim",
  "kasım",
  "aralık",
];

let days = [
  "pazar",
  "pazartesi",
  "salı",
  "çarşamba",
  "perşembe",
  "cuma",
  "cumartesi",
];

let humanReadableDate = `${day} ${months[month]} ${year} , ${days[dayName]} , ${hour}:${miunte}:${second}`;
console.log(humanReadableDate);

//16 Agustos 2025 , Cumartesi , 12:11:00

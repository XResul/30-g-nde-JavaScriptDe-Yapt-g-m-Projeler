const toggleBtn = document.getElementById("toggleTheme");
const toggleBtn2 = document.getElementById("toggleTheme_2");

const savedTheme = localStorage.getItem("theme");
const savedTheme2 = localStorage.getItem("theme2");

if (savedTheme) {
  document.body.className = savedTheme;
} else {
  document.body.className = "light"; //varsayılan tema
}

function toggleTheme() {
  if (document.body.classList.contains("light")) {
    document.body.className = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    document.body.className = "light";
    localStorage.setItem("theme", "light");
  }
}

//? ----------------------------Yeşil/Koyu Yeşil---------------------------- ?\\

if (savedTheme2) {
  document.body.className = savedTheme2;
} else {
  document.body.className = "green";
}

function toggleTheme2() {
  if (document.body.classList.contains("green")) {
    document.body.classList = "darkGreen";
    localStorage.setItem("theme2", "darkGreen");
  } else {
    document.body.classList = "green";
    localStorage.setItem("theme2", "green");
  }
}

// Event(olay,durum)-function
toggleBtn.addEventListener("click", toggleTheme);
toggleBtn2.addEventListener("click", toggleTheme2);

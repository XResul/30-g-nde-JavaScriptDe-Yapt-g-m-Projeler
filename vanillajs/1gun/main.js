// Kullanıcıları saklayacak array
const users = [];

// HTML elementlerini seçiyoruz
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const addBtn = document.getElementById("addBtn");
const userList = document.getElementById("userList");

// Kullanıcıları listeye render eden fonksiyon
function renderUsers() {
  userList.innerHTML = ""; // Önce listeyi temizle
  users.forEach((u, index) => {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center p-2 border rounded";

    li.innerHTML = `
          <span>${u.name} (${u.age})</span>
          <div>
            <button class="bg-green-500 text-white px-1 py-1 rounded mr-1">+</button>
            <button class="bg-red-500 text-white px-1 py-1 rounded">Sil</button>
          </div>
        `;

    // Yaş artır butonu
    li.querySelector(".bg-green-500").addEventListener("click", () => {
      u.age += 1; // Yaşı 1 artır
      renderUsers(); // Listeyi tekrar render et
    });

    // Sil butonu
    li.querySelector(".bg-red-500").addEventListener("click", () => {
      users.splice(index, 1); // Array'den çıkar
      renderUsers(); // Listeyi tekrar render et
    });

    userList.appendChild(li);
  });
}

// Ekle butonu event listener
addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value);

  if (name && age) {
    users.push({ name, age }); // Array'e ekle
    nameInput.value = ""; // Inputları temizle
    ageInput.value = "";
    renderUsers(); // Listeyi güncelle
  } else {
    alert("Lütfen isim ve yaş girin!");
  }
});

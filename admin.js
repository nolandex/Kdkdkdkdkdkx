// admin.js
import { db } from "./firebase.js";
import { collection, addDoc, onSnapshot, updateDoc, deleteDoc, doc } 
  from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const form = document.getElementById("form");
const namaInput = document.getElementById("nama");
const hargaInput = document.getElementById("harga");
const produkList = document.getElementById("produk-list");
const colRef = collection(db, "produk");

// CREATE
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  await addDoc(colRef, {
    nama: namaInput.value,
    harga: Number(hargaInput.value)
  });
  namaInput.value = "";
  hargaInput.value = "";
});

// READ (Realtime)
onSnapshot(colRef, (snapshot) => {
  produkList.innerHTML = "";
  snapshot.forEach((docSnap) => {
    const p = docSnap.data();
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <span>${p.nama} - Rp ${p.harga}</span>
      <span>
        <button onclick="updateProduk('${docSnap.id}', ${p.harga})">Edit</button>
        <button onclick="deleteProduk('${docSnap.id}')">Hapus</button>
      </span>
    `;
    produkList.appendChild(div);
  });
});

// UPDATE
window.updateProduk = async (id, harga) => {
  const newHarga = prompt("Masukkan harga baru:", harga);
  if (newHarga) {
    await updateDoc(doc(db, "produk", id), { harga: Number(newHarga) });
  }
};

// DELETE
window.deleteProduk = async (id) => {
  if (confirm("Hapus produk ini?")) {
    await deleteDoc(doc(db, "produk", id));
  }
};

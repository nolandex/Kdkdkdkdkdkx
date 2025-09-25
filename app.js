// app.js
import { db } from "./firebase.js";
import { collection, onSnapshot } 
  from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const produkList = document.getElementById("produk-list");
const colRef = collection(db, "produk");

// Realtime Fetch
onSnapshot(colRef, (snapshot) => {
  produkList.innerHTML = "";
  snapshot.forEach((docSnap) => {
    const p = docSnap.data();
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <h3>${p.nama}</h3>
      <p>Harga: Rp ${p.harga}</p>
    `;
    produkList.appendChild(div);
  });
});

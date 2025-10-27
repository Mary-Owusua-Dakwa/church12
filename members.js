import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const memberForm = document.getElementById("memberForm");
const memberList = document.getElementById("memberList");

// Add Member
memberForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const phone = e.target.phone.value;
  const ministry = e.target.ministry.value;

  try {
    await addDoc(collection(db, "members"), {
      name,
      phone,
      ministry,
      createdAt: new Date(),
    });
    alert("Member added successfully!");
    memberForm.reset();
  } catch (error) {
    console.error(error);
  }
});

// List Members
async function loadMembers() {
  const snapshot = await getDocs(collection(db, "members"));
  memberList.innerHTML = "";
  snapshot.forEach((doc) => {
    const data = doc.data();
    memberList.innerHTML += `<li>${data.name} — ${data.ministry}</li>`;
  });
}

window.onload = loadMembers;

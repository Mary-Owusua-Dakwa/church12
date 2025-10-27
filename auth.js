import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Register
async function register(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Registration successful!");
  } catch (error) {
    alert(error.message);
  }
}

// Login
async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Welcome back!");
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message);
  }
}

// Logout
async function logout() {
  await signOut(auth);
  window.location.href = "login.html";
}

export { register, login, logout };

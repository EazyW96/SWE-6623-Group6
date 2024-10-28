// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsV7uHgY0Og52WnCOErftZ3qX1gOvNTzY",
  authDomain: "hr-event-calendar.firebaseapp.com",
  projectId: "hr-event-calendar",
  storageBucket: "hr-event-calendar.appspot.com",
  messagingSenderId: "609655912368",
  appId: "1:609655912368:web:d972988b8ef1a70b374875",
  measurementId: "G-G5SNH967P7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// List of HR team members' emails
const hrEmails = [
  "jtoney16@students.kennesaw.edu",
  "mprath10@students.kennesaw.edu",
  "nsoumbou@students.kennesaw.edu",
  "sseukapd@students.kennesaw.edu",
  "uunigwe@students.kennesaw.edu",
  "ewideman@students.kennesaw.edu",
];

// Sign-Up Function
window.signUp = async function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = hrEmails.includes(email) ? "HR" : "non-HR";

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), { email: user.email, role: role });
    alert("Sign-Up Successful! Role: " + role);
    showCalendar();
  } catch (error) {
    console.error("Sign-up Error:", error);
    alert("Error signing up: " + error.message);
  }
};

// Login Function
window.login = async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const docSnap = await getDoc(doc(db, "users", user.uid));

    if (docSnap.exists()) {
      const role = docSnap.data().role;
      document.getElementById("login-section").style.display = "none";
      document.getElementById("calendar-section").style.display = "block";
      document.getElementById("addEventButton").style.display =
        role === "HR" ? "block" : "none";
    } else {
      console.error("No role data found for this user.");
    }
  } catch (error) {
    console.error("Login Error:", error);
    alert("Error logging in: " + error.message);
  }
};

// Show calendar section
function showCalendar() {
  document.getElementById("login-section").style.display = "none";
  document.getElementById("calendar-section").style.display = "block";
}

// Placeholder for add event functionality
window.showAddEventForm = function showAddEventForm() {
  alert("Add Event functionality will go here.");
};

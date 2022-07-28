// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS_pE9Xq58kJQM1Gjl3TueEAjTJWQ8bjw",
  authDomain: "food-tracker-d8d05.firebaseapp.com",
  projectId: "food-tracker-d8d05",
  storageBucket: "food-tracker-d8d05.appspot.com",
  messagingSenderId: "685137656929",
  appId: "1:685137656929:web:9a8ff3c8e6aa4884933e20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
// const database = getDatabase(app);

// ************* RESTAURANT FUNCTIONALITY START *********************

// Restaurant Registration 🔻

const registerButton = $("#submitBtn");

registerButton.click((e) => {
  e.preventDefault();

  let email = $("#email").val();
  let password = $("#password").val();
  let ownerName = $("#ownername").val();
  let restaurantName = $("#restname").val();

  if (email === "" || password === "" || ownerName === "" || restaurantName === "") return alert("You should enter all fields.");
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return alert("Enter valid Email ID");
  if (password.length <= 6) return alert("Password should contain more than 6 characters");

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ... user.uid
      try {
        const data = {
          uid: user.uid,
          email,
          ownerName,
          restaurantName,
        };
        await addDoc(collection(db, "restaurants"), data);
        window.location.href = "/html/login.html";
        alert("Restaurant registration is successfull");
      } catch (e) {
        alert("Error adding restaurant to DB.");
        console.error("Error adding document: ", e);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
      alert("Error in restaurant registration");
    });
});

// Restaurant Login

const loginButton = $("#loginBtn");

loginButton.click((e) => {
  e.preventDefault();

  let email = $("#email").val();
  let password = $("#password").val();

  if (email === "" || password === "") return alert("You should enter all fields.");
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return alert("Enter valid Email ID");
  // if (password.length <= 6) return alert("Password should contain more than 6 characters");

  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ... user.uid
      window.location.href = "/html/";
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});


// Restaurant Data Reading - adminmod.html

const restaurantQuerySnapshot = await getDocs(collection(db, "restaurants"));
const totalRestaurants = restaurantQuerySnapshot.size;
$("#totalRestaurantCount").html(totalRestaurants);


// ************* RESTAURANT FUNCTIONALITY END *********************

// ************* ADMIN FUNCTIONALITY START *********************


// ************* ADMIN FUNCTIONALITY END *********************

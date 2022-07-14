

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
  import { getDatabase,set,ref} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
  import { getFirestore,collection, addDoc  } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js'

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCS_pE9Xq58kJQM1Gjl3TueEAjTJWQ8bjw",
    authDomain: "food-tracker-d8d05.firebaseapp.com",
    projectId: "food-tracker-d8d05",
    storageBucket: "food-tracker-d8d05.appspot.com",
    messagingSenderId: "685137656929",
    appId: "1:685137656929:web:9a8ff3c8e6aa4884933e20"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore(app);
  const submitData=document.getElementById('submitBtn');
  const database = getDatabase(app);


  submitData.addEventListener('click', (e) => {
    e.preventDefault();

    var email=$("#email").val()
    var password=$("#password").val()
    var ownerName=$("#ownerName").val()
    var restaurantName=$("#restname").val()
    

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  // ... user.uid

  try {
    const docRef = await addDoc(collection(db, "restaurants"), {
      email,
      ownerName,
      restaurantName
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage,errorCode);

  // ..
  alert('errorMessage')
});

  })

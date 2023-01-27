// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
// import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsnKp8o_kP6f2Db4ogVdci3o_-fB52EoI",
  authDomain: "auth-smokebending.firebaseapp.com",
  databaseURL: "https://auth-smokebending-default-rtdb.firebaseio.com",
  projectId: "auth-smokebending",
  storageBucket: "auth-smokebending.appspot.com",
  messagingSenderId: "643591587971",
  appId: "1:643591587971:web:ee4dad71c72b24bc5073b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const signinButton = document.getElementById("signin-button");
const signupButton = document.getElementById("signup-button");

signupButton.addEventListener("click", (e) => {
  let name = document.getElementById("name").value;
  let nohp = document.getElementById("nohp").value;
  let emailSignup = document.getElementById("email_signup").value;
  let passwordSignup = document.getElementById("psw_signup").value;

  createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      set(ref(database, "users/" + user.uid), {
        name: name,
        nohp: nohp,
        email: emailSignup,
        password: passwordSignup,
      });
    })
    .then(() => {
      alert("User Telah Ditambahkan,Silahkan Sign In");
      location.href = "https://smokebending.up.railway.app/";
    })
    .catch((error) => {
      alert(error);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});

signinButton.addEventListener("click", (e) => {
  let emailSignin = document.getElementById("email_signin").value;
  let passwordSignin = document.getElementById("psw_signin").value;
  signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
    .then((userCredential) => {
      // Signed in
      alert("Berhasil Login!");
      const user = userCredential.user;
      location.href = "https://smokebending.up.railway.app/dashboard";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
    });
});

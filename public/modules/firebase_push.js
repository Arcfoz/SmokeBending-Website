// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  databaseURL: "https://smokebending-86277-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

toogle.addEventListener("click", function toogleInfo(fan) {
  if (toogle.checked == true) {
    fan = 1;
  } else {
    fan = 0;
  }
  console.log(fan);
  set(ref(db, `smokebending/sensor2`), {
    fan: fan,
  });
});

speed.addEventListener("click", function speedInfo(fanspeed) {
  if (speed.checked == true) {
    fanspeed = 1;
  } else {
    fanspeed = 0;
  }
  console.log(speed.checked);
  set(ref(db, `smokebending/sensor3`), {
    fanspeed: fanspeed,
  });
});

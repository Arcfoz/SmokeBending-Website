// Dark theme localstorage
const lightIcon = document.querySelector(".swap-on");
const darkIcon = document.querySelector(".swap-off");
const toggle = document.getElementById("toggleTheme");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "dark");
    toggle.checked = true;
    return;
  }
  toggle.checked = false;
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    return;
  }
  document.documentElement.classList.add("dark");
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
};

lightIcon.addEventListener("click", () => {
  themeSwitch();
});

darkIcon.addEventListener("click", () => {
  themeSwitch();
});

themeCheck();
//

const value = document.getElementById("value");
const valueMq7 = document.getElementById("value-mq7");
const toogle = document.getElementById("toggle");
const fanLogo = document.getElementById("fan-logo");

const url = "https://smokebending.up.railway.app/api";

var api = {};

setInterval(() => {
  fetch(url)
    .then((hasil) => hasil.json())
    .then((res) => {
      api = res;
      console.log(api);
      // const nilai_mq7 = api.sensor1.mq7.toFixed()
      valueMq7.innerHTML = api.sensor1.mq7.toFixed(2).toString() + "V";
      if (api.sensor2.kipas == 1) {
        value.innerHTML = "ON";
        toogle.checked = true;
      } else {
        value.innerHTML = "OFF";
        toogle.checked = false;
      }
    });
}, 1000);

toogle.addEventListener("click", toogleInfo);

async function toogleInfo() {
  if (toogle.checked == true) {
    api.sensor2.kipas = 1;
  } else {
    api.sensor2.kipas = 0;
  }
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parcel: api.sensor2,
    }),
  });
}

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/signinsignup.html");
});

app.get("/dashboard", (req, res) => {
  res.sendFile(__dirname + "/public/dashboard.html");
});

//Listen
app.listen(port, () => {
  console.log(`Aplikasi berjalan`);
});

var antares = require("antares-http");
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

//Restapi
app.get("/api", function (req, res) {
  antares.setAccessKey("3b71941b4e3ba492:e952e7b073875cb5");
  const mq7 = antares.get("Smart-Firebending", "mq7-sensor").then(function (response) {
    const data = response.content;
    return data;
  });

  const fan = antares.get("Smart-Firebending", "fan-sensor").then(function (response) {
    const data = response.content;
    return data;
  });

  const value = async () => {
    const sensor1 = await mq7;
    const sensor2 = await fan;
    const api = { sensor1, sensor2 };
    res.json(api);
  };

  value();
});

//post
app.post("/api", (req, res) => {
  const { parcel } = req.body;
  if (!parcel) {
    return res.status(400).send({ status: "failed" });
  }
  res.status(200).send({ status: "recieved" });
  antares.setAccessKey("3b71941b4e3ba492:e952e7b073875cb5");
  antares.send(parcel, "Smart-Firebending", "fan-sensor");
});

//Listen
app.listen(port, () => {
  console.log(`Aplikasi berjalan di port http://localhost:${port}`)
});

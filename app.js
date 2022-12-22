var antares = require("antares-http");
const express = require("express");
const app = express();
const port = process.env.PORT || 80;

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
  antares.setAccessKey("5c330f830796899e:66efb49cfa51734e");
  const mq7 = antares.get("PengendaliAsap", "MQ7").then(function (response) {
    const data = response.content;
    return data;
  });

  const fan = antares.get("PengendaliAsap", "FAN").then(function (response) {
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
  antares.setAccessKey("5c330f830796899e:66efb49cfa51734e");
  antares.send(parcel, "PengendaliAsap", "FAN");
});

//Listen
app.listen(port, () => {
  console.log(`Aplikasi berjalan`);
});

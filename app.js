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
  antares.setAccessKey("72b10c7d37ec154d:a4b0643a1ccd8e0c");
  const mq7 = antares.get("SmokeBending", "mq7").then(function (response) {
    const data = response.content;
    return data;
  });

  const fan = antares.get("SmokeBending", "fan").then(function (response) {
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
  antares.setAccessKey("72b10c7d37ec154d:a4b0643a1ccd8e0c");
  antares.send(parcel, "SmokeBending", "fan");
});

//Listen
app.listen(port, () => {
  console.log(`Aplikasi berjalan`)
});

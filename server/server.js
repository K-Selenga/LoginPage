const express = require("express");
const app = express();
const port = 8000;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/api/login", (req, res) => {
  console.log("Received login request:", req.body);
  const { email, password, rememberMe } = req.body;
  const adminEmail = "admin@example.com";
  const adminPassword = "password";
  if (email === adminEmail && password === adminPassword) {
    res.status(200).send({ success: true, message: "Login successful!" });
  } else {
    res
      .status(401)
      .send({ success: false, message: "Incorrect email or password" });
  }
});

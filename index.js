const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

const port = 5000;
//Middlewares

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded());

//CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});
app.get("/", (req, res) => {
  console.log(req.query);
  console.log("We got a hit");
  res.json({ username: "purna" });
});
app.listen(port, () => {
  console.log("The Server is running on Port ", port);
});

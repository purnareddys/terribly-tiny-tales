const express = require("express");
const app = express();

const port = 5000;

app.get("/data", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log("The Server is running on Port ", port);
});

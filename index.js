// Dependencies
const express = require("express");
const axios = require("axios");
var url = require("url");

const app = express();

//PORT
const port = 5000;

//Middlewares
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

// making a get request to the url
const getData = async () => {
  try {
    return await axios
      .get("https://terriblytinytales.com/test.txt")
      .then((res) => res.data);
  } catch (error) {
    console.error(error);
  }
};

//Getting the request and
app.get("/:id", (req, res) => {
  //Get the URL and parse it
  var parsedUrl = url.parse(req.url, true);

  //Get the path
  var path = parsedUrl.pathname;

  //Get the trimmed Path
  var trimmedPath = path.replace(/^\/+|\/+$/g, "");
  console.log(trimmedPath);

  console.log("We got a hit");

  //Return the response
  (async () => {
    const data = await getData();
    finalData = data;

    //Find the frequencey //TODO

    //Return the Nth item //TODO
    return res.json(data);
  })().catch((err) => {
    console.log(err);
  });
});

app.listen(port, () => {
  console.log("The Server is running on Port ", port);
});

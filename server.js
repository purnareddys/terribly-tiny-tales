// Importing Modules
const express = require("express");
const axios = require("axios");
const path = require("path");
var url = require("url");

//Define  Global Variables
const app = express();
const port = process.env.PORT || 8080;

//Middlewares
app.use(express.json());
app.use(express.urlencoded());

//CORS //Configuration
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

// sorting function for sorting with decreasing frequency
const sortDec = (x, y) => {
  return y.count - x.count;
};

//Getting the request and
app.get("/:id", (req, res) => {
  //Get the URL and parse it
  let parsedUrl = url.parse(req.url, true);

  //Get the trimmed Path
  let trimmedPath = parsedUrl.pathname.replace(/^\/+|\/+$/g, "");

  let N = trimmedPath;

  //for testing purpose
  console.log("We got a hit");

  //Return the response
  (async () => {
    //fetch the data
    const data = await getData();
    finalData = data;

    //Find the frequency of every word
    const splitedData = data.split(/\s+/);

    let hashTable = {};

    splitedData.forEach((word) => {
      if (hashTable.hasOwnProperty(word)) {
        hashTable[word] += 1;
      } else {
        hashTable[word] = 1;
      }
    });

    let wordsArray = [];
    wordsArray = Object.keys(hashTable).map((word) => {
      return {
        word: word,
        count: hashTable[word],
      };
    });
    wordsArray.sort((x, y) => sortDec(x, y));

    //Return the Nth item
    //Using Filter method to return the TOP N Words
    let toSendData = wordsArray.filter((word, index) => {
      return index < N;
    });

    return res.json(toSendData);
  })().catch((err) => {
    console.log(err);
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("The Server is running on Port ", port);
});

import { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({extended: true}));

app.post("/submit", (req, res) => {
  var bName = req.body["street"] + req.body["pet"]
  res.send(`<h1>Band Name Generator is: </h1><h1>${bName}</h1>`);
})




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

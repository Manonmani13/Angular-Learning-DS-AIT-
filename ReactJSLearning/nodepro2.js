const express = require("express");
const cors = require("cors");
const app = express();
var bp=require("body-parser")
app.use(bp.json())
app.use(cors());
app.use(express.json());  // to parse JSON in POST requests

app.get("/met1", function (req, res) {
  res.send("From Backend");
});

app.post("/met2", function (req, res) {
  console.log(req.body);  // should log { name: 'Ankit' }
  res.send("From Backend Post Method");
});

app.listen(5000, function () {
  console.log("server started");
});

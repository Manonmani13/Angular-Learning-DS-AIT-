var mj = require("mongojs");
var db = mj("mongodb://localhost:27017/angular730", ["tbl"]);

var exp = require("express");
var app = exp();

var cr = require("cors");
app.use(cr());

// Body parser middleware (needed for POST requests)
app.use(exp.json());

app.listen(5000, function () {
  console.log("server started on http://localhost:5000");
});

// ✅ Corrected GET route
app.get("/getData", function (req, res) {
  db.tbl.find(function (err, data) {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "DB error" });
    } else {
      res.send({ records: data });  // frontend expects `records` key
    }
  });
});

// You can fill this in later
app.post("/postData", function (req, res) {
    db.tbl.insert(req.body);
  res.send({result:"Inserted"});
});

app.post("/deleteData", function (req, res) {
  db.tbl.remove(req.body, function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "DB error" });
    } else {
      res.send({ result: "Deleted", details: result });
    }
  });
});

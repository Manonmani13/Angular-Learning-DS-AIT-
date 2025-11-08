// File: crudapis.js

const express = require("express");
const mongojs = require("mongojs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const db = mongojs("mongodb://localhost:27017/angular730");
const ObjectId = mongojs.ObjectId; // ✅ Needed for delete/update by _id

app.use(cors());
app.use(bodyParser.json());

// ✅ GET ALL
app.get("/getData", (req, res) => {
  db.tbl.find((err, result) => {
    if (err) return res.status(500).send("Error retrieving data");
    res.json(result);
  });
});

// ✅ INSERT
app.post("/insertData", (req, res) => {
  db.tbl.save(req.body, (err, saved) => {
    if (err) return res.status(500).send("Error saving data");
    res.send("Record Added");
  });
});

// ✅ DELETE
app.post("/deleteData", (req, res) => {
  const rowid = ObjectId(req.body._id);
  db.tbl.remove({ _id: rowid }, (err, result) => {
    if (err) return res.status(500).send({ error: "Delete failed" });
    res.send({ result: "Row removed" });
  });
});

// ✅ UPDATE
app.post("/update", (req, res) => {
  const rowid = ObjectId(req.body.oid); // ⚠️ Notice: we use `oid` from body
  const updatedData = {
    uname: req.body.un,
    city: req.body.ct
  };
  db.tbl.update({ _id: rowid }, { $set: updatedData }, (err, result) => {
    if (err) return res.status(500).send({ error: "Update failed" });
    res.send({ result: "Record Updated" });
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

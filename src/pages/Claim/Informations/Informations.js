const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Root",
  database: "reclamation",
});

router.get("/api/fiche-reclamation/:id/informations", (req, res) => {
  const claimId = req.params.id;
  db.query("SELECT * FROM claims WHERE id = ?", [claimId], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;

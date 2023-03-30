import solutionDistributionFromClaims from "../../../asset/Statistics/SolutionStatistic/solutionDistributionFromClaims";
import refoundDistributionFromClaims from "../../../asset/Statistics/SolutionStatistic/refoundDistributionFromClaims";

const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Root",
  database: "reclamation",
});

router.get("/api/statistiques/solution/graphique1/:firstChosenSeason", (req, res) => {
  const firstChosenSeason = req.params.firstChosenSeason;
  db.query("SELECT * FROM claims WHERE seasonValue = ?", [firstChosenSeason], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(solutionDistributionFromClaims([result]));
    }
  });
});

router.get("/api/statistiques/solution/graphique2/:firstChosenSeason", (req, res) => {
  const firstChosenSeason = req.params.firstChosenSeason;
  db.query("SELECT * FROM claims WHERE seasonValue = ?", [firstChosenSeason], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(refoundDistributionFromClaims([result]));
    }
  });
});

router.get("/api/statistiques/solution/graphique3/:secondChosenSeason", (req, res) => {
  const secondChosenSeason = req.params.secondChosenSeason;
  db.query("SELECT * FROM claims WHERE seasonValue = ?", [secondChosenSeason], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(solutionDistributionFromClaims([result]));
    }
  });
});

router.get("/api/statistiques/solution/graphique4/:secondChosenSeason", (req, res) => {
  const secondChosenSeason = req.params.secondChosenSeason;
  db.query("SELECT * FROM claims WHERE seasonValue = ?", [secondChosenSeason], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(refoundDistributionFromClaims([result]));
    }
  });
});

module.exports = router;

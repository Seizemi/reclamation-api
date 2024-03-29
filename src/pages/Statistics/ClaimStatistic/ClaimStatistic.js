import weekNumberListFromClaims from "../../../asset/Statistics/ClaimStatistic/weekNumberListFromClaims";
import currentWeekFromDate from "../../../asset/Statistics/ClaimStatistic/currentWeekFromDate";
import stateDistributionFromClaims from "../../../asset/Statistics/ClaimStatistic/stateDistributionFromClaims";
import skissimDistributionFromClaims from "../../../asset/Statistics/ClaimStatistic/skissimDistributionFromClaims";

const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Root",
  database: "reclamation",
});

router.get("/api/statistiques/reclamation/graphique1/:firstChosenSeason/:currentSeasonValue", (req, res) => {
  const firstChosenSeason = req.params.firstChosenSeason;
  const currentSeasonValue = req.params.currentSeasonValue;
  db.query("SELECT * FROM claims WHERE seasonValue = ?", [firstChosenSeason], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      const currentWeek = currentWeekFromDate(new Date());
      res.send(weekNumberListFromClaims([result], currentWeek, firstChosenSeason, currentSeasonValue));
    }
  });
});

router.get("/api/statistiques/reclamation/graphique2/:secondChosenSeason/:currentSeasonValue", (req, res) => {
  const secondChosenSeason = req.params.secondChosenSeason;
  const currentSeasonValue = req.params.currentSeasonValue;
  db.query("SELECT * FROM claims WHERE seasonValue = ?", [secondChosenSeason], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      const currentWeek = currentWeekFromDate(new Date());
      res.send(weekNumberListFromClaims([result], currentWeek, secondChosenSeason, currentSeasonValue));
    }
  });
});

router.get("/api/statistiques/reclamation/graphique3/:secondChosenSeason", (req, res) => {
  const secondChosenSeason = req.params.secondChosenSeason;
  db.query("SELECT * FROM claims WHERE seasonValue = ?", [secondChosenSeason], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(stateDistributionFromClaims([result]));
    }
  });
});

router.get("/api/statistiques/reclamation/graphique4/:secondChosenSeason", (req, res) => {
  const secondChosenSeason = req.params.secondChosenSeason;
  db.query("SELECT * FROM claims WHERE seasonValue = ?", [secondChosenSeason], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(stateDistributionFromClaims([result]));
    }
  });
});

router.get("/api/statistiques/reclamation/graphique5/:secondChosenSeason", (req, res) => {
  const secondChosenSeason = req.params.secondChosenSeason;
  db.query("SELECT * FROM claims WHERE seasonValue = ?", [secondChosenSeason], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(skissimDistributionFromClaims([result]));
    }
  });
});

router.get("/api/statistiques/reclamation/graphique6/:secondChosenSeason", (req, res) => {
  const secondChosenSeason = req.params.secondChosenSeason;
  db.query("SELECT * FROM claims WHERE seasonValue = ?", [secondChosenSeason], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(skissimDistributionFromClaims([result]));
    }
  });
});

module.exports = router;

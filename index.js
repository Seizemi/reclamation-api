const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Root",
  database: "reclamation",
});

const informations = require("./src/pages/Claim/Informations/Informations");
const Edition = require("./src/pages/Claim/Edition/Edition");
const DashboardClaim = require("./src/pages/Dashboard/DashboardClaim");
const NewClaim = require("./src/pages/NewProject/NewClaim/NewClaim");
const ClaimStatistic = require("./src/pages/Statistics/ClaimStatistic");

app.use(cors());
app.use(express.json());

app.use(DashboardClaim);

app.use(informations);

app.use(Edition);

app.use(NewClaim);

app.use(ClaimStatistic);

app.listen(3001, () => {
  console.log("console running on port 3001");
});

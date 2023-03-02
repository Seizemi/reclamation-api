const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Root",
  database: "reclamation",
});

app.get("/api/dashboard/reclamation", (req, res) => {
  db.query("SELECT * FROM claims", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/fiche-reclamation/:id/informations", (req, res) => {
  const claimId = req.params.id;
  db.query("SELECT * FROM claims WHERE id = ?", [claimId], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/api/fiche-reclamation/:id/informations", (req, res) => {
  const claimId = req.params.id;
  const bookingNumber = req.body.bookingNumber;
  const customerName = req.body.customerName;
  const salesChannel = req.body.salesChannel;
  const dateOfArrival = req.body.dateOfArrival === null ? null : new Date(req.body.dateOfArrival);
  const dateOfDeparture = req.body.dateOfDeparture === null ? null : new Date(req.body.dateOfDeparture);
  const seasonLabel = req.body.seasonLabel;
  const seasonValue = req.body.seasonValue;
  const state = req.body.state;
  const stateLabel = req.body.stateLabel;
  const followedBy = req.body.followedBy;
  const customerAkioNumber = req.body.customerAkioNumber;
  const supplierAkioNumber = req.body.supplierAkioNumber;
  const service = req.body.service;
  const serviceId = req.body.serviceId;
  const supplier = req.body.supplier;
  const product = req.body.product;
  const status = req.body.status;
  const reason = req.body.reason;
  const claimSummary = req.body.claimSummary;
  const solution = req.body.solution;
  const purposeOfSolution = req.body.purposeOfSolution;
  const dateOfReceivedClaim = req.body.dateOfReceivedClaim === null ? null : new Date(req.body.dateOfReceivedClaim);
  const dateOfStartFollowUp = req.body.dateOfStartFollowUp === null ? null : new Date(req.body.dateOfStartFollowUp);
  const dateLastUpdate = req.body.dateLastUpdate === null ? null : new Date(req.body.dateLastUpdate);
  const updateReason = req.body.updateReason;
  const dateEndOfFollowUp = req.body.dateEndOfFollowUp === null ? null : new Date(req.body.dateEndOfFollowUp);
  const refound = req.body.refound;
  const refoundState = req.body.refoundState;
  const customerVoucher = req.body.customerVoucher;
  const customerUsedVoucher = req.body.customerUsedVoucher;
  const supplierRefund = req.body.supplierRefund;
  const customerSuppInfo = req.body.customerSuppInfo;
  const supplierSuppInfo = req.body.supplierSuppInfo;
  db.query(
    "UPDATE claims\
    SET bookingNumber=?, customerName=?, salesChannel=?, dateOfArrival=?, dateOfDeparture=?, seasonLabel=?, seasonValue=?, state=?, stateLabel=?, followedBy=?, customerAkioNumber=?, supplierAkioNumber=?, service=?, serviceId=?, supplier=?, product=?,status=?, reason=?, claimSummary=?, solution=?, purposeOfSolution=?, dateOfReceivedClaim=?, dateOfStartFollowUp=?, dateLastUpdate=?, updateReason=?, dateEndOfFollowUp=?, refound=?, refoundState=?, customerVoucher=?, customerUsedVoucher=?, supplierRefund=?, customerSuppInfo=?, supplierSuppInfo=?\
    WHERE id = ?",
    [
      bookingNumber,
      customerName,
      salesChannel,
      dateOfArrival,
      dateOfDeparture,
      seasonLabel,
      seasonValue,
      state,
      stateLabel,
      followedBy,
      customerAkioNumber,
      supplierAkioNumber,
      service,
      serviceId,
      supplier,
      product,
      status,
      reason,
      claimSummary,
      solution,
      purposeOfSolution,
      dateOfReceivedClaim,
      dateOfStartFollowUp,
      dateLastUpdate,
      updateReason,
      dateEndOfFollowUp,
      refound,
      refoundState,
      customerVoucher,
      customerUsedVoucher,
      supplierRefund,
      customerSuppInfo,
      supplierSuppInfo,
      claimId,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/api/nouvelle-reclamation/reclamation", (req, res) => {
  const bookingNumber = req.body.bookingNumber;
  const customerName = req.body.customerName;
  const salesChannel = req.body.salesChannel;
  const dateOfArrival = req.body.dateOfArrival;
  const dateOfDeparture = req.body.dateOfDeparture;
  const seasonLabel = req.body.seasonLabel;
  const seasonValue = req.body.seasonValue;
  const state = req.body.state;
  const stateLabel = req.body.stateLabel;
  const followedBy = req.body.followedBy;
  const customerAkioNumber = req.body.customerAkioNumber;
  const supplierAkioNumber = req.body.supplierAkioNumber;
  const service = req.body.service;
  const serviceId = req.body.serviceId;
  const supplier = req.body.supplier;
  const product = req.body.product;
  const status = req.body.status;
  const reason = req.body.reason;
  const claimSummary = req.body.claimSummary;
  const solution = req.body.solution;
  const purposeOfSolution = req.body.purposeOfSolution;
  const dateOfReceivedClaim = req.body.dateOfReceivedClaim;
  const dateOfStartFollowUp = req.body.dateOfStartFollowUp;
  const dateLastUpdate = req.body.dateLastUpdate;
  const updateReason = req.body.updateReason;
  const dateEndOfFollowUp = req.body.dateEndOfFollowUp;
  const refound = req.body.refound;
  const refoundState = req.body.refoundState;
  const customerVoucher = req.body.customerVoucher;
  const customerUsedVoucher = req.body.customerUsedVoucher;
  const supplierRefund = req.body.supplierRefund;
  const customerSuppInfo = req.body.customerSuppInfo;
  const supplierSuppInfo = req.body.supplierSuppInfo;

  db.query(
    "INSERT INTO claims \
    (bookingNumber,customerName,salesChannel,dateOfArrival,dateOfDeparture,seasonLabel,seasonValue,state,stateLabel,followedBy,customerAkioNumber,supplierAkioNumber,service,serviceId,supplier,product,status,reason,claimSummary,solution,purposeOfSolution,dateOfReceivedClaim,dateOfStartFollowUp,dateLastUpdate,updateReason,dateEndOfFollowUp,refound,refoundState,customerVoucher,customerUsedVoucher,supplierRefund,customerSuppInfo,supplierSuppInfo) \
    VALUE \
    (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      bookingNumber,
      customerName,
      salesChannel,
      dateOfArrival,
      dateOfDeparture,
      seasonLabel,
      seasonValue,
      state,
      stateLabel,
      followedBy,
      customerAkioNumber,
      supplierAkioNumber,
      service,
      serviceId,
      supplier,
      product,
      status,
      reason,
      claimSummary,
      solution,
      purposeOfSolution,
      dateOfReceivedClaim,
      dateOfStartFollowUp,
      dateLastUpdate,
      updateReason,
      dateEndOfFollowUp,
      refound,
      refoundState,
      customerVoucher,
      customerUsedVoucher,
      supplierRefund,
      customerSuppInfo,
      supplierSuppInfo,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Réclamation crée");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("console running on port 3001");
});

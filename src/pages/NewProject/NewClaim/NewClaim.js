const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Root",
  database: "reclamation",
});

router.post("/api/nouvelle-reclamation/reclamation", (req, res) => {
  const bookingNumber = req.body.bookingNumber;
  const customerName = req.body.customerName;
  const salesChannel = req.body.salesChannel;
  const language = req.body.language;
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
      (bookingNumber,customerName,salesChannel,language,dateOfArrival,dateOfDeparture,seasonLabel,seasonValue,state,stateLabel,followedBy,customerAkioNumber,supplierAkioNumber,service,serviceId,supplier,product,reason,claimSummary,solution,purposeOfSolution,dateOfReceivedClaim,dateOfStartFollowUp,dateLastUpdate,updateReason,dateEndOfFollowUp,refound,refoundState,customerVoucher,customerUsedVoucher,supplierRefund,customerSuppInfo,supplierSuppInfo) \
      VALUE \
      (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      bookingNumber,
      customerName,
      salesChannel,
      language,
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

module.exports = router;

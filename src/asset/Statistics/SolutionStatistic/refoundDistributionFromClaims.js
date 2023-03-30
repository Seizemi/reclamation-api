const refoundDistributionFromClaims = ([claims]) => {
  let totalRefound = 0;
  let supplierRefound = 0;
  let travelfactoryRefound = 0;

  let totalRefoundTampon = 0;
  let supplierRefoundTampon = 0;

  claims.forEach((claim) => {
    totalRefoundTampon = claim.refound;
    supplierRefoundTampon = claim.supplierRefund;
    if (totalRefoundTampon != 0 && totalRefoundTampon != undefined) {
      totalRefound = totalRefound + totalRefoundTampon;
    }
    if (supplierRefoundTampon != 0 && supplierRefoundTampon != undefined) {
      supplierRefound = supplierRefound + supplierRefoundTampon;
    }
  });

  travelfactoryRefound = totalRefound - supplierRefound;

  return [travelfactoryRefound, supplierRefound, totalRefound];
};

export default refoundDistributionFromClaims;

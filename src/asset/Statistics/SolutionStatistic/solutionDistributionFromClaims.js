const solutionDistributionFromClaims = ([claims]) => {
  let numberSolutionRefound = 0;
  let numberSolutionVoucher = 0;
  let numberSolutionBoth = 0;
  let numberSolutonRefused = 0;

  let pourcentageNumberSolutionRefound = 0;
  let pourcentageNumberSolutionVoucher = 0;
  let pourcentageNumberSolutionBoth = 0;
  let pourcentageNumberSolutonRefused = 0;
  let numberTotalClaims = 0;

  let SolutionDistribution = [];

  claims.forEach((claim) => {
    switch (claim.solution) {
      case "Remboursement":
        numberSolutionRefound++;
        break;
      case "Avoir":
        numberSolutionVoucher++;
        break;
      case "Remboursement et avoir":
        numberSolutionBoth++;
        break;
      case "Refus de la demande":
        numberSolutonRefused++;
        break;
    }
  });
  numberTotalClaims = numberSolutionRefound + numberSolutionVoucher + numberSolutionBoth + numberSolutonRefused;

  pourcentageNumberSolutionRefound = (numberSolutionRefound / numberTotalClaims) * 100;
  pourcentageNumberSolutionVoucher = (numberSolutionVoucher / numberTotalClaims) * 100;
  pourcentageNumberSolutionBoth = (numberSolutionBoth / numberTotalClaims) * 100;
  pourcentageNumberSolutonRefused = (numberSolutonRefused / numberTotalClaims) * 100;

  SolutionDistribution = [
    pourcentageNumberSolutionRefound,
    pourcentageNumberSolutionVoucher,
    pourcentageNumberSolutionBoth,
    pourcentageNumberSolutonRefused,
  ];

  return SolutionDistribution;
};

export default solutionDistributionFromClaims;

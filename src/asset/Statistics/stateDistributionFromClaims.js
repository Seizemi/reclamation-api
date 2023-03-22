const stateDistributionFromClaims = ([claims]) => {
  let numberWaitingForSupplier = 0;
  let numberWaitingForClient = 0;
  let numberClose = 0;
  let numberCloseWithoutAnswer = 0;

  let pourcentageWaitingForSupplier = 0;
  let pourcentageWaitingForClient = 0;
  let pourcentageClose = 0;
  let pourcentageCloseWithoutAnswer = 0;
  let numberTotalClaims = 0;

  let stateDistribution = [];

  claims.forEach((claim) => {
    switch (claim.state) {
      case "enAttenteFournisseur":
        numberWaitingForSupplier++;
        break;
      case "enAttenteClient":
        numberWaitingForClient++;
        break;
      case "termine":
        numberClose++;
        break;
      case "closSansReponse":
        numberCloseWithoutAnswer++;
        break;
    }
  });
  numberTotalClaims = numberWaitingForSupplier + numberWaitingForClient + numberClose + numberCloseWithoutAnswer;

  pourcentageWaitingForSupplier = (numberWaitingForSupplier / numberTotalClaims) * 100;
  pourcentageWaitingForClient = (numberWaitingForClient / numberTotalClaims) * 100;
  pourcentageClose = (numberClose / numberTotalClaims) * 100;
  pourcentageCloseWithoutAnswer = (numberCloseWithoutAnswer / numberTotalClaims) * 100;

  stateDistribution = [
    pourcentageWaitingForSupplier,
    pourcentageWaitingForClient,
    pourcentageClose,
    pourcentageCloseWithoutAnswer,
  ];
  return stateDistribution;
};

export default stateDistributionFromClaims;

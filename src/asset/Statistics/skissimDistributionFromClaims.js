const skissimDistributionFromClaims = ([claims]) => {
  let numberSkissimSelect = 0;
  let numberSkissimPremium = 0;
  let numberSkissimClassic = 0;
  let numberNotSkissim = 0;

  let pourcentageSkissimSelect = 0;
  let pourcentageSkissimPremium = 0;
  let pourcentageSkissimClassic = 0;
  let pourcentageNotSkissim = 0;
  let numberTotalClaims = 0;

  let skissimDistribution = [];

  claims.forEach((claim) => {
    switch (claim.skissimType) {
      case "Select":
        numberSkissimSelect++;
        break;
      case "Premium":
        numberSkissimPremium++;
        break;
      case "Classic":
        numberSkissimClassic++;
        break;
      default:
        numberNotSkissim++;
        break;
    }
  });
  numberTotalClaims = numberSkissimSelect + numberSkissimPremium + numberSkissimClassic + numberNotSkissim;

  pourcentageSkissimSelect = (numberSkissimSelect / numberTotalClaims) * 100;
  pourcentageSkissimPremium = (numberSkissimPremium / numberTotalClaims) * 100;
  pourcentageSkissimClassic = (numberSkissimClassic / numberTotalClaims) * 100;
  pourcentageNotSkissim = (numberNotSkissim / numberTotalClaims) * 100;

  skissimDistribution = [
    pourcentageSkissimSelect,
    pourcentageSkissimPremium,
    pourcentageSkissimClassic,
    pourcentageNotSkissim,
  ];

  return skissimDistribution;
};
export default skissimDistributionFromClaims;

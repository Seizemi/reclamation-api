const weekNumberListFromClaims = ([claims]) => {
  claims.forEach((claim) => {
    claimDate = new Date(claim.dateOfStartFollowUp);
    startDate = new Date(claimDate.getFullYear(), 0, 1);
    var days = Math.floor((claimDate - startDate) / (24 * 60 * 60 * 1000));
    var claimWeekNumber = Math.ceil(days / 7);

    switch (claim.language) {
      case "FR":
        dataListeOfWeekFR.push(claimWeekNumber);
        dataListeOfWeekTotal.push(claimWeekNumber);
        break;
      case "EN":
        dataListeOfWeekEN.push(claimWeekNumber);
        dataListeOfWeekTotal.push(claimWeekNumber);
        break;
      case "NL":
        dataListeOfWeekNL.push(claimWeekNumber);
        dataListeOfWeekTotal.push(claimWeekNumber);
        break;
    }
  });

  let counterFR = 0;
  let counterEN = 0;
  let counterNL = 0;
  let counterTot = 0;

  for (let week = 1; week <= 53; week++) {
    dataListeOfWeekFR.forEach((element) => {
      if (element == week) {
        counterFR++;
      }
    });
    weekNumberList.FR.push(counterFR);

    dataListeOfWeekEN.forEach((element) => {
      if (element == week) {
        counterEN++;
      }
    });
    weekNumberList.EN.push(counterEN);

    dataListeOfWeekNL.forEach((element) => {
      if (element == week) {
        counterNL++;
      }
    });
    weekNumberList.NL.push(counterNL);

    dataListeOfWeekTotal.forEach((element) => {
      if (element == week) {
        counterTot++;
      }
    });
    weekNumberList.Total.push(counterTot);
  }

  return weekNumberList;
};

export default weekNumberListFromClaims;

import currentWeekFromDate from "./currentWeekFromDate.js";

const weekNumberListFromClaims = ([claims], currentWeek, seasonValue) => {
  const dataListeOfWeekFR = [];
  const dataListeOfWeekEN = [];
  const dataListeOfWeekNL = [];
  const dataListeOfWeekTotal = [];

  const weekNumberList = {
    FR: [],
    EN: [],
    NL: [],
    Total: [],
  };

  let summerMaxWeekNumber = 39;
  let winterMaxWeekNumber = 25;
  let claimLabel = seasonValue.substring(0, 3);
  const currentYear = new Date().getFullYear();

  if (claimLabel === "ete") {
    let claimSummerYear = new Date(seasonValue.substring(4, 8)).getFullYear();
    if (claimSummerYear === currentYear) {
      summerMaxWeekNumber = currentWeek;
    }
  } else {
    claimLabel = seasonValue.substring(0, 5);
    let claimFirstYearOfWinter = new Date(seasonValue.substring(5, 9)).getFullYear();
    let claimSecondYearOfWinter = new Date(seasonValue.substring(10, 14)).getFullYear();
    if (currentYear === claimFirstYearOfWinter || currentYear === claimSecondYearOfWinter) {
      //Attention : Ici ce test devrait être fait sur la saison et non sur l'année car sur l'année N+1 on limite la weekNumber à celle en cours
      winterMaxWeekNumber = currentWeek;
    }
  }

  const firstWeekOfSummer = 26;
  const lastWeekOfSummer = summerMaxWeekNumber;
  const firstWeekOfWinter = 40;
  const lastWeekOfWinter = winterMaxWeekNumber;

  claims.forEach((claim) => {
    var claimWeekNumber = currentWeekFromDate(claim.dateOfStartFollowUp);

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

  if (claimLabel === "hiver") {
    for (let week = firstWeekOfWinter; week <= 53; week++) {
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

    for (let week = 1; week <= lastWeekOfWinter; week++) {
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
  } else {
    for (let week = firstWeekOfSummer; week <= lastWeekOfSummer; week++) {
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
  }

  return weekNumberList;
};
export default weekNumberListFromClaims;

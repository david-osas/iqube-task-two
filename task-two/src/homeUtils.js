async function getData(setStatic, setDynamic, setMeta, setLoad){
  let res = await fetch('https://covidnigeria.herokuapp.com/api');
  let resJson = await res.json();
  setStatic(resJson.data.states);
  setDynamic(resJson.data.states);
  let {totalSamplesTested, totalConfirmedCases, totalActiveCases, discharged, death} = resJson.data;
  setMeta([`Total samples tested : ${totalSamplesTested}`,
    `Total confirmed cases : ${totalConfirmedCases}`,
    `Total active cases : ${totalActiveCases}`,
    `Total active cases : ${discharged}`,
    `Total active cases : ${death}`
  ]);
  setLoad(false);
}

export {getData};

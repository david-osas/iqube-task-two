import {useEffect, useState} from 'react';
import Table from './Table';
import loadingImg from '../loading.gif';

function Home(){
  let [staticData, setStatic] = useState([]);
  let [dynamicData, setDynamic] = useState([]);
  let [metaData, setMeta] = useState([]);
  let [load, setLoad] = useState(true);
  let [search, setSearch] = useState('');
  let titles = ['State', 'Confirmed cases','Cases on admission', 'Discharged', 'Death'];

  async function getData(){
    let res = await fetch('https://covidnigeria.herokuapp.com/api');
    let resJson = await res.json();
    setStatic(resJson.data.states);
    setDynamic(resJson.data.states);
    let {totalSamplesTested, totalConfirmedCases, totalActiveCases, discharged, death} = resJson;
    setMeta([totalSamplesTested, totalConfirmedCases, totalActiveCases, discharged, death]);
    setLoad(false);
  }

  function handleChange(e){
    let current = e.target.value;
    if(current === ''){
      setDynamic(staticData);

    }else{
      let temp = staticData.filter((item) => item.state.includes(current));
      setDynamic(temp);

    }
    setSearch(current);
  }

  useEffect(() => {
    getData();

  },[])

  if(load){
    return(
      <img src={loadingImg} alt='loading' className='loading' />
    )
  }

  return(
    <div className='app-container'>
      <input type='text' placeholder='Search by state' className='search'
       value={search} onChange={handleChange} />
      <div>

      </div>
      <Table data={dynamicData} titles={titles} />
    </div>
  );
}

export default Home;
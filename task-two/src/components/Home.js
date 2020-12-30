import {useEffect, useState} from 'react';
import Table from './Table';
import loadingImg from '../loading.gif';
import {getData} from '../homeUtils.js';

function Home(){
  let [staticData, setStatic] = useState([]);
  let [dynamicData, setDynamic] = useState([]);
  let [metaData, setMeta] = useState([]);
  let [load, setLoad] = useState(true);
  let [search, setSearch] = useState('');
  let titles = ['State', 'Confirmed cases','Cases on admission', 'Discharged', 'Death'];

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
    getData(setStatic, setDynamic, setMeta, setLoad);

  },[]);

  if(load){
    return(
      <img src={loadingImg} alt='loading' className='loading' />
    )
  }

  return(
    <div className='app-container'>
      <div className='row row-cols-lg-6 row-cols-md-4 row-cols-1 home-meta'>
        {metaData.map((item) => <div key={item} className='meta-item'>
          {item}
        </div>)}
      </div>
      <input type='text' placeholder='Search by state' className='search'
       value={search} onChange={handleChange} />

      <Table data={dynamicData} titles={titles} />
    </div>
  );
}

export default Home;

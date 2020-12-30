import {useEffect, useState} from 'react';
import Row from './Row';

function Table(){
  let [data, setData] = useState([]);
  let titles = ['State', 'Confirmed cases','Cases on admission', 'Discharged', 'Death'];

  async function getData(){
    let res = await fetch('https://covidnigeria.herokuapp.com/api');
    let resJson = await res.json();
    setData(resJson.data.states);
  }

  useEffect(() => {
    getData();

  },[])

  return(
    <div className='app-container'>
      <table>
        <thead className='table-head'>
          <Row rowData={titles} section='head'/>
        </thead>
        <tbody>
          {data.map((item, index) => <Row key={index} rowData={item} section='body'/>)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

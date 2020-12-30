import Row from './Row';

function Table({data, titles}){

  return(
    <table>
      <thead className='table-head'>
        <Row rowData={titles} section='head'/>
      </thead>
      <tbody>
        {data.map((item, index) => <Row key={index} rowData={item} section='body'/>)}
      </tbody>
    </table>
  );
}

export default Table;

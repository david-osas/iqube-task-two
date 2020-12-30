
function Row({rowData, section}){
  let data = [];
  if(section === 'head'){
    data = rowData
  }else{
    for(let key in rowData){
      if(key !== '_id'){
        data.push(rowData[key]);
      }
    }
  }

  return(
    <tr>
      {data.map((item, index) => <td key={index}>{item}</td>)}
    </tr>
  );
}

export default Row;

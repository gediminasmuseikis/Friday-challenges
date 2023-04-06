import {useEffect, useState} from 'react';

const PassList = ({ update }) => {

  const [resultList, SetResultList] = useState([]);

  useEffect(() => {
    const localItems = localStorage.getItem('res');
    const array = JSON.parse(localStorage.getItem('res'));
    if (localItems) {
      SetResultList(array.map((value, index) => {
        return (<li key={index} className="">{value}</li>)
      }))
    } else {
      SetResultList(<div>There are no passwords</div>)
    }
  }, [update]);

  return (
    <div>
    <p>Your generated password:</p>
      <ul className="list-group">
        {resultList}
      </ul>
    </div>
  )
}


export default PassList;
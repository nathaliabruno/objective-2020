import React from 'react';
import {generateThumbURL} from '../utils/index'

function DetailsList(props) {
  const {
    list
  } = props
  
  const listItems = []; 
  
  for (let i = 0; i < list.length; i++) {
    list[i] && listItems.push(
      <li key={`${list[i].id}`} className="details-content-section-list-item">
        <img className="details-content-section-list-item-image" src={generateThumbURL(list[i].thumbnail)} alt={list[i].title}/>
        <h5 className="details-content-section-list-item-title">{list[i].title}</h5>
      </li>)
  }

  return (

    <ul className="details-content-section-list">
      {listItems}
    </ul>
  );
}

export default DetailsList;

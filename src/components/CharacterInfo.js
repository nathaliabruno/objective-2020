import React from 'react';
import {generateThumbURL} from '../utils/index'

function CharacterInfo(props) {
  const {
    name,
    thumbnail
  } = props
  
  
  return (
    <div className="content-results-list-item-column">
      <img className="content-results-list-item-image" src={generateThumbURL(thumbnail)} alt={`${name} character thumbnail`} />
      <h4 className="content-results-list-item-name">{name}</h4>
    </div>
  );
}

export default CharacterInfo;

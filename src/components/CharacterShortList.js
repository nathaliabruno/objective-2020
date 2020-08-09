import React from 'react';

function CharacterShortList(props) {
  const {
    list,
    name
  } = props
  
  const listItems = []; 
  
  for (let i = 0; i <=3; i++) {
    list[i] && listItems.push(<li key={`${list[i].name}-${i}`} className="content-results-list-item-description">{list[i].name}</li>)
  }

  return (

    <ul className={`content-results-list-item-${name}`}>
      {listItems}
    </ul>
  );
}

export default CharacterShortList;

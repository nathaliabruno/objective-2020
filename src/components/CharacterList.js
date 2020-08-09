import React from 'react';
import Character from './Character';

function CharacterList({props}) {

  return (

    <ul className="content-results-list">
      <li className="content-results-list-header">
        <div className="content-results-list-header-column">Personagem</div> 
        <div className="content-results-list-header-column">Séries</div> 
        <div className="content-results-list-header-column">Eventos</div>
      </li>
      {
        props.map(item => {
          return <Character key={item.id} character={item} />
        })
      }
    </ul>
  )
  
}

export default CharacterList;
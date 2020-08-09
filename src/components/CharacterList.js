import React from 'react';
import Character from './Character';

function CharacterList({props}) {

  return (

    <ul className="">{
      props.map(item => {
        return <Character key={item.id} character={item} />
      })
    }</ul>
  )
  
}

export default CharacterList;
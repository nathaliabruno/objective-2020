import React from 'react';
import CharacterShortList from './CharacterShortList';
import CharacterInfo from './CharacterInfo';

function Character(props) {

  const {
    name,
    series,
    events,
    thumbnail,
    id
  } = props.character




  return (
    <li className="content-results-list-item" onClick={(e) => props.updateDetails(id)}>
      <CharacterInfo name={name} thumbnail={thumbnail} />
      <CharacterShortList list={series.items} />
      <CharacterShortList list={events.items} />
    </li>
  );
}

export default Character;

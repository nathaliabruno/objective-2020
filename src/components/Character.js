import React from 'react';
import CharacterShortList from './CharacterShortList';
import CharacterInfo from './CharacterInfo';

function Character({character}) {

  const {
    name,
    series,
    events,
    thumbnail,
    id
  } = character



  return (
    <li className="content-results-list-item" data-id={id}>
      <CharacterInfo name={name} thumbnail={thumbnail} />
      <CharacterShortList list={series.items} />
      <CharacterShortList list={events.items} />
    </li>
  );
}

export default Character;

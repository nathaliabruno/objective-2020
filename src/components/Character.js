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
      <CharacterShortList list={series.items} name="series" />
      <CharacterShortList list={events.items} name="events" />
    </li>
  );
}

export default Character;

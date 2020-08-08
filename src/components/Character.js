import React from 'react';
import CharacterShortList from './CharacterShortList';

function Character({character}) {

  const {
    name,
    description,
    series,
    events,
    comics,
    thumbnail,
    resourceURI
  } = character



  return (
    <li className="content-results-list-item">
      {name}
      <CharacterShortList list={series.items} name="series" />
      /////////
      <CharacterShortList list={events.items} name="events" />
    </li>
  );
}

export default Character;

import React from 'react';
import Data from './fetchcall'

export default function SearchResults(props) {
  const results = props.events.map(event => {
    //code
  })
  return (
    <ul>
      {results}
    </ul>
  )
}
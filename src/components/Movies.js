import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map( m => {return(
      <div key={m.title}>
        <h2>{m.title}</h2>
        <p>{m.time} minutes</p>
        <ul>
          {m.genres.map( g => <li key={g}>{g}</li>)}
        </ul>
      </div>)})}
  </div>;
}

export default Movies;

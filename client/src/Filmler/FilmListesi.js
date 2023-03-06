import React from 'react';
import { useHistory } from 'react-router-dom';
export default function FilmListesi(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <FilmDetayları key={movie.id} movie={movie} />
      ))}
    </div>
  );
  }
  
  function FilmDetayları(props) {
    const history = useHistory()
    const { title, director, metascore } = props.movie;
    function clikHandler() {
      history.push(`/filmler/${id}`)
      console.log("movie click", props.movie)
    }

  return (
    <div onClick = {clikHandler}className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

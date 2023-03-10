import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = (props) => {
  const [watched, setWatched] = React.useState(true);


  const resetMovies = () => {
    props.setSearchButton('Search');
    props.setMovies(props.initialMovieList);
  }

  return (
    <div style={{position: 'relative', width: '175px'}}>
      <button onClick={() => {setWatched(true)}}>Watched</button>
      <>  </>
      <button onClick={() => {setWatched(false)}}>To Watch</button>
      <br/>
      <br/>
      {props.movies.map((movie) =>
        <MovieListItem key={movie.title.toString()} value={movie.title} watched={watched} setWatched={setWatched}/>
      )}
      <br/>
      <button onClick={resetMovies}>Reset</button>
    </div>
  )
};

export default MovieList;
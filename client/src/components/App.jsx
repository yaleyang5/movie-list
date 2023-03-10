import React from 'react';
import MovieInput from './MovieInput.jsx';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';

const App = (props) => {
  const initialMovieList = [
    {title: 'Mean Girls', year: '', runtime: '', metascore: '', imdbrating: ''},
    {title: 'Hackers', year: '', runtime: '', metascore: '', imdbrating: ''},
    {title: 'The Grey', year: '', runtime: '', metascore: '', imdbrating: ''},
    {title: 'Sunshine', year: '', runtime: '', metascore: '', imdbrating: ''},
    {title: 'Ex Machina', year: '', runtime: '', metascore: '', imdbrating: ''},
  ]
  const [movies, setMovies] = React.useState(initialMovieList);
  const [searchInput, setSearchInput] = React.useState('');
  const [searchButton, setSearchButton] = React.useState('Search');
  const [movieInput, setMovieInput] = React.useState('');

  return (
    <>
      <h1>MovieList</h1>
      <MovieInput initialMovieList={initialMovieList} movies={movies} setMovies={setMovies} movieInput={movieInput} setMovieInput={setMovieInput}/>
      <br/>
      <br/>
      <Search initialMovieList={initialMovieList} movies={movies} setMovies={setMovies} searchInput={searchInput} setSearchInput={setSearchInput} searchButton={searchButton} setSearchButton={setSearchButton}/>
      <>  If no input provided, this will reset the list.</>
      <br/>
      <br/>
      {<MovieList movies={movies} setMovies={setMovies} setSearchButton={setSearchButton} initialMovieList={initialMovieList}/>}
    </>
  )
};

export default App;
import React from 'react';

const Search = (props) => {
  const handleChange = (event) => {
    props.setSearchInput(event.target.value);
  };

  const handleClick = () => {
    if (props.searchInput === '' && props.movies.length < props.initialMovieList.length) {
      props.setMovies(props.initialMovieList);
      props.setSearchButton('Search');
      return;
    }
    var newMovies = [];
    for (var i = 0; i < props.movies.length; i++) {
      if (props.movies[i].title && props.movies[i].title.toLowerCase().includes(props.searchInput.toLowerCase())) {
        newMovies.push(props.movies[i]);
      }
    }
    if (newMovies.length === 0) {
      newMovies.push({title: 'no movie by that name found'});
      props.setSearchButton('Reset Movies');
    }
    props.setMovies(newMovies);
    props.setSearchInput('');
  }
  return (
    <>
      <input placeholder={'Search movies here'} value={props.searchInput} onChange={handleChange}/>
      <button onClick={handleClick}>{props.searchButton}</button>
    </>
  );
};

export default Search;
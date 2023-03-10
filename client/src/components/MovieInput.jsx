import React from 'react';

const MovieInput = (props) => {
  const handleChange = (event) => {
    props.setMovieInput(event.target.value);
  };

  const handleClick = () => {
    if (props.movieInput === '') {
      return;
    }
    var newMovies = props.movies.slice();
    newMovies.push({title: props.movieInput});
    props.setMovies(newMovies);
    props.setMovieInput('');
  };

  return (
    <>
      <input value={props.movieInput} placeholder={'Add movie title here'} onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default MovieInput;
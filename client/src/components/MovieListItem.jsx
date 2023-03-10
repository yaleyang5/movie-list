import React from 'react';

const MovieListItem = (props) => {
  const [watchStatus, setWatchStatus] = React.useState('Watched');

  const handleClick = (event) => {
    setWatchStatus(event.target.value === 'Watched' ? 'To Watch' : 'Watched');
    return watchStatus;
  }

  if (props.value === 'no movie by that name found') {
    return (
      <div style={{position: 'relative', padding: '2px'}}>
        {props.value}
      </div>
    );
  } else if (props.watched) {
    if (watchStatus === 'Watched') {
      return (
        <div style={{position: 'relative', padding: '2px'}}>{props.value}
          <button value={watchStatus} onClick={handleClick} style={{position: 'absolute', right: '0px'}}>
            {watchStatus}
          </button>
        </div>
      );
    }
  } else {
    if (watchStatus === 'To Watch') {
      return (
        <div style={{position: 'relative', padding: '2px'}}>{props.value}
          <button value={watchStatus} onClick={handleClick} style={{position: 'absolute', right: '0px'}}>
            {watchStatus}
          </button>
        </div>
      );
    }
  }
  return null;
};

export default MovieListItem;
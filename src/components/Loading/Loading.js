import React from 'react';

const Loading = ({delay, error}) => {
  return (
    <div>
      {delay && <div>Loading...</div>}

      {error && <div>Oh no, something went wrong!</div>}
    </div>
  );
};

export default Loading;

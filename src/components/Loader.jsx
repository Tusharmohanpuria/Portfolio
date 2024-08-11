import React from 'react';

const Loader = ({ isLoading }) => {
  const loaderId = isLoading ? 'loading-screen' : 'loading-screen-hidden';
  return <div id={loaderId}></div>;
};

export default Loader;

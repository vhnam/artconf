import React from 'react';

const MainLayout = ({children}) => {
  return (
    <div>
      <div>This is header</div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;

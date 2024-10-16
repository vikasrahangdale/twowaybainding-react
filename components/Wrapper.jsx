import React, { useState, createContext } from 'react';

export const DataContext = createContext(null);

const Wrapper = ({ children }) => {
  const [data, setData] = useState('bhut important data');

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default Wrapper;

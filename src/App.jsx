import React, { useContext } from 'react';
import { DataContext } from '../components/Wrapper';

const App = () => {
  const { data, setData } = useContext(DataContext);
    console.log(data);
    
  return (
    <div>
      <h1>Data from Context</h1>
      <p>{data}</p>
    </div>
  );
};

export default App;

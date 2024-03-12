import React from 'react';
import AppTable from './components/AppTable';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <div className='text-center m-5'>
        <h1>Facilita Jurídico</h1>
      </div>
      <div className='p-3'>
        <Filter />
      </div>
      <AppTable />
    </div>
  );
}

export default App;

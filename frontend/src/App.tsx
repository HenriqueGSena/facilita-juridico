import React from 'react';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <div className="App m-3">
      <nav className="navbar">
        <div className="container-fluid">
          <div className='row'>
            <div className='col'>
              <h1>Facilita Jurídico</h1>
            </div>

            <div className='col'>
              <button type="button" className="btn btn-primary">Primary</button>
            </div>
          </div>
        </div>

      </nav>

      <AppHeader />
    </div>
  );
}

export default App;

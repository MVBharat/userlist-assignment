import React from 'react';
import './App.css';
import data from '../src/TestJSON.json'
import User from './components/User/User';

function App(){
  return (
    <div className="App">
      <div>
        <h2>User List</h2>
        <ul>
          {
            data.members.map((member) => {
                return <User member={ member} />
            })
          }                                     
        </ul>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import Calendar from './components/calendar/Calendar';

const App = () => {
  return (
    <div className="App">
      <Calendar date="10/22/2022" />
    </div>
  );
}

export default App;

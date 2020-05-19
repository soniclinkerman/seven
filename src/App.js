import React from 'react';
import './App.css';
import Day from './Day/Day';
import Counter from './Counter/Counter';
import DayQuotes from './Day-Quote/DayQuote';
import TaskList from './TaskList/TaskList';

function App() {
  return (
    <div className="App">
      <Day/>
      <Counter/>
      <DayQuotes/>
      <TaskList/>
      
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="header">
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Task..."

        />
        <input
          type="number"
          placeholder="Deadline (in Days)..."
  
        />
      </div>
      <button >Add Task</button>
    </div>
    <div className="todoList">
    
    </div>
  </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';

const App = () => {
  
  const [tasks, setTesks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false
    },{
      id: '2',
      title: 'Ler livro',
      completed: true,
    }
  ]);
  
  setTesks([])

  return (
    <>
      <div className="container">
      <Tasks tasks={tasks}/>
      </div>
    </>
  );
}

export default App;

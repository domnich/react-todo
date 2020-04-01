import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

const App = () => {
  const todoData = [
    {
      label: 'Drink coffee',
      important: false,
      id: 0
    },
    {
      label: 'Make awesome coffee',
      important: true,
      id: 1
    },
    {
      label: 'Buy coffe',
      important: false,
      id: 2
    }
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList items={ todoData } />
    </div>
  );
}

export default App;
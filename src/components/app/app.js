import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AddItem from '../add-item';

export default class App extends Component {
  state = {
    todoData: [
      {
        label: 'Drink coffee',
        important: false,
        done: false,
        id: 0
      },
      {
        label: 'Make awesome coffee',
        important: false,
        done: false,
        id: 1
      },
      {
        label: 'Buy coffe',
        important: false,
        done: false,
        id: 2
      }
    ]
  }

  getIndex(arr, id) {
    return arr.findIndex((el) => el.id === id);
  }

  onToggleImportant = (id) => {
    this.setState(( {todoData} ) => {

      // 1 Update object by creating new one
      const ind = this.getIndex(todoData, id);
      const oldItem  = todoData[ind];
      const newItem = {
          ...oldItem, 
          important: !oldItem.important
        };

      const before = todoData.slice(0, ind);
      const after = todoData.slice(ind + 1);
      const array = [...before, newItem, ...after];
      
      return {
        todoData: array
      }
    });

  }

  onToggleDone = (id) => {
    this.setState(( {todoData} ) => {
      
      const ind = this.getIndex(todoData, id);
      const oldItem  = todoData[ind];
      const newItem = {
          ...oldItem, 
          done: !oldItem.done
        };

      const before = todoData.slice(0, ind);
      const after = todoData.slice(ind + 1);
      const array = [...before, newItem, ...after];

      return {
        todoData: array
      }
    });
  }

  onAddItem = (txt) => {
    console.log(txt);
    this.setState(( {todoData} ) => {
      const array = [...todoData];
      array.unshift({
        label: 'NEW coffe',
        important: false,
        done: false,
        id: 3
      })

      return {
        todoData: array
      }
    });
  }

  deleteItem = (id) => {
    this.setState(( {todoData} ) => {

      const idx = this.getIndex(todoData, id);

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const arr = [...before, ...after];

      return {
        todoData: arr
      }
    });
  }

  render() {
    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const toDoCounte = this.state.todoData.length - doneCount;

    return (
      <div>
        <AppHeader toDo={toDoCounte} done={doneCount} />
        <SearchPanel />
        <TodoList onDeleted={ this.deleteItem }
                  onToggleImportant={ this.onToggleImportant }
                  onToggleDone={ this.onToggleDone }
                  items={ this.state.todoData } />
        <AddItem onAddItem={ this.onAddItem } />
      </div>
    )
  }
}

import React from 'react';
import TodoListItem from '../todo-list-item';

import './todo-list.css'

const TodoList = ({ items, onDeleted }) => {
    const elements = items && items.map(( item ) => {
        const {id, ...obj} = item;
        return (
            // <li>
            //     <TodoListItem 
            //         label={label} 
            //         important={important} />
            // </li>
            <li key={id}
            className="list-group-item">
                <TodoListItem   { ...obj } onDeleted={() => {onDeleted(id)}} />
            </li>
        );
    });
    
    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
}

export default TodoList;
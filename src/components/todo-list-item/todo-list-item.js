import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {


    onToggleDone = () => {
        // деструктурировали done из state (как в onMarkImportant)
        this.setState(( {done} ) => {
            return {
                done: !done
            }
        });
    }

    onToggleImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        });
    }

    render() {
        const {
            label, 
            onDeleted, 
            onToggleImportant, 
            onToggleDone, 
            done, 
            important 
        } = this.props;
       
        let className = 'todo-list-item';
        
        if (done) {
            className += ' done';
        }

        if (important) {
            className += ' important';
        }

        return (
            <div className={className}>
                <span 
                    className="todo-list-item-label"
                    onClick={onToggleDone}>
                    {label}
                </span>
                <button type="button"
                        onClick={onToggleImportant}
                        className="btn btn-outline-success btn-sm">
                        <i className="fa fa-exclamation" />
                </button>
                <button type="button"
                        onClick={onDeleted}
                        className="btn btn-outline-danger btn-sm">
                    <i className="fa fa-trash-o" />
                </button>
            </div>
        );
    }
}

import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        // деструктурировали done из state (как в onMarkImportant)
        this.setState(( {done} ) => {
            return {
                done: !done
            }
        });
    }

    onMarkImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        });
    }

    render() {
        const {label } = this.props;
       
        const { done, important } = this.state;
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
                    onClick={this.onLabelClick}>
                    {label}
                </span>
                <button type="button"
                        onClick={this.onMarkImportant}
                        className="btn btn-outline-success btn-sm">
                        <i className="fa fa-exclamation" />
                </button>
                <button type="button"
                        className="btn btn-outline-danger btn-sm">
                    <i className="fa fa-trash-o" />
                </button>
            </div>
        );
    }
}

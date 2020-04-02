import React, { Component } from 'react';

export default class AppHeader extends Component {
    render() {
        const {toDo, done} = this.props;
        return (
            <div className="app-header">
                <h1>My todo list</h1>
                <p>{toDo} more todo, {done} done</p>
            </div>
        )
    }
}

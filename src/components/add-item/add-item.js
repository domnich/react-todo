import React, { Component } from 'react';

export default class AddItem extends Component {
    render() {
        const { onAddItem } = this.props;

        return (
            <div className="add-item">
                <button type="button"
                        onClick={() => { onAddItem('Test') }}
                        className="btn btn-outline-success btn-sm">
                        <i className="fa fa-plus" />
                </button>
            </div>
        );
    }
}
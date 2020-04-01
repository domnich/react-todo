import React from 'react';
import ItemStatusFilter from '../item-status-filter';

const SearchPanel = () => {
    const searchText = 'Search';
    const searchStyles = {
        fontSize: '20px'
    };

    return (
    <div className="search-panel">
        <input 
            style={searchStyles}
            className="search" 
            autoComplete="true" 
            placeholder={searchText} />
        <ItemStatusFilter />
    </div>
        );
}

export default SearchPanel;
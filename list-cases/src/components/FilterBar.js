import React, { useState } from 'react';
import './FilterBar.css';
function FilterBar({ onFilterChange }) {
    const [priority, setPriority] = useState('');
    const [tag, setTag] = useState('');

    const applyFilter = () => {
        onFilterChange({ priority, tag });
    };

    return (
        <div>
            <input type="text" placeholder="Тег" value={tag} onChange={(e) => setTag(e.target.value)} />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="">All priorities</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button onClick={applyFilter}>Filter</button>
        </div>
    );
}

export default FilterBar;

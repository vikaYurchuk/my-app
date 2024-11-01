import React, { useState } from 'react';
import './TaskForm.css';
function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [tags, setTags] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            title,
            description,
            date,
            priority,
            tags: tags.split(',').map(tag => tag.trim())
        };
        onAddTask(newTask);
        setTitle('');
        setDescription('');
        setDate('');
        setPriority('Medium');
        setTags('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name of case" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input type="text" placeholder="Tags" value={tags} onChange={(e) => setTags(e.target.value)} />
            <button type="submit">Add case</button>
        </form>
    );
}

export default TaskForm;

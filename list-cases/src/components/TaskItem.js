import React from 'react';

function TaskItem({ task, onDelete, onEdit }) {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Execution date: {task.date}</p>
            <p>Priority: {task.priority}</p>
            <p>Tags: {task.tags.join(', ')}</p>
            <button onClick={() => onDelete(task.id)}>Delete</button>
            <button onClick={() => onEdit(task)}>Edit</button>
        </div>
    );
}

export default TaskItem;

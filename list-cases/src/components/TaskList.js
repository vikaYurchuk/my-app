import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';


function TaskList({ tasks, filter, onDeleteTask, onEditTask }) {
    const filteredTasks = tasks.filter(task => {
        if (filter.priority && task.priority !== filter.priority) return false;
        if (filter.tag && !task.tags.includes(filter.tag)) return false;
        return true;
    });

    return (
        <div>
            {filteredTasks.map(task => (
                <TaskItem key={task.id} task={task} onDelete={onDeleteTask} onEdit={onEditTask} />
            ))}
        </div>
    );
}

export default TaskList;

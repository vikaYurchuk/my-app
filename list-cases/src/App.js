import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState({});

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (updatedTask) => {
        setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    };

    return (
        <div>
            <h1>List of cases</h1>
            <TaskForm onAddTask={addTask} />
            <FilterBar onFilterChange={setFilter} />
            <TaskList tasks={tasks} filter={filter} onDeleteTask={deleteTask} onEditTask={editTask} />
        </div>
    );
}

export default App;

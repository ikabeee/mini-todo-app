import { useState, useEffect } from 'react';
import tasksData from '../utils/constants/tasks.json';

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        } else {
            setTasks(tasksData);
            localStorage.setItem('tasks', JSON.stringify(tasksData));
        }
    }, []);

    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    const addTask = (newTask) => {
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    const updateTask = (updatedTask) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    };

    const deleteTask = (taskId) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    };

    const completeTask = (taskId) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === taskId ? { ...task, status: 'Completed' } : task
            )
        );
    };

    const uncompleteTask = (taskId) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === taskId ? { ...task, status: 'Pending' } : task
            )
        );
    };

    const findTaskById = (taskId) => {
        return tasks.find(task => task.id === taskId);
    };

    return {
        tasks,
        addTask,
        updateTask,
        deleteTask,
        completeTask,
        uncompleteTask,
        findTaskById
    };
};

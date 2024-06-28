import { useState, useEffect } from 'react';

const useTopbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortCheck, setSortCheck] = useState('newest');

    const handleShowModal = (task = null) => {
        setCurrentTask(task);
        setIsEditing(!!task);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentTask(null);
        setIsEditing(false);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleSort = (querychange) => {
        setSortCheck(querychange);
    };

    const handleSaveTask = (newTask) => {
        if (isEditing) {
            const updatedTasks = tasks.map(task =>
                task.id === newTask.id ? newTask : task
            );
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        } else {
            const updatedTasks = [...tasks, { ...newTask, id: Date.now(), status: false }];
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }
    };

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    return {
        showModal,
        tasks,
        currentTask,
        isEditing,
        searchQuery,
        sortCheck,
        handleShowModal,
        handleCloseModal,
        handleSearch,
        handleSort,
        handleSaveTask,
        setTasks
    };
};

export default useTopbar;

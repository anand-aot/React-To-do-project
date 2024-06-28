import { useState, useEffect } from 'react';

const useTaskDetails = (task) => {
    const [taskDetails, setTaskDetails] = useState({ title: '', description: '', dueDate: '' });

    useEffect(() => {
        if (task) {
            setTaskDetails(task);
        } else {
            setTaskDetails({ title: '', description: '', dueDate: '' });
        }
    }, [task]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskDetails({ ...taskDetails, [name]: value });
    };

    return {
        taskDetails,
        setTaskDetails,
        handleChange
    };
};

export { useTaskDetails };

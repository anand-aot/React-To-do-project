import React from 'react'
import './TaskList.css'

const TaskList = ({ tasks, setTasks, handleShowModal, searchQuery, sortQuery }) => {
    const handleDelete = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleToggleStatus = (taskId) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, status: !task.status } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const activeTasks = tasks.filter(task => !task.status);
    const completedTasks = tasks.filter(task => task.status);
    const filteredActiveTasks = activeTasks.filter(task => 
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    let sortedallTasks;
    if (sortQuery === 'newest') {
        sortedallTasks = filteredActiveTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else {
        sortedallTasks = filteredActiveTasks.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
    }

    const handleDeleteAll = () => {
        const updatedTasks = tasks.filter(task => !task.status);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (
        <div className="task-list">
            <div className="top-head">
                <h4>Active Tasks</h4>
            </div>
            {sortedallTasks?.map(task => (
                <div key={task.id} className="task-item">
                    <div className="heading">
                        <div className="left-heading">
                            <input
                                type="radio"
                                checked={task.status}
                                onChange={() => handleToggleStatus(task.id)}
                            />
                            <h4>{task.title}</h4>
                            <img className="signal-img" src="/src/assets/image/orange-dot.svg" alt="" />
                        </div>
                        <div className="right-pic">
                            <img src="/src/assets/image/pen.svg" alt="Edit" onClick={() => handleShowModal(task)} />
                            <img src="/src/assets/image/delete.svg" alt="Delete" onClick={() => handleDelete(task.id)} />
                        </div>
                    </div>
                    <div className="para-content">
                        <p>{task.description}</p>
                        <span><img src="/src/assets/image/calendar.svg" /> by {task.dueDate} </span>
                    </div>
                </div>
            ))}
            <div className="top-head">
                <div className="clear-complete">
                <h4>Completed Tasks</h4>
                <button className="button-second" onClick={handleDeleteAll}>Clear Completed Tasks</button>
                </div>
            </div>
            {completedTasks.map(task => (
                <div key={task.id} className="task-item">
                    <div className="heading">
                        <div className="left-heading">
                            <img src="/src/assets/image/done.svg"
                                checked={task.status}
                                onClick={() => handleToggleStatus(task.id)}
                            />
                            <h4>{task.title}</h4>
                            <img className="signal-img" src="/src/assets/image/green-dot.svg" alt="" />
                        </div>
                        <div className="right-pic">
                            <img src="/src/assets/image/pen.svg" alt="Edit" onClick={() => handleShowModal(task)} />
                            <img src="/src/assets/image/delete.svg" alt="Delete" onClick={() => handleDelete(task.id)} />
                        </div>
                    </div>
                    <div className="para-content">
                        <p>{task.description}</p>
                        <span><img src="/src/assets/image/calendar.svg" /> by {task.dueDate} </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList
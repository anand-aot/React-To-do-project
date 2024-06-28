import React from 'react'
import useTopbar from '/src/Hookes/getTopbar'
import TaskList from '/src/components/taskDisplayComponent/TaskList'
import Modal from '/src/components/modalComponent/Modal'
import Search from '/src/components/searchComponent/Search'
import Sort from '/src/components/sortComponent/Sort'
import './Topbar.css'

const Topbar = () => {
    const {
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
    } = useTopbar();

    return (
        <div className="container">
            <div className="top-content">
                <h2>Task Manager</h2>
                <button className="button-first" onClick={() => handleShowModal()}>Add New Task</button>
            </div><hr />
            <div className="Search-sort">
                <Search 
                    handleSearch={handleSearch} 
                />
                <Sort 
                    handleSort={handleSort} 
                />
            </div>
                <TaskList 
                    tasks={tasks} 
                    setTasks={setTasks} 
                    handleShowModal={handleShowModal} 
                    searchQuery={searchQuery} 
                    sortQuery={sortCheck}
                />
                <Modal
                    id="taskModal"
                    title={isEditing ? "Edit Task" : "Add Task"}
                    show={showModal}
                    handleClose={handleCloseModal}
                    handleSave={handleSaveTask}
                    task={currentTask}
                    isEditing={isEditing}
                />
        </div>
    );
};

export default Topbar;

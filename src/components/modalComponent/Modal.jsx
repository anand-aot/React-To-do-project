import React from 'react';
import './Modal.css';
import { useTaskDetails } from '/src/Hookes/getHookesModal'

const Modal = ({ id, title, show, handleClose, handleSave, task, isEditing }) => {
    const { taskDetails, setTaskDetails, handleChange } = useTaskDetails(task);

    const onSave = () => {
        if (!taskDetails.title && !taskDetails.description && !taskDetails.dueDate) {
            alert('Please fill all the fields');
            return;
        }
        handleSave(taskDetails);
        setTaskDetails({ title: '', description: '', dueDate: '' });
        handleClose();
    };

    return (
        <div className={`modal fade ${show ? 'show' : ''}`} id={id} tabIndex="-1" role="dialog" aria-labelledby="modal-displayLabel" aria-hidden={!show} style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-displayLabel">{title}</h5>
                        <button type="button" className="close" onClick={handleClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="label">
                            <label>Title*</label>
                            <input
                                type="text"
                                name="title"
                                value={taskDetails.title}
                                onChange={handleChange}
                                placeholder='eg: Create two ad banners'
                            />
                        </div>
                        <div className="label">
                            <label>Description <img src="/src/assets/image/help_outline.svg" alt="" /></label>
                            <textarea
                                name="description"
                                value={taskDetails.description}
                                onChange={handleChange}
                                placeholder='Add your task description.'
                            />
                        </div>
                        <div className="label">
                            <label>Due Date</label>
                            <input
                                type="date"
                                name="dueDate"
                                value={taskDetails.dueDate}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={onSave}>{isEditing ? "Update Task" : "Add Task"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

import React from 'react';
import './Task.css'; // Import Task.css for styling
import { Link } from 'react-router-dom';

const Task = () => {
    return (
        <div className="task-container">
            <div className="task-card">
                <div className="card-body">
                    <h5 className="card-title">Company Name</h5>
                    <p className="card-text">The contacting person's details would come here.</p>
                    <Link to="/responseform" className="btn btn-primary">
                        Submit Response
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Task;

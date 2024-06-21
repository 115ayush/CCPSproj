import React from 'react';
import './Task.css'; // Import Task.css for styling
import { Link } from 'react-router-dom';

const Task = ({ company }) => {
    return (
        <div className="task-container">
            <div className="task-card">
                <div className="card-body">
                    <h5 className="card-title">{company.name}</h5>
                    <p className="card-text">HR Name: {company.hrname}</p>
                    <p className="card-text">Description: {company.Description}</p>
                    <p className="card-text">HR Email: {company.hremail}</p>
                    <Link to="/responseform" className="btn btn-primary">
                        Submit Response
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Task;

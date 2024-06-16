import React from 'react';
import './DisplayStudents.css';

export default function DisplayStudents({ users }) {
    return (
        <div className="containerA">
            <div>
                <h2 className="headingA">Student Placement Team</h2>
            </div>
            <div className="list">
                {users.map((user, index) => (
                    <div key={index} className="itemContainer">
                        <img src={user.imageUrl} alt={user.name} className="image" />
                        <div className="textContainer">
                            <div className="boldText">{user.name}</div>
                            <div className="item">{user.post}</div>
                            <div className="item">{user.Discipline}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

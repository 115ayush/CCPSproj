import React, { useEffect, useState } from 'react';
import './DisplayStudents.css';

export default function DisplayStudents({ users }) {
    const [isLoaded, setIsLoaded] = useState(false);

    // UseEffect to trigger animation after component is loaded
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="containerA">
            <div>
                <h2 className="headingA">Student Placement Team</h2>
            </div>
            <div className="list">
                {users.map((user, index) => (
                    <StudentCard key={index} user={user} index={index} isLoaded={isLoaded} />
                ))}
            </div>
        </div>
    );
}

function StudentCard({ user, index, isLoaded }) {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (isLoaded) {
            setTimeout(() => {
                setAnimationClass('animate-in');
            }, index * 100); // Adjust timing here
        }
    }, [isLoaded, index]);

    return (
        <div className={`itemContainer ${animationClass}`}>
            <img src={user.imageUrl} alt={user.name} className="image" />
            <div className="textContainer">
                <div className="boldText">{user.name}</div>
                <div className="item">{user.post}</div>
                <div className="item">{user.Discipline}</div>
            </div>
            <button className="assignButton">Assign Companies</button>
        </div>
    );
}

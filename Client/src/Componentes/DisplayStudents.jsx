import React, { useEffect, useState } from 'react';
import './DisplayStudents.css';

export default function DisplayStudents({ users }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="containerA">
            <div className="headerA">
                <h2 className="headingA">Student Placement Team</h2>
                <input
                    type="text"
                    placeholder="Search by name"
                    className="searchInput"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="list">
                {filteredUsers.map((user, index) => (
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
            }, index * 100);
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

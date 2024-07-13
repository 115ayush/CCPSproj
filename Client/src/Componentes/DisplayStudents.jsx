import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DisplayStudents.css';
import { IoMdAddCircleOutline } from 'react-icons/io';

export default function DisplayStudents({ users }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAssignClick = (email) => {
        navigate(`/assign`, { state: { memMail: email } });
    };

    const handleAddClick = () => {
        navigate('/signup');
    };

    const handleViewResponseClick = (email) => {
        console.log('Navigating to display-response with memMail:', email); // Add log here
        navigate(`/display-response`, { state: { memMail: email } });
    };

    return (
        <div className="containerA">
            <div className="headerA">
                <div className='' onClick={handleAddClick} style={{ cursor: 'pointer' }}>
                   
                    <IoMdAddCircleOutline style={{ width: 40, height: 40 , color:'white',marginLeft:5}} />
                </div>
                <div>
                    <h2 className="headingA">Student Placement Team</h2>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Search by name"
                        className="searchInput"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="list">
                {filteredUsers.map((user, index) => (
                    <StudentCard key={index} user={user} index={index} isLoaded={isLoaded} onAssignClick={handleAssignClick} onViewResponseClick={handleViewResponseClick} />
                ))}
            </div>
        </div>
    );
}

function StudentCard({ user, index, isLoaded, onAssignClick, onViewResponseClick }) {
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
            <button className="assignButton" onClick={() => onAssignClick(user.email)}>Assign Companies</button>
            <button className="assignButton" onClick={() => onViewResponseClick(user.email)}>View Companies Response</button>
        </div>
    );
}

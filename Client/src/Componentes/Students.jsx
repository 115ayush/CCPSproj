import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayStudents from './DisplayStudents';
import imgurlfrom from "../user.png"; // Correct import statement

function Students() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:4001/students');
                const studentsWithImages = response.data.map((item) => ({
                    ...item,
                    imageUrl: imgurlfrom // Assign the image URL
                }));
                setUsers(studentsWithImages);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div>
            <DisplayStudents users={users} />
        </div>
    );
}

export default Students;

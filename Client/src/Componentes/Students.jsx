import React from 'react';
import DisplayStudents from './DisplayStudents';
import userImage from '../user.png'; 

const users = [
    { name: "Mohit Thakre", post: "Volunteer (Internship Cell)", Discipline: "CSE Discipline", imageUrl: userImage },
    { name: "Varun Rao", post: "Volunteer (DSAI Liasoning)", Discipline: "CSE Discipline", imageUrl: userImage },
    { name: "Anil Kumar", post: "Volunteer (MT Liasoning)", Discipline: "CSE Discipline", imageUrl: userImage },
    { name: "Mohit Thakre", post: "Volunteer (Internship Cell)", Discipline: "CSE Discipline", imageUrl: userImage },
    { name: "Varun Rao", post: "Volunteer (DSAI Liasoning)", Discipline: "CSE Discipline", imageUrl: userImage },
    { name: "Anil Kumar", post: "Volunteer (MT Liasoning)", Discipline: "CSE Discipline", imageUrl: userImage },
    { name: "Mohit Thakre", post: "Volunteer (MT Liasoning)", Discipline: "CSE Discipline", imageUrl: userImage },
];

function Students() {
    return (
        <div>
            <DisplayStudents users={users} />
        </div>
    );
}

export default Students;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './Task';
import './Task.css';

const DisplayTask = ({ user }) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:4001/companies');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  const filteredCompanies = companies.filter(company => company.memMail === user.email);

  return (
    <div className="task-list">
      {filteredCompanies.map((company, index) => (
        <Task key={index} company={company} user={user} />
      ))}
    </div>
  );
};

export default DisplayTask;

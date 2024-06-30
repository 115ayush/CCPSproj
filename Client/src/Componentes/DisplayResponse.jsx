import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS
import './DisplayResponse.css';

const DisplayResponse = () => {
    const location = useLocation();
    const { memMail } = location.state || {};
    console.log('memMail passed to DisplayResponse:', memMail);

    const [responses, setResponses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!memMail) {
            setError('No email provided');
            setLoading(false);
            return;
        }

        const fetchResponses = async () => {
            try {
                const response = await axios.get('http://localhost:4001/responses');
                console.log('API Response:', response.data);
                const filteredResponses = response.data.filter(response => response.memMail === memMail);
                console.log('Filtered Responses:', filteredResponses);
                setResponses(filteredResponses);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching responses:', error);
                setError('Failed to fetch responses');
                setLoading(false);
            }
        };

        fetchResponses();
    }, [memMail]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (responses.length === 0) {
        return <p>No responses found for this user.</p>;
    }

    return (
        <div className="response-list">
            <h2 className='resH'>Responses</h2>
            <Carousel showThumbs={false} showStatus={false}>
                {responses.map((response, index) => (
                    <div key={index} className="response-item">
                        <h3>{response.name}</h3>
                        <p><strong>HR Name:</strong> {response.hrname}</p>
                        <p><strong>HR Number:</strong> {response.hrNumber}</p>
                        <p><strong>HR Email:</strong> {response.hremail}</p>
                        <p><strong>Response:</strong> {response.response}</p>
                        <p><strong>Date:</strong> {response.date}</p>
                        <p><strong>Message:</strong> {response.message}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default DisplayResponse;

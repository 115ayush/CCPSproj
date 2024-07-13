import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './DisplayResponse.css';

const DisplayResponse = () => {
    const location = useLocation();
    const { memMail } = location.state || {};

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
                const filteredResponses = response.data.filter(response => response.memMail === memMail);
                setResponses(filteredResponses);
            } catch (error) {
                console.error('Error fetching responses:', error);
                setError('Failed to fetch responses');
            } finally {
                setLoading(false);
            }
        };

        fetchResponses();
    }, [memMail]);

    if (loading) return <div className="loader">Loading...</div>;
    if (error) return <div className="error">{error}</div>;
    if (responses.length === 0) return <div className="no-responses">No responses found for this user.</div>;

    return (
        <div className="response-container">
            <h2 className="response-header">Responses</h2>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows dynamicHeight>
                {responses.map((response, index) => (
                    <div key={index} className="response-item">
                        <h3 className="response-name">{response.name}</h3>
                        <div className="response-details">
                            <p><strong>HR Name:</strong> {response.hrname}</p>
                            <p><strong>HR Number:</strong> {response.hrNumber}</p>
                            <p><strong>HR Email:</strong> {response.hremail}</p>
                            <p><strong>Response:</strong> {response.response}</p>
                            <p><strong>Date:</strong> {new Date(response.date).toLocaleDateString()}</p>
                            <p><strong>Message:</strong> {response.message}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default DisplayResponse;
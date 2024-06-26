import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import './AssignCompanies.css';

const AssignCompanies = () => {
    const location = useLocation();
    const memMail = location.state.memMail;
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setUploadStatus('No file selected.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('memMail', memMail);

        try {
            const response = await axios.post('http://localhost:4001/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setUploadStatus('Successfully assigned.');
            setIsSuccess(true);
        } catch (error) {
            console.error('Error uploading file:', error);
            setUploadStatus('Error uploading file.');
            setIsSuccess(false);
        }
    };

    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <h1 className="header">Assign Company for {memMail}</h1>
            <div className="input-container">
                {!isSuccess ? (
                    <>
                        <input
                            type="file"
                            accept=".xlsx, .xls"
                            onChange={handleFileChange}
                            className="file-input"
                        />
                        <button onClick={handleUpload} className="upload-button">
                            Upload
                        </button>
                    </>
                ) : (
                    <>
                        <p className="status-message">{uploadStatus}</p>
                        <button onClick={handleNavigateHome} className="home-button">
                            Back to Home
                        </button>
                    </>
                )}
                {uploadStatus && !isSuccess && <p className="status-message">{uploadStatus}</p>}
            </div>
        </div>
    );
};

export default AssignCompanies;

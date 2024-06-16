import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from './Componentes/Login';
import About from './Componentes/About';
import Layout from './Routes/Layout';
import DisplayTask from "./Componentes/DisplayTask";
import DisplayStudents from './Componentes/DisplayStudents';
import Students from './Componentes/Students';

function App() {
    const [user, setUser] = useState({ exists: 0, email: "" });

    const handleLogin = (users) => {
        setUser(users);
    };

    const handleLogout = () => {
        const out = { exists: 0, email: "" };
        setUser(out);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <Layout user={user} handleLogout={handleLogout}>
                        {user.exists === 0 
                            ? <LoginWrapper handleLogin={handleLogin} /> 
                            : <DisplayTask />
                        }
                    </Layout>
                } />
                <Route path="/login" element={<LoginWrapper handleLogin={handleLogin} />} />
                <Route path="/list" element={<Students />} />
            </Routes>
        </Router>
    );
}

function LoginWrapper({ handleLogin }) {
    const navigate = useNavigate();

    const handleLoginAndNavigate = (user) => {
        handleLogin(user);
        if (user.exists) {
            navigate("/");
        }
    };

    return <Login handleLogin={handleLoginAndNavigate} />;
}

export default App;

import React, { useState, useEffect } from 'react';
import logo from '../../public/vite.svg'; // Adjust the path to your logo
import '../App.css'
function SplashScreen({ onFinish }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onFinish();
        },2000); // 1.5

        return () => clearTimeout(timer);
    }, [onFinish]);

    if (!isVisible) return null;

    return (
        <div className="splash-screen">
            <img src={logo} alt="Logo" className="splash-logo" />
        </div>
    );
}

export default SplashScreen;
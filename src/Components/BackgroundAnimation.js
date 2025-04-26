import React, { useEffect } from 'react';
import './css/landing.css';

const BackgroundAnimation = () => {
    useEffect(() => {
        const effect = document.getElementById('effect');
        const createParticles = () => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            effect.appendChild(particle);

            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, 20000);
        };

        // Create particles periodically
        const interval = setInterval(createParticles, 200);

        return () => {
            clearInterval(interval);
            effect.innerHTML = '';
        };
    }, []);

    return <div id="effect"></div>;
};

export default BackgroundAnimation; 
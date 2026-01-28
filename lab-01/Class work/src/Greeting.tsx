import React from 'react';
const Greeting = () => {
    const now = new Date();
    const hours = now.getHours();

    let text = '';
    let color = '';


    if (hours >= 6 && hours < 12) {
        text = 'Good Morning!';
        color = '#f39c12';
    } else if (hours >= 12 && hours < 18) {
        text = 'Good Afternoon!';
        color = '#2ecc71';
    } else {
        text = 'Good Evening!';
        color = '#34495e';
    }

    const headingStyle = {
        color: color,
        fontSize: '2rem',
        fontWeight: 'bold',
    }
    
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1 style={headingStyle}>{now.toLocaleTimeString()} - {text}</h1>
        </div>
    );
};

export default Greeting;
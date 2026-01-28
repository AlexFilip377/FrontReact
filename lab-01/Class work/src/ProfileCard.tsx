import React, { CSSProperties } from 'react';

const ProfileCard = () => {
    const userData = {
        name: 'Александр Филипенко',
        bio: 'Разработчик, Full Stack Developer, game developer',
        image: 'https://lh3.googleusercontent.com/a/ACg8ocIxPuLhRertzG3g4dtWrEJD0UMWDmoZYxJyKKjrClgmSGxE5f0=s432-c-no',
    };

    const cardStyle: CSSProperties = {
        border: '1px solid #ddd',
        borderRadius: '12px',
        padding: '20px',
        textAlign: 'center',
        maxWidth: '250px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
    };

    const imageStyle: CSSProperties = {
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        objectFit: 'cover',
    };

    const buttonStyle: CSSProperties = {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    };

    return (
        <div style={cardStyle}>
            <img src={userData.image} alt="avatar" style={imageStyle} />
            <h2>{userData.name}</h2>
            <p>{userData.bio}</p>
            <button style={buttonStyle}>Связаться</button>
        </div>
    );
};

export default ProfileCard;

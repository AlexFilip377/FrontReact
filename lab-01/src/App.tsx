import ProfileCard from './ProfileCard';
import Greeting from './Greeting';
import React from 'react';

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
            <Greeting />
            <ProfileCard />
        </div>
    )
}

export default App;
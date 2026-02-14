import React from "react";
import type { User } from './types';

interface UserCardProps {
user: User;
isActive?: boolean;
children: React.ReactNode;
}

const UserCard = ({
    user,
    isActive = true,
    children
}: UserCardProps) => {
    return (
        <div style={{
            border: '2px solid',
            borderColor: isActive ? 'green': 'gray',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '10px'
        }}>
            <h2>{user.name}</h2>
            <p>Email: {user.email} | Возраст: {user.age}</p>

            <div style={{ fontStyle: 'italic', marginTop: '10px'}}>
                {children}    
            </div>           
         </div>
    );
};

export default UserCard;
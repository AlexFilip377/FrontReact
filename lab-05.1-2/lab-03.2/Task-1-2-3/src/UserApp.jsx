import React, {useState} from "react";
import UserProfile from "./UserProfile";    

const UserApp = () => {
    const [currentId, setCurrentId] = useState(1);
    const handleRefresh = () => {
        const randomId = Math.floor(Math.random() * 10) + 1;
        setCurrentId(randomId);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Поиск данных пользователей</h1>
            <div style={{ marginBottom: '20px' }}>
                <button onClick={() => setCurrentId(1)}>Пользователь 1</button>
                <button onClick={() => setCurrentId(2)}>Пользователь 2</button>
                <button onClick={() => setCurrentId(3)}>Пользователь 3</button>
                <button onClick={handleRefresh} style={{ marginLeft: '10px', backgroundColor: 'blue' }}>Обновить(случайно)</button>
            </div>
            <UserProfile userId={currentId} />
        </div>
    );
};

// UserId добавлен в массив зависимостей, чтобы вызывать новый fetch при изменении
// AbortController предотвращает утечки памяти при быстрой смене пользователя

export default UserApp;
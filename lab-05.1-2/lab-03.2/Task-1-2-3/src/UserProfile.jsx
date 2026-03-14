import React, { useState, useEffect } from "react";

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = AbortController.signal;
        const fetchUser = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1', { signal });

                if (!response.ok) {
                    throw new Error("Ошибка при попытке загрузить данные");
                }

                const data = await response.json();
                setUser(data);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUser();

        return () => {
            abortController.abort();
            console.log('Cleanup: не удалось. Отмена запроса');
        };
    }, [userId]);

    if (loading) return <p>Загрузка. Пожалуйста, подождите.</p>;
    if (error) return <p style={{ color: 'red' }}>Ошибка: {error}</p>;
    if (!user) return null;

    return (
        <div style={{ border: '1px solid', padding: '15px', borderRadius: '8px', marginTop: '10px'}}>
            <h3>Профиль пользователя</h3>
            <p>Имя: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Телефон: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div>
    );
};

export default UserProfile;
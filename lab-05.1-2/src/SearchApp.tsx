import React, { useState } from "react";
import type { User } from "./types";
import UserCard from "./UserCard";

const INITIAL_DATA: User[] = [
{ name: "Alice", email: "alice@mail.com", age: 25 },
{ name: "Bob", email: "bob@mail.com", age: 30 },
{ name: "Ivan", email: 'ivan@mail.com', age: 32 },
{ name: "Oleg", email: 'oleg@mail.com', age: 52 },
{ name: 'Dima', email: 'dima@mail.com', age: 43 },
];

const SearchApp = () => {
    const [users] = useState<User[]>(INITIAL_DATA);
    const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);

        const filtered = users.filter((u) =>
        u.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSearchTerm("");
        setFilteredUsers(users);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Поиск пользователя</h1>

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Поиск по имени"
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ padding: '8px', marginRight: '10px', width: '250px' }}
                />
                <button onClick={handleClear} style={{ padding: '8px 15px '}}>
                    Очистить
                </button>
            </div>

            <div className="results-list">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <UserCard key={user.email} user={user} isActive={true}>
                            <p>Подтвержденный пользователь</p>
                        </UserCard>
                    ))
                ) : (
                    <p style={{ color: 'gray', fontStyle: 'italic' }}>
                        Нет результатов для {searchTerm}
                    </p>
                )}
            </div>
        </div>
    );
};

export default SearchApp;

import { useState } from "react";
import { UserCard } from "./UserCard";
import { AnalyticsChart } from "./AnalyticsChart";
import { CounterActions } from "./Button";

export function Dashboard() {
    const [timer, setTimer] = useState(0);
    const [user] = useState({ id: 1, name: 'John Doe', email: 'john@example.com'});
    const [items] = useState(['item1', 'item2', 'item3']);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Производительность</h1>
            <button onClick={() => setTimer(t => t + 1)}>
                Обновить (Tick: {timer})
            </button>

            <hr />

            <UserCard user={user} />

            <AnalyticsChart items={items} />

            <CounterActions />
        </div>
    );
}
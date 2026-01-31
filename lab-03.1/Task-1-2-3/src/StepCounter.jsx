import React, {use, useState} from "react";


const StepCounter = ({ initialValue = 0, step = 1 }) => {
    const [count, setCount] = useState(initialValue);
    const [history, setHistory] = useState([]);
    const [operationalCount, setOperationalCount] = useState(0);
    const handleUpdate = (newCount) => {
        setCount(newCount);
        setHistory((prevHistory) => [prevHistory, newCount]);
        setOperationalCount((prevOperational) => prevOperational + 1);
    };

    const increment = () => handleUpdate(count + step);
    const decrement = () => handleUpdate(count - step);

    const reset = () => {
        setCount(initialValue);
        setHistory([]);
        setOperationalCount(0);
    };

    const lastFive = history.slice(-5);

    return (
        <div style={{ border: '1px solid', padding: '20px', margin: '10px', borderRadius: '8px'}}>
            <h2>Счетчик (Шаг = {step})</h2>
            <p>Значение:{count}</p>
            <p>Кол-во операций:{operationalCount}</p>

            <button onClick={increment}>Увеличить</button>
            <button onClick={decrement}>Уменьшить</button>
            <button onClick={reset} style={{ marginLeft: '10px', color: 'red'}}>Сбросить</button>

            <div>
                <h4>Последние 5 операций:</h4>
                <ul>
                    {lastFive.map((val, index) => (
                        <li key = {index}>{val}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StepCounter;
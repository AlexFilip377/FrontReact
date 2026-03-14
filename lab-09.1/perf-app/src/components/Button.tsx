import { memo, useCallback, useState } from "react";

export const Button = memo(({ onClick, label }: { onClick: () => void, label: string }) => {
    console.log('Button "${label}" render');
    return <button onClick={onClick} style={{ margin: '5px' }}>{label}</button>
});

export function CounterActions() {
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    return (
        <div>
            <p>Счетчик: {count}</p>
            <Button onClick={handleIncrement} label="Увеличить" />
        </div>
    );
}
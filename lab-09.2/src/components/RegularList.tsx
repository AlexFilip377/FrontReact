import { useMemo } from "react";
import { generateItems } from "../utils/generateItems";

export function RegularList({ itemCount = 1000 }: {itemCount?: number}) {
    const items = useMemo(() => generateItems(itemCount), [itemCount]);

    return (
        <div style={{ padding: '20px', border: '2px solid #F44336', borderRadius: '8px' }}>
            <h2>Обычный список</h2>
            <p style={{ color: 'red' }}>Внимание рендер: {itemCount} DOM ветвей</p>
            <div>
                {items.map(item => (
                    <div key={item.id} style={{ padding: '10px', borderBottom: '1px solid #eee'}}>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
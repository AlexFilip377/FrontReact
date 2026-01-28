import { useState } from "react";


const Highlight = () => {
    const [isHiglighted, setIsHiglighted] = useState(false);
    const handleToggle = () => {
        setIsHiglighted(!isHiglighted);
    };

    const pStyle = {
        backgroundColor: isHiglighted ? 'red': 'transparent',
        padding: '10px',
        border: '1px solid',
        transition: 'background-color 0.2s ease'
    };

    return (
        <div style={{ padding: '20px', border: '1px solid', margin: "10px" }}>
            <h3>Декаларативный подход</h3>
            <button onClick={handleToggle}>
                {isHiglighted ? "Удалить выделение" : "добавить выделение"}
            </button>

            <p style={pStyle}>
                Здесь я меняю выделение декларативно
            </p>
        </div>
            );
};

export default Highlight;
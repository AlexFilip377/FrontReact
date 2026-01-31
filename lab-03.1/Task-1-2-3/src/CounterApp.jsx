import React from "react";
import StepCounter from "./StepCounter";

const CounterApp = () => {
    /* Объяснение
        props - Входные данные, передаваемые от родителя к дочернему компоненту
        (как аргументы функции)
        Они доступны только для чтения
        State - внутрение данные компонента, которые могу тменяться
        при их изменении React автоматически ререндерит страницу
        Каждый StepCounter имеет свой State, поэтому они работают независимо.
    */
    return (
        <div style={{ padding: '20px'}}>
            <h1>React step счетчик</h1>
            <StepCounter initialValue={0} step={1}/>
            <StepCounter initialValue={10} step={5}/>
        </div>
    );
};

export default CounterApp;
import React from "react";

const AddArticle = ({ name, title, summary, onChangeTitle, onChangeSummary, onClickAdd }) => (
    <section>
        <h1>{name}</h1>
        <input placeholder="Заголовок" value={title} onChange={onChangeTitle} />
        <input placeholder="Содержание" value={summary} onChange={onChangeSummary} />
        <button onClick={onClickAdd}>Добавить</button>
    </section>
);

export default AddArticle;
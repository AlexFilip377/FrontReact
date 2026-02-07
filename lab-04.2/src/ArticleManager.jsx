import React, { useState } from "react";

const ArticleManager = ({ addArticle, articleList }) => {
    const [articles, setArticles] = useState([
        { id: 1, title: 'Первая Статья', summary: 'Здесь находится содержание'}
    ]);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState("");

    const onClickAdd = () => {
        if (!title || !summary) return;
        const newArticle = {
            id: Date.now(),
            title,
            summary,
        };
        setArticles([...articles, newArticle]);
        setTitle('');
        setSummary(''); 
    };

    const onClickRemove = (id) => {
        setArticles(articles.filter(article => article.id !== id));
    };

    return (
        <div style={{ alignContent: 'center', justifyContent: 'center' }}>
            {addArticle({
                name: 'Articles',
                title,
                summary,
                onChangeTitle: (e) => setTitle(e.target.value),
                onChangeSummary: (e) => setSummary(e.target.value),
                onClickAdd
            })}

            {articleList({
                articles,
                onClickRemove
            })}
        </div>
    );
};

export default ArticleManager;
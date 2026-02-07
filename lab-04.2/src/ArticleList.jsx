import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles, onClickRemove }) => (
    <ul>
        {articles.map((article) => (
            <ArticleItem
                key={article.id}
                article={article}
                onClickRemove={onClickRemove}
            />
        ))}
    </ul>
);

export default ArticleList;
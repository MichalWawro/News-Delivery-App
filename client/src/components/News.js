import React, { useState, useEffect, useMemo } from "react";
import './News.css';

function News({ selectedCity, articles, category }) {
    const [globalArticles, setGlobalArticles] = useState([]);
    const [localArticles, setLocalArticles] = useState([]);
    const [stateArticles, setStateArticles] = useState([]);

    useEffect(() => {
        processArticles();
    }, [selectedCity, articles, category]);

    const processArticles = () => {
        let global = [];
        let local = [];
        let state = [];

        articles.forEach(article => {
            if (article.location === "Global") {
                global.push(article);
            } else if (article.city === selectedCity?.name) {
                local.push(article);
            } else if (article.state === selectedCity?.state) {
                state.push(article);
            }
        });

        if (category) {
            global = global.filter(article => article.category === category);
            local = local.filter(article => article.category === category);
            state = state.filter(article => article.category === category);
        }
        setGlobalArticles(global);
        setLocalArticles(local);
        setStateArticles(state);
    };

    const getRandomArticlesByCategory = (articles, count) => {
        const categoryMap = articles.reduce((acc, article) => {
            if (!acc[article.category]) acc[article.category] = [];
            acc[article.category].push(article);
            return acc;
        }, {});

        let selectedArticles = [];
        Object.values(categoryMap).forEach(group => {
            const shuffled = [...group].sort(() => Math.random() - 0.5);
            selectedArticles = selectedArticles.concat(shuffled.slice(0, Math.min(count, group.length)));
        });

        return selectedArticles.sort(() => Math.random() - 0.5).slice(0, count);
    };

    const randomLocalArticles = useMemo(() => getRandomArticlesByCategory(localArticles, 5), [localArticles, category]);
    const randomStateArticles = useMemo(() => getRandomArticlesByCategory(stateArticles, 5), [stateArticles, category]);
    const randomGlobalArticles = useMemo(() => getRandomArticlesByCategory(globalArticles, 5), [globalArticles, category]);

    return (
        <div>
            {selectedCity != null ? (
                <div className="news-container">
                    <div className="us-news-container">
                        {(localArticles.length + stateArticles.length) > 0 ? (
                            <div>
                                <div className='local-news-container'>
                                    {localArticles.length > 0 && (
                                        randomLocalArticles.map((article, index) => (
                                            <div key={index} className="article">
                                                <h3>{article.title}</h3>
                                                <p>{article.content}</p>
                                                <div className="article-footer">
                                                    <p>Local Article</p>
                                                    <p className="category-text">Category: {article.category}</p>
                                                </div>
                                            </div>
                                        )))}
                                </div>
                                <div className="state-news-container">
                                    {stateArticles.length > 0 && (
                                        randomStateArticles.map((article, index) => (
                                            <div key={index} className="article">
                                                <h3>{article.title}</h3>
                                                <p>{article.content}</p>
                                                <div className="article-footer">
                                                    <p>State Article</p>
                                                    <p className="category-text">Category: {article.category}</p>
                                                </div>
                                            </div>
                                        ))
                                    )

                                    }
                                </div>
                            </div>
                        ) : (
                            <p>No articles for this city available.</p>
                        )}

                    </div>
                    <div className='global-news-container'>
                        {randomGlobalArticles.length ? (
                            randomGlobalArticles.map((article, index) => (
                                <div key={index} className="article">
                                    <h3>{article.title}</h3>
                                    <p>{article.content}</p>
                                    <div className="article-footer">
                                        <p>Global Article</p>
                                        <p className="category-text">Category: {article.category}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No global articles available at the moment.</p>
                        )}
                    </div>
                </div>
            ) : (
                <div className="select-city-container">
                    <h2>Select a city</h2>
                </div>
            )}
        </div>
    );
}

export default News;

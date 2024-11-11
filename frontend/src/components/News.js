import React, { useState, useEffect } from "react";
import './News.css';

function News({ loading, selectedCity, showLocal, articles }) {
    const [globalArticles, setGlobalArticles] = useState([]);
    const [localArticles, setLocalArticles] = useState([]);
    const [stateArticles, setStateArticles] = useState([]);

    const categorizeArticles = () => {
        const global = [];
        const local = [];
        const state = [];

        articles.forEach(article => {
            if (article.location === "Global") {
                global.push(article);
            } else if (article.city === selectedCity?.name) {
                local.push(article);
            } else if (article.state === selectedCity?.state) {
                state.push(article);
            }
        });

        setGlobalArticles(global);
        setLocalArticles(local);
        setStateArticles(state);
    };

    useEffect(() => {
        categorizeArticles();
    }, [articles, selectedCity]);

    return (
        <div>
            {loading ? (
                <div className='loading'>
                    Loading...
                </div>
            ) : (
                <div>
                    {selectedCity != null ? (
                        <div>
                            {showLocal ? (
                                <div className='global-news-container'>
                                    <h2>Global News</h2>
                                    {globalArticles.length ? (
                                        globalArticles.map((article, index) => (
                                            <div key={index} className="article">
                                                <h3>{article.title}</h3>
                                                <p>{article.content}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No global articles available.</p>
                                    )}
                                </div>
                            ) : (
                                <div className='local-news-container'>
                                    <h2>Local News</h2>
                                    {localArticles.length ? (
                                        localArticles.map((article, index) => (
                                            <div key={index} className="article">
                                                <h3>{article.title}</h3>
                                                <p>{article.content}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No local articles from this city available.</p>
                                    )}

                                    {stateArticles.length > 0 && (
                                        <div className="state-news-container">
                                            <h2>State News</h2>
                                            {stateArticles.map((article, index) => (
                                                <div key={index} className="article">
                                                    <h3>{article.title}</h3>
                                                    <p>{article.content}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            )}
        </div>
    )
}

export default News;
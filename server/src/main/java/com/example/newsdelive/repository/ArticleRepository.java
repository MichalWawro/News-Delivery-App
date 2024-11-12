package com.example.newsdelive.repository;

import com.example.newsdelive.model.Article;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ArticleRepository {
    private final List<Article> articles = new ArrayList<>();

    public void save(Article article) {
        articles.add(article);
    }

    public List<Article> getAllArticles() {
        return new ArrayList<>(articles);
    }
}

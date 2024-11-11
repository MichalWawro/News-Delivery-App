package com.example.newsdelive.service;

import com.example.newsdelive.model.Article;
import com.example.newsdelive.pipeline.ArticlePipeline;
import com.example.newsdelive.repository.ArticleRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StartupService {
    private final ArticlePipeline pipeline;
    private final ArticleRepository repository;

    public StartupService(ArticlePipeline pipeline, ArticleRepository repository) {
        this.pipeline = pipeline;
        this.repository = repository;
    }
    @PostConstruct
    public void init() {
        List<Article> articles = pipeline.processArticles("C:/Users/Michał Wawro/Desktop/Projects/news-delivery-app/backend/src/main/resources/articles.csv");
        articles.forEach(repository::save);
        System.out.println("Articles have been processed and stored in memory.");
    }
}

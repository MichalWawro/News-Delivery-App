package com.example.newsdelive.service;

import com.example.newsdelive.model.Article;
import com.example.newsdelive.pipeline.ArticlePipeline;
import com.example.newsdelive.repository.ArticleRepository;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct;

import java.io.InputStream;
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
        ClassPathResource resource = new ClassPathResource("articles.csv");

        try (InputStream inputStream = resource.getInputStream()) {
            List<Article> articles = pipeline.processArticles(inputStream);
            articles.forEach(repository::save);
            System.out.println("Articles have been processed and stored in memory.");
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println("Failed to load or process articles.");
        }
    }
}

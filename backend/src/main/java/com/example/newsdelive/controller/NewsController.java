package com.example.newsdelive.controller;

import com.example.newsdelive.model.Article;
import com.example.newsdelive.model.City;
import com.example.newsdelive.pipeline.NewsPipeline;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class NewsController {
    private final NewsPipeline pipeline = new NewsPipeline();

    @GetMapping("/news")
    public ResponseEntity<List<Article>> getAllNews(City city) {
        List<Article> articles = pipeline.processArticles("C:/Users/Michał Wawro/Desktop/Projects/news-delivery-app/backend/src/main/resources/articles.csv", city);
        return ResponseEntity.ok(articles);
    }
}

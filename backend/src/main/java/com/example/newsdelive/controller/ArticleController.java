package com.example.newsdelive.controller;

import com.example.newsdelive.model.Article;
import com.example.newsdelive.model.City;
import com.example.newsdelive.pipeline.ArticlePipeline;
import com.example.newsdelive.repository.ArticleRepository;
import com.example.newsdelive.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ArticleController {
    private final ArticleService articleService;
    private final ArticleRepository repository;

    @Autowired
    public ArticleController(ArticleService articleService, ArticleRepository repository) {
        this.articleService = articleService;
        this.repository = repository;
    }

    @PostMapping("/get-articles")
    public ResponseEntity<List<Article>> getArticles(@RequestBody City city) {
        System.out.println(city.getName() + ", " + city.getState());
        List<Article> articles = articleService.filterArticles(city);
        return ResponseEntity.ok(articles);
    }

    @GetMapping("/check-for-articles")
    @CrossOrigin(origins = "http://localhost:3000")
    public Map<String, Boolean> checkForArticles() {
        boolean hasArticles = repository.getAllArticles().size() > 0;
        return Collections.singletonMap("ready", hasArticles);
    }
}

package com.example.newsdeliveryapp.controller;

import com.example.newsdeliveryapp.model.Article;
import com.example.newsdeliveryapp.model.City;
import com.example.newsdeliveryapp.repository.ArticleRepository;
import com.example.newsdeliveryapp.service.ArticleService;
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
    @CrossOrigin(origins = {"http://localhost:3000", "http://98.85.16.27:3000"})
    public ResponseEntity<List<Article>> getArticles(@RequestBody City city) {
        System.out.println(city.getName() + ", " + city.getState() + ", " + city.getStateId());
        List<Article> articles = articleService.filterArticles(city);
        return ResponseEntity.ok(articles);
    }

    @GetMapping("/check-for-articles")
    @CrossOrigin(origins = {"http://localhost:3000", "http://98.85.16.27:3000"})
    public Map<String, Boolean> checkForArticles() {
        boolean hasArticles = repository.getAllArticles().size() > 0;
        return Collections.singletonMap("ready", hasArticles);
    }
}

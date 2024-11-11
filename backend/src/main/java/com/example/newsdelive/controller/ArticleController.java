package com.example.newsdelive.controller;

import com.example.newsdelive.model.Article;
import com.example.newsdelive.model.City;
import com.example.newsdelive.pipeline.ArticlePipeline;
import com.example.newsdelive.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ArticleController {
    private final ArticlePipeline pipeline;
    private final ArticleService articleService;

    @Autowired
    public ArticleController(ArticlePipeline pipeline, ArticleService articleService) {
        this.pipeline = pipeline;
        this.articleService = articleService;
    }

    @PostMapping("/get-articles")
    public ResponseEntity<List<Article>> getArticles(@RequestBody City city) {
        System.out.println(city.getName() + ", " + city.getState());
        List<Article> articles = articleService.filterArticles(city);
        return ResponseEntity.ok(articles);
    }
}

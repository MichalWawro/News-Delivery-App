package com.example.newsdelive.controller;

import com.example.newsdelive.model.News;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/news")
public class NewsController {

    @GetMapping
    public List<News> getAllNews() {
        return null;
    }
}

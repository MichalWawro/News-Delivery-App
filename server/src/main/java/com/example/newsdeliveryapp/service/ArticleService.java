package com.example.newsdeliveryapp.service;

import com.example.newsdeliveryapp.model.Article;
import com.example.newsdeliveryapp.model.City;
import com.example.newsdeliveryapp.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleService {
    private final ArticleRepository articleRepository;

    @Autowired
    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public List<Article> filterArticles(City city) {
        List<Article> articles = articleRepository.getAllArticles();
        List<Article> filteredArticles = new ArrayList<>();

        for (Article article : articles) {
            String articleCity = article.getCity();
            String articleState = article.getState();

            if ("Global".equals(article.getLocation()) ||
                    (articleCity != null && articleCity.equals(city.getName())) ||
                    (articleState != null && articleState.equals(city.getState()))) {
                filteredArticles.add(article);
            }
        }
      return filteredArticles;
    }
}

package com.example.newsdelive.pipeline;

import com.example.newsdelive.classifier.ArticleClassifier;
import com.example.newsdelive.loader.ArticleLoader;
import com.example.newsdelive.model.Article;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.List;

@Component
public class ArticlePipeline {
    private final ArticleLoader loader = new ArticleLoader();
    private final ArticleClassifier classifier = new ArticleClassifier();

    public List<Article> processArticles(InputStream inputStream) {
        List<Article> articles = loader.loadArticlesFromCSV(inputStream);

        for (Article article : articles) {
            String classification = classifier.classifyArticle(article);

            String[] parts = classification.split(";");

            if(parts[0].equals("Local")) {
                article.setLocation("Local");
                if(parts[1].contains(", ")) {
                    article.setCity(parts[1].split(", ")[0]);
                    article.setState(parts[1].split(", ")[1]);
                }
            } else {
                article.setLocation("Global");
            }
        }
        return articles;
    }
}

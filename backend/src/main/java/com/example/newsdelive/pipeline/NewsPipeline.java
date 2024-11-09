package com.example.newsdelive.pipeline;

import com.example.newsdelive.classifier.ArticleClassifier;
import com.example.newsdelive.loader.ArticleLoader;
import com.example.newsdelive.model.Article;
import com.example.newsdelive.model.City;

import java.util.ArrayList;
import java.util.List;

public class NewsPipeline {
    private final ArticleLoader loader = new ArticleLoader();
    private final ArticleClassifier classifier = new ArticleClassifier();

    public List<Article> processArticles(String filePath, City city) {
        //Temp City and State for testing purposes
        city.setName("New York City");
        city.setState("California");

        List<Article> articles = loader.loadArticlesFromCSV(filePath);
        List<Article> filteredArticles = new ArrayList<>();

        for (Article article : articles) {
            String classification = classifier.classifyArticle(article);

//            System.out.println("Classification: " + classification);

            String[] parts = classification.split(";");

            if(parts[0].equals("Local")) {
                article.setLocation("Local");
                if(parts[1].contains(",")) {
                    article.setCity(parts[1].split(",")[0]);
                    article.setState(parts[1].split(",")[1]);
                }
            } else {
                article.setLocation("Global");
            }

//            System.out.println(article.getLocation() + " " + article.getCity() + " " + article.getState());
            if(article.getLocation() == "Global" || article.getCity().equals(city.getName()) || article.getState().equals(city.getState())) {
                filteredArticles.add(article);
            }
        }

        return filteredArticles;
    }
}

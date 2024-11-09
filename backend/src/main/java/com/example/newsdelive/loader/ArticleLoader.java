package com.example.newsdelive.loader;

import com.example.newsdelive.model.Article;
import com.opencsv.CSVParserBuilder;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;

import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

public class ArticleLoader {
    public List<Article> loadArticlesFromCSV(String filePath) {
        List<Article> articles = new ArrayList<>();

        try (CSVReader reader = new CSVReaderBuilder(new FileReader(filePath)) .withCSVParser(new CSVParserBuilder().withSeparator(',').build()) .build()) {
            String[] line;
            while ((line = reader.readNext()) != null) {
                articles.add(new Article(line[0], line[1], null, null, null));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return articles;
    }
}

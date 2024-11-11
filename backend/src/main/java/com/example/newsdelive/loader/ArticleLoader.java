package com.example.newsdelive.loader;

import com.example.newsdelive.model.Article;
import com.opencsv.CSVParserBuilder;
import com.opencsv.CSVReaderBuilder;
import com.opencsv.CSVReader;

import java.io.FileReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ArticleLoader {
    public List<Article> loadArticlesFromCSV(String filePath) {
        List<Article> articles = new ArrayList<>();

//        try (CSVReader reader = new CSVReaderBuilder(new FileReader(filePath)) .withCSVParser(new CSVParserBuilder().withSeparator(',').withQuoteChar('"').build()) .build()) {
        try (CSVReader reader = new CSVReader(new FileReader(filePath))) {
            String[] line;
            while ((line = reader.readNext()) != null) {
                if (line.length >= 2) {
                    String title = line[0].replace("�", "'");
                    String content = line[1].replace("�", "'");
                    articles.add(new Article(title, content, null, null, null));
                } else {
                    System.out.println("Skipping malformed line: " + Arrays.toString(line));
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return articles;
    }
}

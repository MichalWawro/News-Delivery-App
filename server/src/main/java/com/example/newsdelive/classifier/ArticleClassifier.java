package com.example.newsdelive.classifier;

import com.example.newsdelive.model.Article;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

public class ArticleClassifier {
    private final String OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
    private final String OPENAI_API_KEY = "API_KEY";

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();

    public String classifyArticle(Article article) {
        String prompt = "Classify this news article based on whether they are 'local' or 'global.'\n" +
                        " - A news article is considered **local** if it is from the United States and mentions a specific U.S. city. \n" +
                        " - A news article is considered **global** if it is from outside the United States, or if the article cannot be associated with a specific U.S. city.\n" +
                        "Do not use abbreviations\n" +
                        "The output should look like this:\n" +
                        "Classification: Local/Global; " +
                        "Location: City, State or City\n" +
                        "\nHere's the article I want you to classify:\n" +
                        "Title of the article: " + article.getTitle() + "\n" +
                        "Content of the article: " + article.getContent();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer  " + OPENAI_API_KEY);

        ObjectNode requestBody = objectMapper.createObjectNode();
        requestBody.put("model", "gpt-4o-mini");

        ObjectNode message = objectMapper.createObjectNode();
        message.put("role", "user");
        message.put("content", prompt);

        requestBody.putArray("messages").add(message);

        HttpEntity<String> entity;
        try {
            String jsonString = objectMapper.writeValueAsString(requestBody);
            entity = new HttpEntity<>(jsonString, headers);
        } catch (Exception e) {
            e.printStackTrace();
            return "error";
        }

        try {
            ResponseEntity<String> response = restTemplate.exchange(
                    OPENAI_API_URL, HttpMethod.POST, entity, String.class);

            JsonNode jsonResponse = objectMapper.readTree(response.getBody());

            String classificationText = jsonResponse.at("/choices/0/message/content").asText().trim();

            String[] parts = classificationText.split(";");
            String classification = parts[0].replace("Classification: ", "").trim();
            String location = parts[1].replace("Location: ", "").trim();

            return  classification+ ";" + location;
        } catch (Exception e) {
            e.printStackTrace();
            return "error";
        }
    }
}
package com.example.newsdeliveryapp.model;

public class Article {
    private String title;
    private String content;
    private String location;
    private String city;
    private String state;
    private String category;

    public Article(String title, String content, String location, String city, String state, String category) {
        this.title = title;
        this.content = content;
        this.location = location;
        this.city = city;
        this.state = state;
        this.category = category;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}

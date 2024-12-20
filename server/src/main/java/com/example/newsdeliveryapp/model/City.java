package com.example.newsdeliveryapp.model;

public class City {
    private String name;
    private String state;
    private String stateId;

    public City(String name, String state, String stateId) {
        this.name = name;
        this.state = state;
        this.stateId = stateId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getStateId() {
        return stateId;
    }

    public void setStateId(String stateId) {
        this.stateId = stateId;
    }
}

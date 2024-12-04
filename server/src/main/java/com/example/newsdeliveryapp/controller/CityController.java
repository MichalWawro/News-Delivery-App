package com.example.newsdeliveryapp.controller;

import com.example.newsdeliveryapp.model.City;
import com.example.newsdeliveryapp.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CityController {
    private final CityService cityService;

    @Autowired
    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    @GetMapping("/get-cities")
    @CrossOrigin(origins = {"http://localhost:3000", "http://98.85.16.27:3000"})
    public List<City> getAllCities() {
        return cityService.getAllCities();
    }
}

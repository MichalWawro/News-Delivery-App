package com.example.newsdelive.controller;

import com.example.newsdelive.model.City;
import com.example.newsdelive.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public List<City> getAllCities() {
        return cityService.getAllCities();
    }

    @PostMapping("/select-city")
    public ResponseEntity<City> selectCity(@RequestBody City city) {
        System.out.println("City recieved: " + city.getName() + ", " + city.getState());
        return ResponseEntity.ok(city);
    }
}

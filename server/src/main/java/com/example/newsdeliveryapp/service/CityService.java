package com.example.newsdeliveryapp.service;

import com.example.newsdeliveryapp.model.City;
import com.opencsv.CSVReader;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

@Service
public class CityService {
    private List<City> cities = new ArrayList<>();

    @PostConstruct
    public void loadCities() {
        try {
            InputStream inputStream = getClass().getResourceAsStream("/uscities.csv");
            InputStreamReader reader = new InputStreamReader(inputStream);
            CSVReader csvReader = new CSVReader(reader);

            csvReader.readNext();

            String[] line;
            while ((line = csvReader.readNext()) != null) {
                String name = line[0];
                String state = line[3];
                String stateId = line[2];
                cities.add(new City(name, state, stateId));
            }

            csvReader.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<City> getAllCities() {
        return cities;
    }
}

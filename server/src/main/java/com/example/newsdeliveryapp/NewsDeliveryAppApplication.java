package com.example.newsdeliveryapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.example.newsdeliveryapp"})
public class NewsDeliveryAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(NewsDeliveryAppApplication.class, args);
	}
}
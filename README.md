# News Delivery App

A web application designed to deliver local, state, and global news for different cities across the United States.
The application uses OPEN_AI GPT 4.0-mini to classify articles when server-side of the application is run.
The articles.csv dataset contains randomly generated articles.

## Features:
 - Search input with a dropdown list;
 - Display the state flag for the selected location;
 - Category bar for filtering articles by category;
 - Theme switch to toggle between light and dark modes.

## Hosted Application

The application is currently hosted on AWS EC2 and can be accessed at the following IP address:

http://98.85.16.27:3000/

## Application Setup

Follow these steps to set up and run the application:

## 1. API Key Configuration

Replace the API_KEY string in the ArticleClassifier.java with your OpenAI API Key. This is necessary for classifying the news articles. Without this key, the application won't be able to classify articles properly.

## 2. Server Setup

Start the server-side of the application. 

Ensure that the backend is up and running to handle the requests and provide the necessary data.

## 3. Frontend Setup

Navigate to the news-delivery-app/client folder and run the following command to start the frontend:

npm run start

## 4. Wait for Classification

Once the application is running, the backend will classify the articles.

This process may take some time. A notification will appear in the server-side terminal once the classification is complete.

## 5. Use the Application

After the classification process:
 - Use the search input field to find news by city within the U.S;
 - View news related to the selected city, along with state and global news;
 - Filter articles by categories using the category bar;
 - Return to all articles by deselecting the current category;


## Preview:

### Running Application
![image](https://github.com/user-attachments/assets/00bc838b-5b88-4cb1-a66a-61f870e5a4e8)

### Example: Articles from California
![image](https://github.com/user-attachments/assets/d4616a4c-dd1f-44bb-8f08-6d4a9056ae61)

### Example: Science Category in Dark Mode
![image](https://github.com/user-attachments/assets/d9322e9a-1ff2-4ddb-ae38-b2985393c555)



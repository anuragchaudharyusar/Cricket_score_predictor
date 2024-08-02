## First Innings Score Predictor for IPL

# Overview

This project is a web application that predicts the first innings score of IPL cricket matches using machine learning. The application is built with Flask on the backend and leverages a linear regression model to make predictions based on historical data.

# Training the Model
To train the model, run: python backend/train_model.py

This script will: Load the dataset from ipl.csv. Preprocess the data and split it into training and testing sets. Train a Linear Regression model. Save the trained model (first-innings-score-lr-model.pkl) and the scaler (scaler.pkl). Endpoint :- predict: This endpoint accepts input features and returns the predicted cricket score.

# Frontend
The frontend of this project is made using HTML , CSS , JS and Bootstrap components.


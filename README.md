# News Analyzer – Fake News Detector

This project is a web-based application for detecting fake news using machine learning and natural language processing. It is built with Streamlit for the frontend and Python (scikit-learn) for the backend, leveraging a logistic regression model trained on a real/fake news dataset.

## Features

- Upload and analyze news articles to determine if they are likely real or fake.
- Interactive web interface built using Streamlit.
- Model training and inference powered by scikit-learn (Logistic Regression with TF-IDF).
- Utilizes a dataset (`fake_news_dataset_50k.csv`) for model training and testing.
- Dataset balancing for improved model performance.

## Repository Structure

- `app.py` — Main Streamlit application; handles data loading, preprocessing, model training, and prediction UI.
- `fake_news_dataset_50k.csv` — Dataset containing labeled news articles (real/fake).
- `requirements` — List of Python and library dependencies needed to run the project.
- `.gitignore` — Standard file to exclude environment files, datasets, etc.
- `README.md` — General project overview and GitHub setup instructions.

## Quickstart

### 1. Install Streamlit

```bash
pip install streamlit
```

### 2. Run the Application

```bash
streamlit run app.py
```

The app will open in your browser. You can enter a news title and content to receive a fake/real prediction.

### 3. Dataset

Ensure `fake_news_dataset_50k.csv` is in the project root directory. The app will use this file to train and evaluate the model.

## How It Works

- Loads the dataset and combines the title and content of each article.
- Balances the dataset (downsampling the majority class if needed).
- Splits data into training/testing sets.
- Builds a pipeline: TF-IDF vectorizer + Logistic Regression classifier.
- User inputs a news title and content; the model predicts if it’s real or fake.

## Requirements

- Python 3.10
- protobuf==3.20.\*
- streamlit
- pandas
- scikit-learn==1.3.2

All dependencies are listed in the `requirements` file.

## Notes

- For larger datasets, model training might take a few moments.
- The Streamlit caching is used to speed up repeated operations.
- This project is for educational/demo purposes and may require further improvements for production use.

---

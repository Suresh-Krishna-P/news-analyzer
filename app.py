import pandas as pd
import streamlit as st
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
from sklearn.utils import resample

# Title
st.title("📰 Fake News Detector")

# Load dataset
@st.cache_data
def load_data():
    df = pd.read_csv("fake_news_dataset_50k.csv")
    return df

df = load_data()

# Combine title and text
df["content"] = df["title"].astype(str) + " " + df["text"].astype(str)

# Balance the dataset if needed
df_majority = df[df.label == "real"]
df_minority = df[df.label == "fake"]

if len(df_majority) != len(df_minority):
    df_majority_downsampled = resample(
        df_majority,
        replace=False,
        n_samples=len(df_minority),
        random_state=42
    )
    df_balanced = pd.concat([df_majority_downsampled, df_minority])
else:
    df_balanced = pd.concat([df_majority, df_minority])

# Train-test split
X = df_balanced["content"]
y = df_balanced["label"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)

# Build model
@st.cache_resource
def train_model():
    model = Pipeline([
        ("tfidf", TfidfVectorizer(max_features=5000, stop_words="english")),
        ("clf", LogisticRegression(max_iter=1000))
    ])
    model.fit(X_train, y_train)
    return model

st.info("⏳ Training model...")
model = train_model()
st.success("✅ Model is ready!")

# Input fields
title = st.text_input("Enter news title:")
text = st.text_area("Enter news content:")

if st.button("🚀 Predict"):
    if title and text:
        content = f"{title} {text}"
        prediction = model.predict([content])[0]
        st.write(f"### 🧠 Prediction: **{prediction.upper()}**")
    else:
        st.warning("⚠️ Please enter both title and content.")

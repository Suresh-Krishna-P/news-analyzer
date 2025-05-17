import streamlit as st
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split

# Load and train model function
@st.cache_resource
def load_and_train_model():
    dataset_path = "fake_news_dataset_50k.csv"
    
    # Check if file exists
    try:
        df = pd.read_csv(dataset_path)
    except FileNotFoundError:
        st.error(f"Dataset not found at: {dataset_path}")
        return None
    
    # Validate columns
    required_cols = {"title", "text", "label"}
    if not required_cols.issubset(df.columns):
        st.error(f"Dataset must include the following columns: {required_cols}")
        return None

    # Combine title and text
    df["content"] = df["title"].astype(str) + " " + df["text"].astype(str)
    
    # Train/test split
    X_train, _, y_train, _ = train_test_split(
        df["content"], df["label"], test_size=0.2, random_state=42)

    # Build pipeline with CountVectorizer
    model = Pipeline([
        ('vectorizer', CountVectorizer(max_features=5000)),
        ('classifier', LogisticRegression(max_iter=1000))
    ])
    
    model.fit(X_train, y_train)
    return model

# App title
st.title('📰 Fake News Detection App')

# Load and train the model
st.info("⏳ Training or loading the model...")
model = load_and_train_model()

# Check if model is loaded
if model:
    st.success("✅ Model is ready.")
else:
    st.stop()

st.write("Enter the title and text of the news article to check if it's real or fake.")

# User inputs
title = st.text_input('📝 Title')
text = st.text_area('📰 Text')

# Submit button
if st.button('🚀 Submit'):
    if title and text:
        content = f"{title} {text}"
        try:
            prediction = model.predict([content])[0]
            st.success(f"🧠 Prediction: **{'Fake' if prediction == 1 else 'Real'}**")
        except Exception as e:
            st.error(f"Prediction failed: {e}")
    else:
        st.warning('⚠️ Please fill in both the title and text fields.')

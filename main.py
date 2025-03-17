
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import requests
from config import GOOGLE_FACTCHECK_API_KEY
from transformers import pipeline
from summarization import router as summarization_router  # ✅ Import Summarization

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

FACTCHECK_URL = "https://factchecktools.googleapis.com/v1alpha1/claims:search"

# Load AI Model for Text Classification (Misinformation Detection)
ai_model = pipeline("text-classification", model="facebook/bart-large-mnli")

@app.get("/factcheck/")
def fact_check(query: str):
    params = {"query": query, "key": GOOGLE_FACTCHECK_API_KEY}
    response = requests.get(FACTCHECK_URL, params=params)

    if response.status_code != 200:
        return {"error": f"Google API Error: {response.status_code}, Response: {response.text}"}

    data = response.json()

    # AI-based Credibility Scoring
    ai_result = ai_model(query, return_all_scores=True)[0]  # Get all class probabilities

    entailment_score = next((x['score'] for x in ai_result if x['label'].upper() == "ENTAILMENT"), 0)
    contradiction_score = next((x['score'] for x in ai_result if x['label'].upper() == "CONTRADICTION"), 0)

    credibility_score = round(max(entailment_score, contradiction_score) * 100, 2)

    if credibility_score == 0:  
        ai_label = "Unclear / Needs More Evidence"
    elif entailment_score > contradiction_score:
        ai_label = "Likely True"
    else:
        ai_label = "Likely False"

    if not data or "claims" not in data:
        return {
            "message": "No fact-checking results found for this query.",
            "ai_credibility_score": credibility_score,
            "ai_label": ai_label
        }

    return {
        "claims": data["claims"],
        "ai_credibility_score": credibility_score,
        "ai_label": ai_label
    }

# ✅ Include Summarization API Route
app.include_router(summarization_router)

@app.get("/")
def root():
    return {"message": "Fact-Checking API is running!"}

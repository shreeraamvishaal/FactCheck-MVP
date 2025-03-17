from fastapi import APIRouter, HTTPException
from newspaper import Article
from transformers import pipeline

router = APIRouter()  # ✅ Changed from FastAPI() to APIRouter()

# Load AI Model for Summarization
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

@router.get("/summarize/")
def summarize_news(url: str):
    try:
        article = Article(url)
        article.download()
        article.parse()

        if not article.text:
            raise HTTPException(status_code=400, detail="Failed to extract article text.")

        summary = summarizer(article.text, max_length=150, min_length=50, do_sample=False)[0]['summary_text']

        return {"summary": summary, "title": article.title}

    except Exception as e:
        return {"error": str(e)}


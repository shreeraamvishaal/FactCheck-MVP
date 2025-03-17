# FactCheck-MVP  
🏆 *First Prize & Best Prototype Award - Inknovation Hackathon* 🏆  

FactCheck-MVP is an **AI-powered real-time fact-checking system** that verifies the credibility of news headlines. Built for the **Inknovation Hackathon**, this project won **First Prize** and the **Best Prototype Award** for its innovative approach to combating misinformation.

---

## Features  
✅ **Real-Time Fact-Checking** – Verifies news credibility using AI & Google FactCheck API.  
✅ **AI-Powered News Summarization** – Converts verified news into engaging short summaries.  
✅ **Scalable & Efficient** – Built with FastAPI (backend) and React (frontend).  
✅ **User-Friendly Interface** – Clean and modern UI with TailwindCSS.  

---

## Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/yourusername/FactCheck-MVP.git
cd FactCheck-MVP
```

### 2️⃣ Backend Setup (FastAPI)
#### Create Virtual Environment & Install Dependencies
```
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```
#### Add API Keys
- Create a config.js file inside the backend directory and add:
```
GOOGLE_FACTCHECK_API_KEY=your_google_factcheck_api_key
NEWSAPI_KEY=your_newsapi_key
```
#### Run the Backend Server
```
uvicorn main:app --reload
```

#### Backend runs on: 
```http://127.0.0.1:8000```

### 3️⃣ Frontend Setup (React & TailwindCSS)
#### Install Dependencies
```
cd factcheck-frontend
npm install
```
#### Start the Frontend
```
npm start
```

#### Frontend runs on: 
```
http://localhost:3000
```

### API Keys & Setup
#### You need two API keys for this project:
- Google FactCheck API Key – Get it from Google Fact Check Tools API.
- NewsAPI Key – Get it from NewsAPI.org.




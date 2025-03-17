import React from "react";
import { Link } from "react-router-dom";
import {  
  ShieldCheckIcon,  
  LightBulbIcon,  
  BellAlertIcon,  
  NewspaperIcon,  
  CameraIcon,  
  DocumentTextIcon  
} from "@heroicons/react/24/solid"; // ✅ Corrected for Heroicons v2


function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 🔹 Navigation Bar with Login/Signup */}
      <nav className="bg-red-600 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">📰 AI Fact-Checking System</h1>
        <div>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md font-semibold mr-2">
            Login
          </button>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md font-semibold">
            Sign Up
          </button>
        </div>
      </nav>

      {/* 🔹 Hero Section */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-4">Empowering Truth with AI</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Verify news, detect misinformation, and stay informed with AI-powered fact-checking.
        </p>
      </div>

      {/* 🔹 Features Section (2 Rows, 3 Columns) */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        {/* Feature 1 - Fact-Checking */}
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <ShieldCheckIcon className="h-12 w-12 text-blue-500 mx-auto mb-3" />
          <h2 className="text-2xl font-semibold">✔️ Real-Time Fact-Checking</h2>
          <p className="text-gray-600 mt-2">Enter a news headline and check its credibility.</p>
          <Link to="/factcheck" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
            Try Fact-Checking
          </Link>
        </div>

        {/* Feature 2 - AI Misinformation Detection (Future) */}
        <div className="p-6 bg-white rounded-lg shadow-md text-center opacity-50">
          <LightBulbIcon className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <h2 className="text-2xl font-semibold">🤖 AI Misinformation Detection</h2>
          <p className="text-gray-600 mt-2">Analyze claims using AI to detect misinformation.</p>
          <button className="mt-4 bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed">
            Coming Soon
          </button>
        </div>

        {/* Feature 3 - Trending Fake News Alerts (Future) */}
        <div className="p-6 bg-white rounded-lg shadow-md text-center opacity-50">
          <BellAlertIcon className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <h2 className="text-2xl font-semibold">🚨 Trending Fake News Alerts</h2>
          <p className="text-gray-600 mt-2">Stay updated with flagged fake news.</p>
          <button className="mt-4 bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed">
            Coming Soon
          </button>
        </div>

        {/* Feature 4 - Verified News Sources (Future) */}
        <div className="p-6 bg-white rounded-lg shadow-md text-center opacity-50">
          <NewspaperIcon className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <h2 className="text-2xl font-semibold">📜 Verified News Sources</h2>
          <p className="text-gray-600 mt-2">Find reliable news sources recommended by experts.</p>
          <button className="mt-4 bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed">
            Coming Soon
          </button>
        </div>

        {/* Feature 5 - Deepfake Reverse Image Search (Future) */}
        <div className="p-6 bg-white rounded-lg shadow-md text-center opacity-50">
          <CameraIcon className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <h2 className="text-2xl font-semibold">🖼️ Deepfake Reverse Image Search</h2>
          <p className="text-gray-600 mt-2">Detect if an image is AI-generated.</p>
          <button className="mt-4 bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed">
            Coming Soon
          </button>
        </div>

        {/* Feature 6 - AI-Powered News Summarization */}
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <DocumentTextIcon className="h-12 w-12 text-blue-500 mx-auto mb-3" />
          <h2 className="text-2xl font-semibold">📝 AI-Powered News Summarization</h2>
          <p className="text-gray-600 mt-2">Convert verified news into engaging summaries.</p>
          <Link to="/summarize" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
            Try Summarization
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;

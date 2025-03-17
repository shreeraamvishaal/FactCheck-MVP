import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function NewsSummarization() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!url) return;

    setLoading(true);
    setSummary(null);

    try {
      const response = await axios.get(`http://127.0.0.1:8000/summarize/?url=${encodeURIComponent(url)}`);
      setSummary(response.data);
    } catch (error) {
      console.error("Summarization API Error:", error);
      setSummary({ error: "Failed to summarize the article." });
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Link to="/" className="absolute top-4 left-4 bg-blue-500 text-white text-base px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition">
        ⬅️ Home
      </Link>

      <h1 className="text-3xl font-bold mb-4">AI News Summarization</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter news article URL..."
        className="p-2 border border-gray-300 rounded w-96"
      />
      <button onClick={handleSummarize} className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
        {loading ? "Summarizing..." : "Start Summarizing"}
      </button>

      {summary && (
        <div className="mt-4 p-4 bg-white shadow-md rounded w-96">
          {summary.error ? (
            <p className="text-red-500">{summary.error}</p>
          ) : (
            <>
              <h2 className="text-lg font-semibold">{summary.title}</h2>
              <p className="text-gray-700 mt-2">{summary.summary}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default NewsSummarization;

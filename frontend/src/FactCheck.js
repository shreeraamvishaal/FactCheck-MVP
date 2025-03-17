import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FactCheck() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState({ claims: [], aiCredibilityScore: null, aiLabel: "" });

  const handleCheck = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/factcheck/?query=${query}`);
      console.log("API Response:", response.data); // Debugging: Check the actual data

      setResult({
        claims: response.data.claims || [],
        aiCredibilityScore: response.data.ai_credibility_score || null,
        aiLabel: response.data.ai_label || "Unknown",
        message: response.data.message || null
      });

    } catch (error) {
      console.error("Error fetching data:", error);
      setResult({ error: "Failed to fetch fact-checking results." });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 relative">
      {/* 🔹 Back to Home Button (Top Left, Slightly Bigger) */}
      <Link to="/" className="absolute top-4 left-4 bg-blue-500 text-white text-base px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition">
        ⬅️ Home
      </Link>

      <h1 className="text-3xl font-bold mb-4">AI Fact-Checking System</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter news headline..."
        className="p-2 border border-gray-300 rounded w-80"
      />
      <button onClick={handleCheck} className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
        Check Fact
      </button>

      {result && Object.keys(result).length > 0 && (
        <div className="mt-4 p-4 bg-white shadow-md rounded w-96">
          <h2 className="text-lg font-semibold">Fact-Checking Results:</h2>

          {result.message ? (
            <p className="text-gray-600">{result.message}</p>
          ) : (
            <>
              {/* 🔥 AI Credibility Score */}
              {result.aiCredibilityScore !== null && (
                <div
                  className="p-4 mb-4 rounded-lg shadow-lg text-center text-white text-2xl font-bold"
                  style={{
                    backgroundColor: result.aiCredibilityScore > 70 ? "green" :
                                    result.aiCredibilityScore > 40 ? "yellow" : "red"
                  }}>
                  AI Credibility Score: {result.aiCredibilityScore}% 
                  <p className="text-sm">{result.aiLabel}</p>
                </div>
              )}

              {Array.isArray(result.claims) && result.claims.length > 0 ? (
                result.claims.map((claim, index) => (
                  <div key={index} className="border-t mt-4 pt-4 pb-4">
                    <p className="font-bold text-lg">Claim:</p>
                    <p className="text-gray-700 text-lg">"{claim.text}"</p>
                    
                    <p className="mt-2 font-bold text-md">Claimed by:</p>
                    <p className="text-gray-700">{claim.claimant || "Unknown"}</p>

                    {claim.claimReview && claim.claimReview.length > 0 && (
                      <div className="mt-2">
                        <p className="font-bold text-md">Fact-Check Review:</p>
                        {claim.claimReview.map((review, idx) => (
                          <div key={idx} className="mt-3 p-3 border border-gray-300 rounded bg-gray-50">
                            <p className="text-blue-500 font-semibold">
                              {review.publisher.name} - 
                              <a href={review.url} className="underline text-blue-600 ml-1" target="_blank" rel="noopener noreferrer">Read More</a>
                            </p>

                            {/* 🔥 Credibility Rating - BIGGER and More Visible */}
                            {review.textualRating && (
                              <p className={`mt-2 text-center text-2xl font-extrabold px-4 py-2 rounded shadow-md ${
                                review.textualRating.toLowerCase() === "false" ? "bg-red-500 text-white" :
                                review.textualRating.toLowerCase() === "true" ? "bg-green-500 text-white" :
                                "bg-yellow-500 text-black"
                              }`}>
                                {review.textualRating.toUpperCase()}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No fact-checking results found.</p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default FactCheck;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FactCheck from "./FactCheck";
import NewsSummarization from "./NewsSummarization"; // ✅ Import the new page


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page as Default */}
        <Route path="/factcheck" element={<FactCheck />} /> {/* Fact-Check Page */}
        <Route path="/summarize" element={<NewsSummarization />} /> {/* ✅ New Route */}
      </Routes>
    </Router>
  );
}

export default App;

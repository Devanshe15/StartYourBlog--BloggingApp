import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; 
import React from "react";

import Signup from "./components/Signup";
import LandingPage from "./components/Landingpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<Signup />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; 
import React from "react";
import Signup from "./components/Signup";
import LandingPage from "./components/Landingpage";
import CreatePost from "./components/CreatePost";
import { AnimatedBackground } from 'animated-backgrounds';

function App() {
  return (
    <div>
      <AnimatedBackground animationName="galaxySpiral" 
        blendMode="hard-light" />
   
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<Signup />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/createPost" element={<CreatePost />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

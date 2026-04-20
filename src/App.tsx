import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SuccessPage from './pages/SuccessPage';
import LeadsDashboard from './pages/LeadsDashboard';
import ProfileConfig from './pages/ProfileConfig';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/dashboard" element={<LeadsDashboard />} />
        <Route path="/profile" element={<ProfileConfig />} />
      </Routes>
    </Router>
  );
}

export default App;

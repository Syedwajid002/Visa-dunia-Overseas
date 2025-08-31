import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhyStudyAbroad from './pages/WhyStudyAbroad';
import StudyDestinations from './pages/StudyDestinations';
import StudentServices from './pages/StudentServices';
import TestPrep from './pages/TestPrep';
import Company from './pages/Company';
import Immigration from './pages/Immigration';
import Gallery from './pages/Gallery';
import ReferEarn from './pages/ReferEarn';
import Contact from './pages/Contact';
import CountryPage from './pages/CountryPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-study-abroad" element={<WhyStudyAbroad />} />
          <Route path="/study-destinations" element={<StudyDestinations />} />
          <Route path="/student-services" element={<StudentServices />} />
          <Route path="/test-prep" element={<TestPrep />} />
          <Route path="/company" element={<Company />} />
          <Route path="/immigration" element={<Immigration />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/refer-earn" element={<ReferEarn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/country/:country" element={<CountryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
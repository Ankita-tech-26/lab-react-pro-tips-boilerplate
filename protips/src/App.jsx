import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import RegistrationForm from './pages/RegistrationForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;


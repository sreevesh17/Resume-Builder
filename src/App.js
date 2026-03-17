import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

import DashboardHome from './components/DashboardHome';
import MyResumes from './components/MyResumes';
import JobTracker from './components/JobTracker';
import CoverLetters from './components/CoverLetters';
import Library from './components/Library';
import Profile from './components/Profile';
import Invoices from './components/Invoices';
import Schedules from './components/Schedules';
import AICredits from './components/AICredits';

import './components/Auth.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogout = () => {
    setLoggedInUser(null);
    setIsLogin(true);
  };

  // If we have a user in state, render the Dashboard
  if (loggedInUser) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard user={loggedInUser} onLogout={handleLogout} />}>
            <Route index element={<DashboardHome />} />
            <Route path="resumes" element={<MyResumes />} />
            <Route path="jobs" element={<JobTracker />} />
            <Route path="cover-letters" element={<CoverLetters />} />
            <Route path="library" element={<Library />} />
            <Route path="profile" element={<Profile user={loggedInUser} />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="schedules" element={<Schedules />} />
            <Route path="credits" element={<AICredits />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

  // Otherwise, render the Auth flows
  return (
    <div className="auth-wrapper">
      {isLogin ? (
        <Login
          onSwitchToRegister={() => setIsLogin(false)}
          onLoginSuccess={(user) => setLoggedInUser(user)}
        />
      ) : (
        <Register onSwitchToLogin={() => setIsLogin(true)} />
      )}
    </div>
  );
}

export default App;

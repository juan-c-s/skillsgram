import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './layout/Header';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import ProfilePage from './pages/ProfilePage';
import { RouteProps } from "react-router-dom";
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/profile/:id" Component={ProfilePage} />
        <Route path="/home" Component={HomePage} />
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
  </Router>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './layout/Header';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

import ProfilePage from './components/ProfilePage';
import { RouteProps } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/profile" Component={ProfilePage} />
      </Routes>
  </Router>
  );
}

export default App;

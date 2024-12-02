import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserDetailPage from './pages/UserDetailPage';
import AddUserForm from "./components/AddUserForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:id" element={<UserDetailPage />} />
        <Route path="/add-user" element={<AddUserForm />} />

      </Routes>
    </Router>
  );
}

export default App;

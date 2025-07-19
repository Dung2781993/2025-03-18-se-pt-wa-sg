// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Students from './pages/Students';
import StudentDetail from './pages/StudentDetail';
import Courses from './pages/Courses';
import { useState } from 'react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <main className="max-w-4xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
            <Route path="/students" element={isAuthenticated ? <Students /> : <Navigate to="/login" />} />
            <Route path="/students/:id" element={isAuthenticated ? <StudentDetail /> : <Navigate to="/login" />} />
            <Route path="/courses" element={isAuthenticated ? <Courses /> : <Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// students/detail/:id
// students/courses

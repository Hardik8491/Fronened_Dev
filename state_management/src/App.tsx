import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CoursesList from './components/courseList';
import AddCourse from './components/addCourse';


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Zustand Courses App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Course</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CoursesList />} />
          <Route path="/add" element={<AddCourse />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

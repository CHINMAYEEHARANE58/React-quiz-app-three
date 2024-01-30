import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent';
import questions from './resources/quizQuestion.json';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent/>} />
          <Route path="/quiz" element={<QuizComponent questions={questions} />} />
          <Route path="/result" element={<ResultComponent />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
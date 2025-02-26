import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

// Pages
import Dashboard from './pages/Dashboard';
import AIReports from './pages/AIReports';
import Appointments from './pages/Appointments';
import Patients from './pages/Patients';
import Chat from './pages/Chat';
import Settings from './pages/Settings';
import ReportReview from './pages/ReportReview';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ai-reports" element={<AIReports />} />
            <Route path="/ai-reports/:id" element={<ReportReview />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

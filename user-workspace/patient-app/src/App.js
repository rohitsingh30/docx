import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AIReports from './pages/AIReports';
import Appointments from './pages/Appointments';
import Chat from './pages/Chat';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ai-reports" element={<AIReports />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

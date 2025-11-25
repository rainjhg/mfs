import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import MainPage from './pages/MainPage';
import TeamManagement from './pages/TeamManagement';
import Schedule from './pages/Schedule';
import Resources from './pages/Resources';
import AdminSettings from './pages/AdminSettings';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/team-management" element={<TeamManagement />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/admin-settings" element={<AdminSettings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
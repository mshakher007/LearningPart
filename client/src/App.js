import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import {
  Dashboard,
  Leads,
  EmailCampaigns,
  QuoteBuilder,
  ProposalGenerator,
  AdminPanel,
  Login,
  Register
} from './pages';
import { Navbar, Sidebar } from './components';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Navbar />
          <Content style={{ padding: '24px' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/emails" element={<EmailCampaigns />} />
              <Route path="/quotes" element={<QuoteBuilder />} />
              <Route path="/proposals" element={<ProposalGenerator />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;

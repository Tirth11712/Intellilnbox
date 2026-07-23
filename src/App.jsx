import React, { useState } from 'react';
import confetti from 'canvas-confetti';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './components/DashboardView';
import TriageFeedView from './components/TriageFeedView';
import N8nVisualizerView from './components/N8nVisualizerView';
import AuditLogsView from './components/AuditLogsView';
import ConfigView from './components/ConfigView';
import ManualSetupGuideView from './components/ManualSetupGuideView';
import EmailSimulationModal from './components/EmailSimulationModal';
import LoginModal from './components/LoginModal';

import { initialEmails, initialConfig, n8nWorkflowExportJSON } from './data/mockData';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [adminUser, setAdminUser] = useState({ name: 'George Admin', email: 'hello.designer@gmail.com' });

  const [activeTab, setActiveTab] = useState('dashboard');
  const [emails, setEmails] = useState(initialEmails);
  const [config, setConfig] = useState(initialConfig);
  
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isSimulationOpen, setIsSimulationOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Handle Login & Logout
  const handleLogin = (user) => {
    setAdminUser(user);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // Handle reclassification override
  const handleReclassify = (emailId, newCategory) => {
    const destMap = {
      Admissions: 'admissions@college.edu',
      Events: 'events@college.edu',
      General: 'general@college.edu'
    };

    setEmails(prev => prev.map(e => {
      if (e.id === emailId) {
        return {
          ...e,
          category: newCategory,
          routingDestination: destMap[newCategory] || e.routingDestination,
          forwardedSubject: `[${newCategory.toUpperCase()}] ${e.originalSubject}`
        };
      }
      return e;
    }));
  };

  // Handle training feedback
  const handleFeedback = (emailId, feedbackType) => {
    setEmails(prev => prev.map(e => e.id === emailId ? { ...e, feedback: feedbackType } : e));
  };

  // Handle simulation complete
  const handleSimulateComplete = (newEmail) => {
    setEmails(prev => [newEmail, ...prev]);
    setSelectedEmail(newEmail);
    setActiveTab('triage');

    // Launch celebratory confetti effect
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  // Download n8n workflow JSON file
  const handleExportWorkflow = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(n8nWorkflowExportJSON, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "triage_college_inquiry_workflow.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // If not authenticated, render Login Modal Screen
  if (!isAuthenticated) {
    return <LoginModal onLogin={handleLogin} />;
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f4f7' }}>
      {/* Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        emailCount={emails.length}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflowY: 'auto' }}>
        
        {/* Header */}
        <Header 
          onOpenSimulation={() => setIsSimulationOpen(true)}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          unreadCount={emails.filter(e => e.feedback === null).length}
          setActiveTab={setActiveTab}
        />

        {/* Tab Content Router */}
        <main style={{ flex: 1 }}>
          {activeTab === 'dashboard' && (
            <DashboardView 
              emails={emails} 
              onSelectEmail={(email) => { setSelectedEmail(email); setActiveTab('triage'); }}
              onOpenSimulation={() => setIsSimulationOpen(true)}
              onExportWorkflow={handleExportWorkflow}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === 'triage' && (
            <TriageFeedView 
              emails={emails} 
              selectedEmail={selectedEmail}
              onSelectEmail={setSelectedEmail}
              onReclassify={handleReclassify}
              onFeedback={handleFeedback}
            />
          )}

          {activeTab === 'workflow' && (
            <N8nVisualizerView 
              onExportWorkflow={handleExportWorkflow}
              onOpenSimulation={() => setIsSimulationOpen(true)}
            />
          )}

          {activeTab === 'logs' && (
            <AuditLogsView emails={emails} />
          )}

          {activeTab === 'config' && (
            <ConfigView 
              config={config} 
              onSaveConfig={setConfig} 
            />
          )}

          {activeTab === 'guide' && (
            <ManualSetupGuideView 
              onExportWorkflow={handleExportWorkflow} 
            />
          )}
        </main>
      </div>

      {/* Simulation Modal */}
      <EmailSimulationModal 
        isOpen={isSimulationOpen}
        onClose={() => setIsSimulationOpen(false)}
        onSimulateComplete={handleSimulateComplete}
      />
    </div>
  );
}

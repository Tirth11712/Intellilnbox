import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Bell, 
  Calendar, 
  HelpCircle,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  X,
  ArrowRight
} from 'lucide-react';

export default function Header({ 
  onOpenSimulation, 
  searchTerm, 
  setSearchTerm, 
  setActiveTab 
}) {
  const [showAlerts, setShowAlerts] = useState(false);
  const [alertsList, setAlertsList] = useState([
    {
      id: 1,
      type: 'urgent',
      title: 'High-Urgency Inquiry Received',
      desc: 'Marcus Vance requested urgent campus tour parking instructions.',
      time: '12m ago'
    },
    {
      id: 2,
      type: 'warning',
      title: 'n8n Workflow Execution Note',
      desc: '1 inquiry processed with 98.4% confidence score.',
      time: '34m ago'
    }
  ]);

  const alertCount = alertsList.length;

  const handleClearAlerts = () => {
    setAlertsList([]);
  };

  const handleRemoveAlert = (id) => {
    setAlertsList(prev => prev.filter(a => a.id !== id));
  };

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justify: 'space-between',
      padding: '20px 32px 12px 32px',
      background: '#f4f4f7',
      position: 'relative'
    }}>
      {/* Search Input Pill */}
      <div style={{ position: 'relative', width: '280px' }}>
        <Search size={16} color="#71717a" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
        <input
          type="text"
          placeholder="Search inquiries, senders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '9px 14px 9px 40px',
            borderRadius: '9999px',
            background: '#ffffff',
            border: '1px solid #e4e4e7',
            color: '#0f0f10',
            fontSize: '0.84rem',
            outline: 'none',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
          }}
        />
      </div>

      {/* Right Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative' }}>
        
        {/* Notification Pill */}
        <div 
          onClick={() => setShowAlerts(!showAlerts)}
          style={{
            background: showAlerts ? '#0f0f10' : '#ffffff',
            color: showAlerts ? '#ffffff' : '#0f0f10',
            border: '1px solid #e4e4e7',
            padding: '7px 16px',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.78rem',
            fontWeight: 800,
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            userSelect: 'none'
          }}
        >
          <Bell size={14} color={showAlerts ? '#ffffff' : '#0f0f10'} />
          <span>{alertCount} {alertCount === 1 ? 'Alert' : 'Alerts'}</span>
          {alertCount > 0 && (
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#be123c'
            }} />
          )}
        </div>

        {/* ALERTS DROPDOWN POPOVER */}
        {showAlerts && (
          <div style={{
            position: 'absolute',
            top: '46px',
            right: '150px',
            width: '340px',
            background: '#ffffff',
            border: '1px solid #e4e4e7',
            borderRadius: '20px',
            padding: '18px',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
            zIndex: 60
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f0f10' }}>
                System Alerts ({alertCount})
              </div>
              {alertCount > 0 && (
                <span 
                  onClick={handleClearAlerts}
                  style={{ fontSize: '0.72rem', color: '#4f46e5', fontWeight: 700, cursor: 'pointer' }}
                >
                  Clear All
                </span>
              )}
            </div>

            {alertCount === 0 ? (
              <div style={{ padding: '20px 0', textAlign: 'center', color: '#71717a', fontSize: '0.82rem' }}>
                <CheckCircle2 size={24} color="#137333" style={{ marginBottom: '6px' }} />
                <div>All alerts caught up!</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {alertsList.map((alert) => (
                  <div key={alert.id} style={{
                    background: alert.type === 'urgent' ? '#ffe4e6' : '#f4f4f7',
                    padding: '12px',
                    borderRadius: '12px',
                    border: alert.type === 'urgent' ? '1px solid #fda4af' : '1px solid #e4e4e7',
                    position: 'relative'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 800, color: alert.type === 'urgent' ? '#be123c' : '#0f0f10' }}>
                        {alert.title}
                      </div>
                      <button 
                        onClick={() => handleRemoveAlert(alert.id)}
                        style={{ background: 'transparent', border: 'none', color: '#71717a', cursor: 'pointer' }}
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <p style={{ fontSize: '0.76rem', color: '#334155', lineHeight: '1.4', marginBottom: '6px' }}>
                      {alert.desc}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.7rem', color: '#71717a' }}>
                      <span>{alert.time}</span>
                      <span 
                        onClick={() => { setShowAlerts(false); if (setActiveTab) setActiveTab('triage'); }} 
                        style={{ color: '#0f0f10', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2px' }}
                      >
                        View Queue <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Primary Simulation Button */}
        <button 
          onClick={onOpenSimulation}
          className="btn-jobgio-black"
          style={{ padding: '8px 20px', fontSize: '0.82rem' }}
        >
          <Plus size={16} /> Simulate Email
        </button>
      </div>
    </header>
  );
}

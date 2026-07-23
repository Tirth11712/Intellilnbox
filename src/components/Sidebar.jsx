import React from 'react';
import { 
  Briefcase, 
  FileText, 
  Building2, 
  Users, 
  Layers, 
  BarChart2, 
  Settings, 
  BookOpen, 
  Mail, 
  Workflow, 
  ScrollText, 
  HelpCircle,
  LogOut
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, emailCount, onLogout }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Briefcase },
    { id: 'triage', label: 'Inquiry Queue', icon: Mail, count: emailCount },
    { id: 'workflow', label: 'n8n Pipeline', icon: Workflow },
    { id: 'logs', label: 'Audit Logs', icon: ScrollText },
    { id: 'config', label: 'Settings', icon: Settings },
    { id: 'guide', label: 'Setup Guide', icon: HelpCircle },
  ];

  return (
    <aside style={{
      width: '230px',
      minWidth: '230px',
      height: '100vh',
      position: 'sticky',
      top: 0,
      background: '#ffffff',
      borderRight: '1px solid #e4e4e7',
      display: 'flex',
      flexDirection: 'column',
      justify: 'space-between',
      padding: '24px 16px',
      zIndex: 40,
      userSelect: 'none'
    }}>
      {/* Top Section */}
      <div>
        {/* INTELLIINBOX CUSTOM ENVELOPE LOGO */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '4px 8px 24px 8px',
          borderBottom: '1px solid #f4f4f7',
          marginBottom: '20px'
        }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: '#ffffff',
            border: '1px solid #e4e4e7',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            flexShrink: 0,
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            overflow: 'hidden',
            padding: '4px'
          }}>
            <img src="/logo.png" alt="IntelliInbox Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f0f10', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              IntelliInbox<span style={{ color: '#4f46e5', fontWeight: 700 }}>.n8n</span>
            </div>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 600, letterSpacing: '0.02em', marginTop: '2px' }}>
              College Email Router
            </div>
          </div>
        </div>

        {/* Navigation Item List */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  width: '100%',
                  padding: '10px 16px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: isActive ? '#0f0f10' : 'transparent',
                  color: isActive ? '#ffffff' : '#71717a',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = '#f4f4f7';
                    e.currentTarget.style.color = '#0f0f10';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#71717a';
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Icon size={17} color={isActive ? '#ffffff' : '#71717a'} />
                  <span>{item.label}</span>
                </div>

                {item.count > 0 && !isActive && (
                  <span style={{
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    background: '#ececee',
                    color: '#0f0f10',
                    padding: '2px 7px',
                    borderRadius: '9999px'
                  }}>
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* ADMIN PROFILE */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        padding: '10px 12px',
        borderRadius: '16px',
        background: '#f8fafc',
        border: '1px solid #e4e4e7',
        boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
          
          <div style={{ position: 'relative', flexShrink: 0, width: '38px', height: '38px' }}>
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" 
              alt="George Admin" 
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
            />
            <span style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              padding: '1px 5px',
              borderRadius: '9999px',
              background: '#0f0f10',
              color: '#ffffff',
              fontSize: '0.62rem',
              fontWeight: 800,
              border: '2px solid #ffffff',
              lineHeight: 1
            }}>
              12
            </span>
          </div>

          <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f0f10', lineHeight: 1.2 }}>
              George Admin
            </div>
            <div style={{ fontSize: '0.68rem', color: '#71717a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '1px' }}>
              hello.designer@gmail.com
            </div>
          </div>
        </div>

        <button 
          onClick={onLogout} 
          title="Sign Out"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#71717a',
            cursor: 'pointer',
            padding: '6px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            flexShrink: 0,
            transition: 'all 0.15s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#be123c'; e.currentTarget.style.background = '#ffe4e6'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#71717a'; e.currentTarget.style.background = 'transparent'; }}
        >
          <LogOut size={16} />
        </button>
      </div>

    </aside>
  );
}

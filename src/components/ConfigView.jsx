import React, { useState } from 'react';
import { 
  Settings, 
  Save, 
  Check, 
  Mail, 
  Clock, 
  Bot, 
  Sliders, 
  ShieldAlert, 
  Tag,
  Zap,
  CheckCircle2,
  Cpu,
  Gift
} from 'lucide-react';

export default function ConfigView({ config, onSaveConfig }) {
  const [formData, setFormData] = useState({ ...config });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '24px', background: '#f4f4f7' }}>
      
      {/* Header */}
      <div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f0f10' }}>
          Department Routing & Workflow Configuration
        </h2>
        <p style={{ color: '#71717a', fontSize: '0.9rem' }}>
          Manage email check intervals, target department inboxes, subject line formatting, and AI model providers (Free & Paid options).
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* SECTION 1: AI Model Provider (Free Alternatives Highlighted) */}
        <div className="jobgio-card" style={{ padding: '28px', border: '2px solid #0f0f10' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f0f10', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Cpu size={20} color="#0f0f10" /> AI Classifier Engine Provider
            </h3>
            <span className="jobgio-pill" style={{ background: '#e6f4ea', color: '#137333', fontWeight: 800 }}>
              <Gift size={12} /> 100% Free Alternatives Available
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0f0f10', marginBottom: '6px' }}>
                Select AI Engine Provider:
              </label>
              <select
                value={formData.aiModel || "Groq AI (Free)"}
                onChange={(e) => setFormData({ ...formData, aiModel: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: '#ffffff',
                  border: '2px solid #0f0f10',
                  color: '#0f0f10',
                  fontSize: '0.88rem',
                  fontWeight: 700
                }}
              >
                <option value="Groq AI (Free)">⚡ Groq Cloud (100% Free API Key — Llama 3.3 70B)</option>
                <option value="Google Gemini (Free)">✨ Google Gemini API (Free Tier — Gemini 2.0 Flash)</option>
                <option value="Ollama (Local Free)">🦙 Ollama Local LLM (100% Free, Offline, No API Key Required)</option>
                <option value="OpenAI (GPT-4o-mini)">🧠 OpenAI GPT-4o-mini (Paid API Key Required)</option>
              </select>
            </div>

            <div style={{ background: '#f4f4f7', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e4e4e7', fontSize: '0.8rem', color: '#71717a' }}>
              <div style={{ fontWeight: 800, color: '#0f0f10', marginBottom: '4px' }}>💡 Free AI Alternative Note:</div>
              If you do not have an OpenAI API key, select <strong>Groq Cloud</strong> (free API key at <code>console.groq.com</code>) or <strong>Ollama</strong> (runs locally on your PC with 0 API keys and total FERPA data privacy).
            </div>
          </div>
        </div>

        {/* SECTION 2: Department Email Routing Targets */}
        <div className="jobgio-card" style={{ padding: '28px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f0f10', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Mail size={18} color="#0f0f10" /> Department Destination Inboxes
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f0f10', marginBottom: '6px' }}>
                Admissions Department Email:
              </label>
              <input
                type="email"
                value={formData.admissionsEmail}
                onChange={(e) => setFormData({ ...formData, admissionsEmail: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: '#ffffff',
                  border: '1px solid #e4e4e7',
                  color: '#0f0f10',
                  fontSize: '0.88rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f0f10', marginBottom: '6px' }}>
                Events / Outreach Department Email:
              </label>
              <input
                type="email"
                value={formData.eventsEmail}
                onChange={(e) => setFormData({ ...formData, eventsEmail: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: '#ffffff',
                  border: '1px solid #e4e4e7',
                  color: '#0f0f10',
                  fontSize: '0.88rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f0f10', marginBottom: '6px' }}>
                General Inquiries Department Email:
              </label>
              <input
                type="email"
                value={formData.generalEmail}
                onChange={(e) => setFormData({ ...formData, generalEmail: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: '#ffffff',
                  border: '1px solid #e4e4e7',
                  color: '#0f0f10',
                  fontSize: '0.88rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#0f0f10', marginBottom: '6px' }}>
                Workflow Admin Alert Email:
              </label>
              <input
                type="email"
                value={formData.adminAlertEmail}
                onChange={(e) => setFormData({ ...formData, adminAlertEmail: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: '#ffffff',
                  border: '1px solid #e4e4e7',
                  color: '#0f0f10',
                  fontSize: '0.88rem'
                }}
              />
            </div>
          </div>
        </div>

        {/* Save Button Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button type="submit" className="btn-jobgio-black" style={{ padding: '12px 32px', fontSize: '0.92rem' }}>
            <Save size={18} /> Save Settings
          </button>

          {savedSuccess && (
            <span style={{ color: '#137333', fontSize: '0.88rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={18} /> Configuration Saved & Applied to n8n Engine!
            </span>
          )}
        </div>

      </form>

    </div>
  );
}

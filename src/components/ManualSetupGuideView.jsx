import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Key, 
  Mail, 
  Layers, 
  Zap, 
  ExternalLink,
  Download,
  Gift,
  Cpu,
  Globe,
  Lock,
  ToggleRight,
  Power
} from 'lucide-react';

export default function ManualSetupGuideView({ onExportWorkflow }) {
  return (
    <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '24px', background: '#f4f4f7' }}>
      
      {/* Header */}
      <div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f0f10', display: 'flex', alignItems: 'center', gap: '10px' }}>
          n8n Integration Guide & Workflow Activation
        </h2>
        <p style={{ color: '#71717a', fontSize: '0.9rem' }}>
          Step-by-step instructions for activating your imported workflow in n8n and using free AI models.
        </p>
      </div>

      {/* SPECIAL HIGHLIGHT: WHERE IS THE ACTIVE TOGGLE SWITCH IN N8N */}
      <div className="jobgio-card" style={{ padding: '28px', border: '2px solid #0f0f10' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#0f0f10', color: '#ffffff', display: 'flex', alignItems: 'center', justify: 'center' }}>
            <Power size={22} color="#ffffff" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f0f10' }}>
              Where is the "Active" Switch in n8n?
            </h3>
            <span style={{ fontSize: '0.82rem', color: '#71717a' }}>
              In the n8n web editor, imported workflows start as <strong>Inactive</strong>. Follow this quick location guide:
            </span>
          </div>
        </div>

        {/* Visual Mockup of n8n Header Bar */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid #e4e4e7',
          marginBottom: '16px'
        }}>
          <div style={{ fontSize: '0.75rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px', fontWeight: 700 }}>
            🖥️ n8n Top Navigation Bar Mockup:
          </div>

          <div style={{
            background: '#f4f4f7',
            padding: '12px 20px',
            borderRadius: '12px',
            border: '1px solid #d4d4d8',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontWeight: 800, color: '#0f0f10', fontSize: '0.9rem' }}>
                College Inquiry Triage Workflow
              </span>
              <span style={{ fontSize: '0.72rem', background: '#ffffff', padding: '2px 8px', borderRadius: '4px', color: '#71717a', fontWeight: 600 }}>
                v1.0
              </span>
            </div>

            {/* Simulated Active Switch */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '0.8rem', color: '#71717a' }}>Test Workflow</span>
              <span style={{ fontSize: '0.8rem', color: '#71717a' }}>Save</span>
              
              {/* THE ACTIVE SWITCH */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#0f0f10',
                color: '#ffffff',
                padding: '6px 16px',
                borderRadius: '9999px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800 }}>Active</span>
                <ToggleRight size={22} color="#ffffff" />
              </div>
            </div>
          </div>
        </div>

        <ol style={{ paddingLeft: '20px', color: '#27272a', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>Open your workflow on the <strong>n8n canvas editor screen</strong>.</li>
          <li>Look at the <strong>Top-Right Corner</strong> of your screen (next to the <i>Save</i> and <i>Test Workflow</i> buttons).</li>
          <li>Click the gray toggle button labeled <strong>"Inactive"</strong> so it switches to black/green <strong>"Active"</strong>.</li>
          <li>That's it! n8n will now automatically poll your Gmail inbox and classify inquiries automatically.</li>
        </ol>
      </div>

      {/* Summary Box */}
      <div className="jobgio-card" style={{
        padding: '24px',
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f0f10', marginBottom: '4px' }}>
            Ready to Deploy to Live n8n Engine?
          </h3>
          <p style={{ color: '#71717a', fontSize: '0.88rem' }}>
            Download the pre-configured workflow JSON file and import it directly into your n8n workspace with 1 click.
          </p>
        </div>
        <button onClick={onExportWorkflow} className="btn-jobgio-black" style={{ padding: '10px 24px' }}>
          <Download size={18} /> Download n8n Workflow JSON
        </button>
      </div>

      {/* SPECIAL SECTION: FREE ALTERNATIVES TO OPENAI */}
      <div className="jobgio-card" style={{ padding: '28px', border: '1px solid #137333', background: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <Gift size={24} color="#137333" />
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f0f10' }}>
              No OpenAI API Key? Top 3 100% Free Alternatives in n8n
            </h3>
            <span style={{ fontSize: '0.8rem', color: '#137333', fontWeight: 700 }}>
              You do NOT need to pay for OpenAI! You can use any of these free models in n8n:
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
          
          {/* Option 1: Groq */}
          <div style={{ background: '#f4f4f7', padding: '18px', borderRadius: '16px', border: '1px solid #e4e4e7' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f0f10', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Zap size={16} /> 1. Groq Cloud (Recommended)
            </div>
            <div style={{ fontSize: '0.78rem', color: '#137333', fontWeight: 800, marginBottom: '8px' }}>
              ⚡ 100% Free • Ultra-Fast • No Credit Card
            </div>
            <p style={{ fontSize: '0.8rem', color: '#71717a', lineHeight: '1.5', marginBottom: '10px' }}>
              Get a free API key instantly at <code>console.groq.com</code>. In n8n, use the Groq or OpenAI Chat Model node pointing to model <code>llama-3.3-70b-versatile</code>.
            </p>
            <a href="https://console.groq.com" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#0f0f10', textDecoration: 'underline', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              Get Free Groq Key <ExternalLink size={12} />
            </a>
          </div>

          {/* Option 2: Google Gemini */}
          <div style={{ background: '#f4f4f7', padding: '18px', borderRadius: '16px', border: '1px solid #e4e4e7' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#6b21a8', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Globe size={16} /> 2. Google Gemini API
            </div>
            <div style={{ fontSize: '0.78rem', color: '#137333', fontWeight: 800, marginBottom: '8px' }}>
              ✨ 100% Free Tier (1,500 Requests/Day)
            </div>
            <p style={{ fontSize: '0.8rem', color: '#71717a', lineHeight: '1.5', marginBottom: '10px' }}>
              Get a free API key at Google AI Studio (<code>aistudio.google.com</code>). n8n has a native <strong>Google Gemini Chat Model</strong> node for <code>gemini-2.0-flash</code>.
            </p>
            <a href="https://aistudio.google.com" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#6b21a8', textDecoration: 'underline', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              Get Free Gemini Key <ExternalLink size={12} />
            </a>
          </div>

          {/* Option 3: Ollama Local */}
          <div style={{ background: '#f4f4f7', padding: '18px', borderRadius: '16px', border: '1px solid #e4e4e7' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#137333', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Lock size={16} /> 3. Ollama (100% Local)
            </div>
            <div style={{ fontSize: '0.78rem', color: '#137333', fontWeight: 800, marginBottom: '8px' }}>
              🦙 0 API Keys Needed • FERPA Compliant
            </div>
            <p style={{ fontSize: '0.8rem', color: '#71717a', lineHeight: '1.5', marginBottom: '10px' }}>
              Install Ollama on your computer (<code>ollama.com</code>) and run <code>ollama run llama3</code>. n8n connects to local host <code>http://localhost:11434</code> with ZERO internet API calls!
            </p>
            <a href="https://ollama.com" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#137333', textDecoration: 'underline', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              Download Ollama <ExternalLink size={12} />
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}

import React, { useState } from 'react';
import { 
  Play, 
  Download, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Bot, 
  GitFork, 
  Database, 
  Zap, 
  Code,
  Layers,
  Copy,
  Check
} from 'lucide-react';

export default function N8nVisualizerView({ onExportWorkflow, onOpenSimulation }) {
  const [selectedNodeId, setSelectedNodeId] = useState('node-3');
  const [copied, setCopied] = useState(false);
  const [simulatingStep, setSimulatingStep] = useState(null);

  const nodes = [
    {
      id: 'node-1',
      title: 'Gmail Trigger',
      subtitle: 'Polls unread student emails',
      type: 'n8n-nodes-base.gmailTrigger',
      icon: Mail,
      color: '#ef4444',
      inputPayload: { pollIntervalMinutes: 5, label: 'INBOX', status: 'unread' },
      outputPayload: { from: 'sarah.j.2026@gmail.com', subject: 'CS Transfer Questions', body: 'I am applying for transfer...' }
    },
    {
      id: 'node-2',
      title: 'Extract Payload',
      subtitle: 'Parses text, headers & metadata',
      type: 'n8n-nodes-base.set',
      icon: Code,
      color: '#0f0f10',
      inputPayload: { rawPayload: '...' },
      outputPayload: { senderName: 'Sarah Jenkins', senderEmail: 'sarah.j.2026@gmail.com', subject: 'CS Transfer Questions' }
    },
    {
      id: 'node-3',
      title: 'AI Intent Classifier',
      subtitle: 'n8n LLM node for intent + summary',
      type: 'n8n-nodes-base.openAi',
      icon: Bot,
      color: '#6b21a8',
      inputPayload: { prompt: 'Classify intent: Admissions | Events | General...', text: '...' },
      outputPayload: { 
        category: 'Admissions', 
        confidence: 0.98, 
        mainQuestion: 'Inquiring about Fall 2026 CS transfer credit requirements',
        urgencyLevel: 'Normal' 
      }
    },
    {
      id: 'node-4',
      title: 'Dept Router',
      subtitle: 'Conditional Switch node',
      type: 'n8n-nodes-base.switch',
      icon: GitFork,
      color: '#f59e0b',
      inputPayload: { category: 'Admissions' },
      outputPayload: { branchOutput: 'Admissions (Port 0)' }
    },
    {
      id: 'node-5',
      title: 'Dept Mailer',
      subtitle: 'Forwards email + summary to dept',
      type: 'n8n-nodes-base.gmail',
      icon: Mail,
      color: '#137333',
      inputPayload: { sendTo: 'admissions@college.edu', subject: '[ADMISSIONS] CS Transfer Questions' },
      outputPayload: { messageId: 'msg_9081_sent', status: 'delivered' }
    },
    {
      id: 'node-6',
      title: 'Audit Logger',
      subtitle: 'Appends log to PostgreSQL',
      type: 'n8n-nodes-base.postgres',
      icon: Database,
      color: '#0369a1',
      inputPayload: { table: 'triage_audit_logs', status: 'success' },
      outputPayload: { logId: 'log_9081', timestamp: '2026-07-23T09:30:00Z' }
    }
  ];

  const selectedNode = nodes.find(n => n.id === selectedNodeId) || nodes[2];

  const handleSimulatePipeline = () => {
    setSimulatingStep(0);
    const interval = setInterval(() => {
      setSimulatingStep(prev => {
        if (prev >= nodes.length - 1) {
          clearInterval(interval);
          setTimeout(() => setSimulatingStep(null), 1500);
          return nodes.length - 1;
        }
        setSelectedNodeId(nodes[prev + 1].id);
        return prev + 1;
      });
    }, 900);
  };

  return (
    <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '24px', background: '#f4f4f7' }}>
      
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f0f10', display: 'flex', alignItems: 'center', gap: '10px' }}>
            n8n Workflow Node Pipeline <span style={{ fontSize: '0.8rem', background: '#ececee', color: '#0f0f10', padding: '3px 12px', borderRadius: '9999px', fontWeight: 700 }}>Live Node Graph</span>
          </h2>
          <p style={{ color: '#71717a', fontSize: '0.9rem' }}>
            Visual representation of the n8n automation pipeline. Click nodes to inspect runtime payload schemas or run step-by-step simulation.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            onClick={handleSimulatePipeline}
            className="btn-jobgio-outline"
            style={{ padding: '9px 18px', fontSize: '0.85rem' }}
          >
            <Play size={16} color="#0f0f10" /> Run Node Simulation
          </button>

          <button 
            onClick={onExportWorkflow}
            className="btn-jobgio-black"
            style={{ padding: '9px 20px', fontSize: '0.85rem' }}
          >
            <Download size={16} /> Export n8n JSON
          </button>
        </div>
      </div>

      {/* Visual Canvas & Payload Inspector Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '24px' }}>
        
        {/* Node Pipeline Canvas */}
        <div className="jobgio-card" style={{ padding: '28px', position: 'relative', overflow: 'hidden' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f0f10', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Zap size={14} /> Workflow Flow Chart
            </span>
            <span style={{ fontSize: '0.78rem', color: '#71717a', fontWeight: 700 }}>
              6 Nodes • Active Execution Path
            </span>
          </div>

          {/* Node Flow Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {nodes.map((node, index) => {
              const Icon = node.icon;
              const isSelected = selectedNodeId === node.id;
              const isSimulating = simulatingStep === index;

              return (
                <div key={node.id} style={{ display: 'flex', alignItems: 'center', gap: '16px', position: 'relative' }}>
                  
                  {/* Node Box */}
                  <div 
                    onClick={() => setSelectedNodeId(node.id)}
                    style={{
                      flex: 1,
                      padding: '16px 20px',
                      borderRadius: '16px',
                      background: isSelected ? '#ffffff' : '#f8fafc',
                      border: isSimulating ? '2px solid #0f0f10' : isSelected ? `2px solid ${node.color}` : '1px solid #e4e4e7',
                      boxShadow: isSimulating ? '0 0 20px rgba(15, 15, 16, 0.2)' : isSelected ? '0 4px 14px rgba(0,0,0,0.06)' : 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'space-between',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: `${node.color}15`,
                        border: `1px solid ${node.color}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justify: 'center'
                      }}>
                        <Icon size={20} color={node.color} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f0f10' }}>
                          {node.title}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#71717a' }}>
                          {node.subtitle}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.72rem', color: '#27272a', fontFamily: 'monospace', background: '#ececee', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                        {node.type.split('.')[1] || node.type}
                      </span>
                      {isSimulating && (
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#0f0f10' }}></span>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Payload Inspector Drawer */}
        <div className="jobgio-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0f0f10', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={16} color="#0f0f10" /> Node Payload Inspector
            </h4>
            <span style={{ fontSize: '0.75rem', color: '#137333', background: '#e6f4ea', padding: '2px 8px', borderRadius: '6px', fontWeight: 800 }}>
              {selectedNode.title}
            </span>
          </div>

          <div style={{ fontSize: '0.78rem', color: '#71717a' }}>
            Type: <code style={{ color: '#0f0f10', fontWeight: 700 }}>{selectedNode.type}</code>
          </div>

          {/* Input JSON */}
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f0f10', marginBottom: '6px' }}>
              Input Payload JSON:
            </div>
            <pre style={{
              background: '#0f0f10',
              padding: '12px',
              borderRadius: '10px',
              fontSize: '0.74rem',
              color: '#34d399',
              fontFamily: 'monospace',
              overflowX: 'auto',
              maxHeight: '140px'
            }}>
              {JSON.stringify(selectedNode.inputPayload, null, 2)}
            </pre>
          </div>

          {/* Output JSON */}
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f0f10', marginBottom: '6px' }}>
              Output Payload JSON:
            </div>
            <pre style={{
              background: '#0f0f10',
              padding: '12px',
              borderRadius: '10px',
              fontSize: '0.74rem',
              color: '#60a5fa',
              fontFamily: 'monospace',
              overflowX: 'auto',
              maxHeight: '160px'
            }}>
              {JSON.stringify(selectedNode.outputPayload, null, 2)}
            </pre>
          </div>

          <button
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(selectedNode, null, 2));
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="btn-jobgio-outline"
            style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem', padding: '8px 0' }}
          >
            {copied ? <Check size={14} color="#137333" /> : <Copy size={14} />}
            {copied ? 'Copied Payload!' : 'Copy Node JSON'}
          </button>
        </div>

      </div>

    </div>
  );
}

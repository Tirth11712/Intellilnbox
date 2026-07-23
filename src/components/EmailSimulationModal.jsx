import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  Bot, 
  CheckCircle2, 
  RefreshCw,
  FileText
} from 'lucide-react';
import { samplePresetEmails } from '../data/mockData';

export default function EmailSimulationModal({ isOpen, onClose, onSimulateComplete }) {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [senderName, setSenderName] = useState(samplePresetEmails[0].senderName);
  const [senderEmail, setSenderEmail] = useState(samplePresetEmails[0].senderEmail);
  const [subject, setSubject] = useState(samplePresetEmails[0].subject);
  const [body, setBody] = useState(samplePresetEmails[0].body);

  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const handleSelectPreset = (index) => {
    setSelectedPreset(index);
    const p = samplePresetEmails[index];
    setSenderName(p.senderName);
    setSenderEmail(p.senderEmail);
    setSubject(p.subject);
    setBody(p.body);
  };

  const handleRunSimulation = () => {
    setIsProcessing(true);
    setCurrentStep(1);

    setTimeout(() => setCurrentStep(2), 700);
    setTimeout(() => setCurrentStep(3), 1400);
    setTimeout(() => setCurrentStep(4), 2100);

    setTimeout(() => {
      const bodyLower = (body + " " + subject).toLowerCase();
      let category = "General";
      let dest = "general@college.edu";
      let summaryText = "Inquiring about university procedures and policies.";
      let keyDetails = "General inquiry submitted via student portal.";
      let urgency = "Normal";

      if (bodyLower.includes("transfer") || bodyLower.includes("admission") || bodyLower.includes("gpa") || bodyLower.includes("prerequisites") || bodyLower.includes("apply") || bodyLower.includes("degree")) {
        category = "Admissions";
        dest = "admissions@college.edu";
        summaryText = `Inquiring about admissions requirements, prerequisites or transfer credit validation.`;
        keyDetails = `Applicant: ${senderName}, Course/Degree topic: ${subject}.`;
      } else if (bodyLower.includes("tour") || bodyLower.includes("open house") || bodyLower.includes("rsvp") || bodyLower.includes("parking") || bodyLower.includes("symposium") || bodyLower.includes("event")) {
        category = "Events";
        dest = "events@college.edu";
        summaryText = `Requesting tour or event details and visitor guidance.`;
        keyDetails = `Event inquiry by ${senderName}. Requested subject: ${subject}.`;
        urgency = bodyLower.includes("friday") || bodyLower.includes("saturday") ? "High" : "Normal";
      }

      const newEmail = {
        id: `inq-${Math.floor(1000 + Math.random() * 9000)}`,
        timestamp: new Date().toISOString(),
        senderName: senderName || "Prospective Student",
        senderEmail: senderEmail || "student@gmail.com",
        originalSubject: subject,
        emailBody: body,
        category: category,
        confidence: 0.97,
        summary: {
          mainQuestion: summaryText,
          keyDetails: keyDetails,
          urgencyLevel: urgency
        },
        routingDestination: dest,
        forwardedSubject: `[${category.toUpperCase()}] ${subject}`,
        forwardStatus: "success",
        processingTimeMs: Math.floor(800 + Math.random() * 400),
        feedback: null
      };

      setIsProcessing(false);
      onSimulateComplete(newEmail);
      onClose();
    }, 2800);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(15, 15, 16, 0.5)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      zIndex: 9999,
      padding: '20px'
    }}>
      <div className="jobgio-card" style={{
        width: '100%',
        maxWidth: '640px',
        background: '#ffffff',
        border: '2px solid #0f0f10',
        borderRadius: '24px',
        padding: '28px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)',
        margin: 'auto'
      }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: '#ffffff',
              border: '1px solid #e4e4e7',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              padding: '3px'
            }}>
              <img src="/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0f0f10', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Real-Time n8n Workflow Tester
              </span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f0f10', marginTop: '1px' }}>
                Simulate Incoming College Inquiry Email
              </h3>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#71717a', cursor: 'pointer', padding: '4px' }}>
            <X size={20} />
          </button>
        </div>

        {/* Preset Selector */}
        <div style={{ marginBottom: '18px' }}>
          <label style={{ display: 'block', fontSize: '0.78rem', color: '#71717a', marginBottom: '8px', fontWeight: 800 }}>
            Choose Sample Preset Template:
          </label>
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto' }}>
            {samplePresetEmails.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectPreset(idx)}
                style={{
                  padding: '7px 14px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: selectedPreset === idx ? '#0f0f10' : '#ececee',
                  color: selectedPreset === idx ? '#ffffff' : '#27272a',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {preset.title}
              </button>
            ))}
          </div>
        </div>

        {/* Email Form Fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#71717a', marginBottom: '4px', fontWeight: 700 }}>Sender Name:</label>
              <input 
                type="text" 
                value={senderName} 
                onChange={(e) => setSenderName(e.target.value)}
                style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', background: '#f4f4f7', border: '1px solid #e4e4e7', color: '#0f0f10', fontSize: '0.84rem' }} 
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#71717a', marginBottom: '4px', fontWeight: 700 }}>Sender Email:</label>
              <input 
                type="email" 
                value={senderEmail} 
                onChange={(e) => setSenderEmail(e.target.value)}
                style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', background: '#f4f4f7', border: '1px solid #e4e4e7', color: '#0f0f10', fontSize: '0.84rem' }} 
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: '#71717a', marginBottom: '4px', fontWeight: 700 }}>Subject Line:</label>
            <input 
              type="text" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)}
              style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', background: '#f4f4f7', border: '1px solid #e4e4e7', color: '#0f0f10', fontSize: '0.84rem' }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: '#71717a', marginBottom: '4px', fontWeight: 700 }}>Email Content Body:</label>
            <textarea 
              rows={4} 
              value={body} 
              onChange={(e) => setBody(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', background: '#f4f4f7', border: '1px solid #e4e4e7', color: '#27272a', fontSize: '0.84rem', resize: 'vertical' }} 
            />
          </div>
        </div>

        {/* Live Processing Animation Steps */}
        {isProcessing && (
          <div style={{
            background: '#f4f4f7',
            padding: '14px 18px',
            borderRadius: '14px',
            border: '2px solid #0f0f10',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <RefreshCw size={18} color="#0f0f10" className="spin-slow" />
            <div style={{ fontSize: '0.82rem', color: '#0f0f10', fontWeight: 800 }}>
              {currentStep === 1 && "Step 1/3: Extracting Email Payload in n8n..."}
              {currentStep === 2 && "Step 2/3: Prompting AI Intent Classifier & Summarizer..."}
              {currentStep === 3 && "Step 3/3: Routing to Department & Appending Audit Log..."}
              {currentStep === 4 && "Classification Complete! Forwarding to Department..."}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button onClick={onClose} disabled={isProcessing} className="btn-jobgio-outline" style={{ padding: '8px 20px' }}>
            Cancel
          </button>
          <button 
            onClick={handleRunSimulation} 
            disabled={isProcessing} 
            className="btn-jobgio-black" 
            style={{ padding: '8px 26px' }}
          >
            <Send size={16} /> Run AI Triage Workflow
          </button>
        </div>

      </div>
    </div>
  );
}

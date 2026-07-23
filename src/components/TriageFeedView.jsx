import React, { useState } from 'react';
import { 
  Mail, 
  Check, 
  X, 
  Tag, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  User, 
  Send, 
  Sparkles, 
  AlertTriangle, 
  ThumbsUp, 
  ThumbsDown,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Search
} from 'lucide-react';

export default function TriageFeedView({ 
  emails, 
  selectedEmail, 
  onSelectEmail, 
  onReclassify, 
  onFeedback 
}) {
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedEmailId, setExpandedEmailId] = useState(selectedEmail?.id || emails[0]?.id);

  const filtered = emails.filter(e => {
    const matchesCat = filterCategory === 'All' || e.category === filterCategory;
    const matchesSearch = 
      e.senderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.senderEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.originalSubject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (e.summary?.mainQuestion || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '24px', background: '#f4f4f7' }}>
      
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f0f10' }}>
            Inquiry Triage Queue
          </h2>
          <p style={{ color: '#71717a', fontSize: '0.9rem' }}>
            Review AI classifications, inspect generated summaries, and provide continuous training feedback.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#ffffff', padding: '4px', borderRadius: '9999px', border: '1px solid #e4e4e7' }}>
          {['All', 'Admissions', 'Events', 'General'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              style={{
                padding: '6px 16px',
                borderRadius: '9999px',
                border: 'none',
                fontSize: '0.8rem',
                fontWeight: filterCategory === cat ? 800 : 500,
                background: filterCategory === cat ? '#0f0f10' : 'transparent',
                color: filterCategory === cat ? '#ffffff' : '#71717a',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Email Queue List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filtered.length === 0 ? (
          <div className="jobgio-card" style={{ padding: '40px', textAlign: 'center', color: '#71717a' }}>
            <Mail size={40} color="#0f0f10" style={{ marginBottom: '12px' }} />
            <h3>No inquiries found matching criteria</h3>
          </div>
        ) : (
          filtered.map((email) => {
            const isExpanded = expandedEmailId === email.id;
            const categoryBadge = 
              email.category === 'Admissions' ? 'badge-admissions' :
              email.category === 'Events' ? 'badge-events' : 'badge-general';

            return (
              <div 
                key={email.id}
                className="jobgio-card"
                style={{
                  border: isExpanded ? '2px solid #0f0f10' : '1px solid #e4e4e7',
                  transition: 'all 0.2s ease'
                }}
              >
                {/* Collapsible Card Header */}
                <div 
                  onClick={() => setExpandedEmailId(isExpanded ? null : email.id)}
                  style={{
                    padding: '20px 24px',
                    cursor: 'pointer',
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0 }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#f4f4f7',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      flexShrink: 0
                    }}>
                      <User size={18} color="#0f0f10" />
                    </div>

                    <div style={{ overflow: 'hidden', flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2px' }}>
                        <span style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0f0f10' }}>
                          {email.senderName}
                        </span>
                        <span style={{ fontSize: '0.78rem', color: '#71717a' }}>
                          ({email.senderEmail})
                        </span>
                        <span className={categoryBadge}>
                          {email.category}
                        </span>
                        {email.summary?.urgencyLevel === 'High' && (
                          <span className="badge-urgent">High Urgency</span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#27272a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {email.originalSubject}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0, marginLeft: '16px' }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.75rem', color: '#71717a' }}>
                        {new Date(email.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#137333', fontWeight: 800 }}>
                        {(email.confidence * 100).toFixed(0)}% Match
                      </div>
                    </div>
                    {isExpanded ? <ChevronUp size={20} color="#71717a" /> : <ChevronDown size={20} color="#71717a" />}
                  </div>
                </div>

                {/* Expanded Detail Panel */}
                {isExpanded && (
                  <div style={{
                    padding: '0 24px 24px 24px',
                    borderTop: '1px solid #f4f4f5',
                    paddingTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                  }}>
                    {/* AI Summary Box (Dark Jobgio Accent Card) */}
                    <div style={{
                      background: '#0f0f10',
                      color: '#ffffff',
                      borderRadius: '16px',
                      padding: '20px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a1a1aa', fontSize: '0.8rem', fontWeight: 800, marginBottom: '12px' }}>
                        <Sparkles size={16} />
                        AI GENERATED SUMMARY HEADER
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
                        <div>
                          <div style={{ fontSize: '0.75rem', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Primary Question</div>
                          <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700, marginTop: '2px' }}>
                            {email.summary?.mainQuestion}
                          </div>
                        </div>

                        <div>
                          <div style={{ fontSize: '0.75rem', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Context & Details</div>
                          <div style={{ fontSize: '0.88rem', color: '#d4d4d8', marginTop: '2px' }}>
                            {email.summary?.keyDetails}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #27272a', fontSize: '0.78rem' }}>
                        <span style={{ color: '#a1a1aa' }}>
                          Routing Destination: <strong style={{ color: '#ffffff' }}>{email.routingDestination}</strong>
                        </span>
                        <span style={{ color: '#a1a1aa' }}>
                          Forwarded Subject: <strong style={{ color: '#ffffff' }}>{email.forwardedSubject}</strong>
                        </span>
                      </div>
                    </div>

                    {/* Original Email Body */}
                    <div>
                      <h5 style={{ fontSize: '0.78rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', fontWeight: 800 }}>
                        Original Incoming Email Content
                      </h5>
                      <div style={{
                        background: '#f4f4f7',
                        padding: '16px',
                        borderRadius: '12px',
                        border: '1px solid #e4e4e7',
                        fontFamily: 'inherit',
                        fontSize: '0.88rem',
                        color: '#27272a',
                        whiteSpace: 'pre-wrap',
                        lineHeight: '1.6'
                      }}>
                        {email.emailBody}
                      </div>
                    </div>

                    {/* Actions & Feedback Footer */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'space-between',
                      flexWrap: 'wrap',
                      gap: '12px',
                      paddingTop: '14px',
                      borderTop: '1px solid #e4e4e7'
                    }}>
                      {/* Reclassify Dropdown / Buttons */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.78rem', color: '#71717a', fontWeight: 700 }}>Reclassify Intent:</span>
                        {['Admissions', 'Events', 'General'].map((cat) => (
                          <button
                            key={cat}
                            onClick={() => onReclassify(email.id, cat)}
                            style={{
                              padding: '5px 14px',
                              borderRadius: '9999px',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              background: email.category === cat ? '#0f0f10' : '#ececee',
                              color: email.category === cat ? '#ffffff' : '#27272a',
                              border: 'none',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      {/* Training Feedback */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '0.78rem', color: '#71717a', fontWeight: 700 }}>AI Accuracy Rating:</span>
                        <button
                          onClick={() => onFeedback(email.id, 'correct')}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '6px 14px',
                            borderRadius: '9999px',
                            border: '1px solid #e4e4e7',
                            background: email.feedback === 'correct' ? '#0f0f10' : '#ffffff',
                            color: email.feedback === 'correct' ? '#ffffff' : '#27272a',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          <ThumbsUp size={13} /> Correct
                        </button>
                        <button
                          onClick={() => onFeedback(email.id, 'incorrect')}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '6px 14px',
                            borderRadius: '9999px',
                            border: '1px solid #e4e4e7',
                            background: email.feedback === 'incorrect' ? '#be123c' : '#ffffff',
                            color: email.feedback === 'incorrect' ? '#ffffff' : '#27272a',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          <ThumbsDown size={13} /> Flag Misclass
                        </button>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}

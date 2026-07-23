import React, { useState } from 'react';
import { 
  ScrollText, 
  Search, 
  Download, 
  CheckCircle2, 
  XCircle, 
  Filter, 
  Clock, 
  Send,
  User,
  ShieldCheck
} from 'lucide-react';

export default function AuditLogsView({ emails }) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = emails.filter(e => {
    const matchesStatus = statusFilter === 'All' || e.forwardStatus === statusFilter;
    const matchesSearch = 
      e.senderName.toLowerCase().includes(search.toLowerCase()) ||
      e.senderEmail.toLowerCase().includes(search.toLowerCase()) ||
      e.originalSubject.toLowerCase().includes(search.toLowerCase()) ||
      e.category.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const exportCSV = () => {
    const headers = "Timestamp,Sender,Email,Subject,Category,Confidence,Destination,Status,LatencyMS\n";
    const rows = filtered.map(e => 
      `"${e.timestamp}","${e.senderName}","${e.senderEmail}","${e.originalSubject.replace(/"/g, '""')}","${e.category}",${e.confidence},"${e.routingDestination}","${e.forwardStatus}",${e.processingTimeMs}`
    ).join("\n");
    
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `triage_audit_logs_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '24px', background: '#f4f4f7' }}>
      
      {/* Header & Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f0f10' }}>
            Workflow Audit Logs & Traceability
          </h2>
          <p style={{ color: '#71717a', fontSize: '0.9rem' }}>
            Complete audit trail of all n8n workflow execution events, classification latency, and routing results.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Status Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', padding: '4px', borderRadius: '9999px', border: '1px solid #e4e4e7' }}>
            {['All', 'success', 'failed'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.78rem',
                  fontWeight: statusFilter === st ? 800 : 500,
                  background: statusFilter === st ? '#0f0f10' : 'transparent',
                  color: statusFilter === st ? '#ffffff' : '#71717a',
                  cursor: 'pointer',
                  textTransform: 'capitalize'
                }}
              >
                {st}
              </button>
            ))}
          </div>

          <button onClick={exportCSV} className="btn-jobgio-black" style={{ padding: '9px 20px', fontSize: '0.84rem' }}>
            <Download size={16} /> Export CSV
          </button>
        </div>
      </div>

      {/* Logs Table Card */}
      <div className="jobgio-card" style={{ overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e4e4e7', color: '#71717a', fontSize: '0.74rem', fontWeight: 600 }}>
                <th style={{ padding: '16px 20px' }}>Timestamp</th>
                <th style={{ padding: '16px 20px' }}>Student Sender</th>
                <th style={{ padding: '16px 20px' }}>Original Subject</th>
                <th style={{ padding: '16px 20px' }}>Category Intent</th>
                <th style={{ padding: '16px 20px' }}>Routed Destination</th>
                <th style={{ padding: '16px 20px' }}>Latency</th>
                <th style={{ padding: '16px 20px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((log) => {
                const categoryBadge = 
                  log.category === 'Admissions' ? 'badge-admissions' :
                  log.category === 'Events' ? 'badge-events' : 'badge-general';

                return (
                  <tr 
                    key={log.id} 
                    style={{ borderBottom: '1px solid #f4f4f5', transition: 'background 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#fafafa'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <td style={{ padding: '14px 20px', color: '#71717a', fontSize: '0.78rem' }}>
                      {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </td>
                    <td style={{ padding: '14px 20px' }}>
                      <div style={{ fontWeight: 800, color: '#0f0f10' }}>{log.senderName}</div>
                      <div style={{ fontSize: '0.74rem', color: '#71717a' }}>{log.senderEmail}</div>
                    </td>
                    <td style={{ padding: '14px 20px', color: '#27272a', fontWeight: 600, maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {log.originalSubject}
                    </td>
                    <td style={{ padding: '14px 20px' }}>
                      <span className={categoryBadge}>{log.category}</span>
                    </td>
                    <td style={{ padding: '14px 20px', color: '#0f0f10', fontSize: '0.8rem', fontWeight: 700 }}>
                      {log.routingDestination}
                    </td>
                    <td style={{ padding: '14px 20px', color: '#71717a', fontSize: '0.78rem' }}>
                      {log.processingTimeMs} ms
                    </td>
                    <td style={{ padding: '14px 20px' }}>
                      <span className="jobgio-pill">
                        {log.forwardStatus.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

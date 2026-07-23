import React, { useState } from 'react';
import { 
  Users, 
  Building2, 
  Briefcase, 
  FileText, 
  AlertTriangle, 
  AlertCircle, 
  ArrowUpRight, 
  Download, 
  ChevronDown, 
  MoreHorizontal,
  Mail,
  Zap,
  CheckCircle2,
  Clock
} from 'lucide-react';

export default function DashboardView({ 
  emails, 
  onSelectEmail, 
  onOpenSimulation, 
  onExportWorkflow,
  setActiveTab
}) {
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Exact inquiry list requested by the user
  const inquiryList = [
    {
      subject: "Prerequisites evaluation for Artificial Intelligence Major",
      senderName: "Julian Hayes",
      senderEmail: "jhayes.student@gmail.com",
      department: "Admissions",
      status: "Active",
      date: "Jul 23 04:30 GMT"
    },
    {
      subject: "Questions regarding Fall 2026 CS Transfer Requirements & Portfolio Submission",
      senderName: "Sarah Jenkins",
      senderEmail: "sarah.j.2026@gmail.com",
      department: "Admissions",
      status: "Active",
      date: "Jul 23 04:30 GMT"
    },
    {
      subject: "RSVP & Parking Details for Open House Campus Tour on Saturday",
      senderName: "Marcus Vance",
      senderEmail: "marcus.vance@outlook.com",
      department: "Events",
      status: "Active",
      date: "Jul 23 04:30 GMT"
    },
    {
      subject: "Inquiry about Student Health Insurance Waiver Deadline",
      senderName: "Elena Rostova",
      senderEmail: "elena.rostova@yahoo.com",
      department: "General",
      status: "Active",
      date: "Jul 23 04:30 GMT"
    },
    {
      subject: "Application Fee Waiver Request & Early Decision Eligibility",
      senderName: "David Kim",
      senderEmail: "dkim99@gmail.com",
      department: "Admissions",
      status: "Active",
      date: "Jul 23 04:30 GMT"
    },
    {
      subject: "Guest Lecture Keynote Confirmation for Robotics Symposium",
      senderName: "Prof. Arthur Pendelton",
      senderEmail: "apendelton@mit.edu",
      department: "Events",
      status: "Active",
      date: "Jul 23 04:30 GMT"
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '8px 32px 32px 32px', background: '#f4f4f7' }}>
      
      {/* SECTION 1 — Quick Stats (Exact 6 Card Row with Uniform Circle Alignment & Clean Top-Right Arrow) */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f0f10', letterSpacing: '-0.02em' }}>Quick Stats</h3>
            <div style={{ fontSize: '0.76rem', color: '#71717a' }}>Your statistics for 1 week period.</div>
          </div>
        </div>

        {/* 6 Vertical Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px' }}>
          
          {/* Stat 1: 500K Total Senders */}
          <div className="jobgio-card" style={{ padding: '18px 10px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="icon-box-center" style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#f4f4f7', marginBottom: '10px' }}>
              <Users size={16} color="#71717a" style={{ margin: 'auto' }} />
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f0f10', lineHeight: 1.1 }}>500K</div>
            <div style={{ fontSize: '0.7rem', color: '#71717a', fontWeight: 600, marginTop: '4px' }}>Total Senders</div>
          </div>

          {/* Stat 2: 1.2K Departments */}
          <div className="jobgio-card" style={{ padding: '18px 10px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="icon-box-center" style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#f4f4f7', marginBottom: '10px' }}>
              <Building2 size={16} color="#71717a" style={{ margin: 'auto' }} />
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f0f10', lineHeight: 1.1 }}>1.2K</div>
            <div style={{ fontSize: '0.7rem', color: '#71717a', fontWeight: 600, marginTop: '4px' }}>Departments</div>
          </div>

          {/* Stat 3: 3.5K Active Inquiries (PERFECTLY CENTERED BLACK CIRCLE & TOP RIGHT ARROW BADGE) */}
          <div className="jobgio-card" style={{ padding: '18px 10px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            
            {/* Top Right Arrow Indicator Pill — Neatly Positioned */}
            <div className="icon-box-center" style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#f4f4f7',
              border: '1px solid #e4e4e7'
            }}>
              <ArrowUpRight size={11} color="#0f0f10" style={{ margin: 'auto' }} />
            </div>

            {/* Black Circle Icon Badge - PERFECTLY CENTERED */}
            <div className="icon-box-center" style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: '#0f0f10',
              color: '#ffffff',
              marginBottom: '10px',
              boxShadow: '0 3px 8px rgba(15, 15, 16, 0.2)'
            }}>
              <Briefcase size={16} color="#ffffff" style={{ margin: 'auto' }} />
            </div>
            
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f0f10', lineHeight: 1.1 }}>3.5K</div>
            <div style={{ fontSize: '0.7rem', color: '#71717a', fontWeight: 600, marginTop: '4px' }}>Active Inquiries</div>
          </div>

          {/* Stat 4: 28K Total Routings */}
          <div className="jobgio-card" style={{ padding: '18px 10px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="icon-box-center" style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#f4f4f7', marginBottom: '10px' }}>
              <FileText size={16} color="#71717a" style={{ margin: 'auto' }} />
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f0f10', lineHeight: 1.1 }}>28K</div>
            <div style={{ fontSize: '0.7rem', color: '#71717a', fontWeight: 600, marginTop: '4px' }}>Total Routings</div>
          </div>

          {/* Stat 5: 80 Pending Triage */}
          <div className="jobgio-card" style={{ padding: '18px 10px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="icon-box-center" style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#f4f4f7', marginBottom: '10px' }}>
              <AlertTriangle size={16} color="#71717a" style={{ margin: 'auto' }} />
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f0f10', lineHeight: 1.1 }}>80</div>
            <div style={{ fontSize: '0.7rem', color: '#71717a', fontWeight: 600, marginTop: '4px' }}>Pending Triage</div>
          </div>

          {/* Stat 6: 20 Reported Misclass */}
          <div className="jobgio-card" style={{ padding: '18px 10px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="icon-box-center" style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#f4f4f7', marginBottom: '10px' }}>
              <AlertCircle size={16} color="#71717a" style={{ margin: 'auto' }} />
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f0f10', lineHeight: 1.1 }}>20</div>
            <div style={{ fontSize: '0.7rem', color: '#71717a', fontWeight: 600, marginTop: '4px' }}>Reported Misclass</div>
          </div>

        </div>
      </div>

      {/* SECTION 2 — Statistics Bar Chart + Pending Approvals */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '20px' }}>
        
        {/* Left Card: Monthly Statistics Bar Chart with Y-Axis */}
        <div className="jobgio-card" style={{ padding: '22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f0f10' }}>Statistics</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.76rem', color: '#71717a' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0f0f10' }}></span> Inquiries
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#d4d4d8' }}></span> Applications
              </span>
            </div>
          </div>

          {/* Bar Chart Canvas Grid with Y-Axis Labels */}
          <div style={{ display: 'flex', gap: '12px', height: '170px' }}>
            {/* Y-Axis Labels */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '0.7rem', color: '#a1a1aa', textAlign: 'right', paddingRight: '4px' }}>
              <span>8K</span>
              <span>6K</span>
              <span>4K</span>
              <span>2K</span>
              <span>0</span>
            </div>

            {/* Bars */}
            <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', position: 'relative', borderBottom: '1px solid #e4e4e7', paddingBottom: '2px' }}>
              
              {/* Hover Badge 6.4K */}
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '48%',
                transform: 'translateX(-50%)',
                background: '#0f0f10',
                color: '#ffffff',
                padding: '3px 9px',
                borderRadius: '9999px',
                fontSize: '0.72rem',
                fontWeight: 800,
                boxShadow: '0 4px 10px rgba(0,0,0,0.18)',
                zIndex: 10
              }}>
                6.4K
              </div>

              {[
                { m: 'Jan', h1: 45, h2: 30 },
                { m: 'Feb', h1: 75, h2: 40 },
                { m: 'Mar', h1: 50, h2: 60 },
                { m: 'Apr', h1: 70, h2: 35 },
                { m: 'May', h1: 85, h2: 50 },
                { m: 'Jun', h1: 95, h2: 65 },
                { m: 'Jul', h1: 40, h2: 30 },
                { m: 'Aug', h1: 90, h2: 70 },
                { m: 'Sep', h1: 45, h2: 35 },
                { m: 'Oct', h1: 80, h2: 55 },
                { m: 'Nov', h1: 50, h2: 60 },
                { m: 'Dec', h1: 70, h2: 40 }
              ].map((bar, i) => (
                <div key={i} style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: '100%', flex: 1, justifySelf: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '7px', height: `${bar.h1}%`, background: '#0f0f10', borderRadius: '4px 4px 0 0' }}></div>
                  <div style={{ width: '7px', height: `${bar.h2}%`, background: '#e4e4e7', borderRadius: '4px 4px 0 0' }}></div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#a1a1aa', marginTop: '10px', paddingLeft: '32px', paddingRight: '6px' }}>
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        {/* Right Card: Pending Approvals / Recent Queue */}
        <div className="jobgio-card" style={{ padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f0f10' }}>Pending Approvals</h3>
              <MoreHorizontal size={18} color="#71717a" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { name: 'Sarah Jenkins (CS Transfer)', time: 'Jun 10 03:20 GMT', icon: '💻' },
                { name: 'Marcus Vance (Campus Tour)', time: 'Jun 12 04:30 GMT', icon: '🏛️' },
                { name: 'Elena Rostova (Insurance Waiver)', time: 'Jun 14 05:40 GMT', icon: '📑' }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div className="icon-box-center" style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#f4f4f7', fontSize: '1rem', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f0f10' }}>{item.name}</div>
                      <div style={{ fontSize: '0.7rem', color: '#71717a' }}>{item.time}</div>
                    </div>
                  </div>
                  <span className="jobgio-pill" style={{ fontSize: '0.72rem', padding: '3px 10px' }}>Pending</span>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => setActiveTab('triage')} 
            className="btn-jobgio-outline"
            style={{ width: '100%', justifyContent: 'center', marginTop: '16px', padding: '8px 0', borderRadius: '9999px', fontSize: '0.8rem' }}
          >
            Review All Pending
          </button>
        </div>

      </div>

      {/* SECTION 3 — Manage Inquiries Table */}
      <div className="jobgio-card" style={{ padding: '22px' }}>
        
        {/* Table Header Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f0f10' }}>Manage Inquiries</h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button className="btn-jobgio-outline" style={{ padding: '6px 14px', fontSize: '0.78rem' }}>
              Status <ChevronDown size={14} />
            </button>

            <button onClick={onExportWorkflow} className="btn-jobgio-black" style={{ padding: '7px 18px', fontSize: '0.8rem' }}>
              Export <Download size={14} />
            </button>
          </div>
        </div>

        {/* Inquiries Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e4e4e7', color: '#71717a', fontSize: '0.74rem', fontWeight: 600 }}>
                <th style={{ padding: '12px 14px', width: '40px' }}>
                  <input type="checkbox" style={{ accentColor: '#0f0f10' }} />
                </th>
                <th style={{ padding: '12px 14px', width: '38%' }}>Student Inquiry</th>
                <th style={{ padding: '12px 14px', width: '24%' }}>Sender Email</th>
                <th style={{ padding: '12px 14px', width: '14%' }}>Department</th>
                <th style={{ padding: '12px 14px', width: '10%' }}>Status</th>
                <th style={{ padding: '12px 14px', width: '12%' }}>Received Date</th>
                <th style={{ padding: '12px 14px', textAlign: 'right' }}></th>
              </tr>
            </thead>
            <tbody>
              {inquiryList.map((item, idx) => {
                const categoryBadge = 
                  item.department === 'Admissions' ? 'badge-admissions' :
                  item.department === 'Events' ? 'badge-events' : 'badge-general';

                return (
                  <tr 
                    key={idx} 
                    style={{ borderBottom: '1px solid #f4f4f5', cursor: 'pointer' }}
                    onClick={() => setActiveTab('triage')}
                  >
                    <td style={{ padding: '14px' }} onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" style={{ accentColor: '#0f0f10' }} />
                    </td>

                    <td style={{ padding: '14px' }}>
                      <div style={{ fontWeight: 800, color: '#0f0f10', fontSize: '0.85rem' }}>{item.subject}</div>
                      <div style={{ fontSize: '0.72rem', color: '#71717a', marginTop: '1px' }}>{item.senderName}</div>
                    </td>

                    <td style={{ padding: '14px', color: '#71717a', fontSize: '0.8rem' }}>
                      {item.senderEmail}
                    </td>

                    <td style={{ padding: '14px' }}>
                      <span className={categoryBadge}>{item.department}</span>
                    </td>

                    <td style={{ padding: '14px' }}>
                      <span className="jobgio-pill" style={{ fontSize: '0.72rem', padding: '3px 10px' }}>
                        {item.status}
                      </span>
                    </td>

                    <td style={{ padding: '14px', color: '#71717a', fontSize: '0.76rem' }}>
                      {item.date}
                    </td>

                    <td style={{ padding: '14px', textAlign: 'right' }}>
                      <MoreHorizontal size={18} color="#71717a" />
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

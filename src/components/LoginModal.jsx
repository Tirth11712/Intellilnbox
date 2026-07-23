import React, { useState } from 'react';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LoginModal({ onLogin }) {
  const [email, setEmail] = useState('hello.designer@gmail.com');
  const [password, setPassword] = useState('••••••••');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin({ name: 'George Admin', email });
    }, 600);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      background: '#eaeaee',
      zIndex: 9999,
      padding: '20px'
    }}>
      <div className="jobgio-card" style={{
        width: '100%',
        maxWidth: '420px',
        background: '#ffffff',
        border: '1px solid #e4e4e7',
        borderRadius: '24px',
        padding: '36px 32px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.08)',
        margin: 'auto'
      }}>
        
        {/* Brand Header with Custom Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: '#ffffff',
            border: '1px solid #e4e4e7',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            marginBottom: '14px',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
            padding: '6px'
          }}>
            <img src="/logo.png" alt="IntelliInbox Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>

          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f0f10', letterSpacing: '-0.02em' }}>
            IntelliInbox<span style={{ fontSize: '0.98rem', color: '#4f46e5', fontWeight: 700 }}>.n8n</span> Admin Portal
          </h2>
          <p style={{ color: '#71717a', fontSize: '0.84rem', marginTop: '4px' }}>
            Sign in to access email triage controls & n8n engine settings.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#0f0f10', marginBottom: '6px' }}>
              Admin Email Address:
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="#71717a" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="email" 
                required
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello.designer@gmail.com"
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 40px',
                  borderRadius: '12px',
                  background: '#f4f4f7',
                  border: '1px solid #e4e4e7',
                  color: '#0f0f10',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#0f0f10', marginBottom: '6px' }}>
              Password:
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="#71717a" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="password" 
                required
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 40px',
                  borderRadius: '12px',
                  background: '#f4f4f7',
                  border: '1px solid #e4e4e7',
                  color: '#0f0f10',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="btn-jobgio-black"
            style={{ width: '100%', justifyContent: 'center', padding: '11px 0', marginTop: '10px', fontSize: '0.88rem' }}
          >
            {isLoading ? 'Signing In...' : 'Sign In as Admin'} <ArrowRight size={16} />
          </button>

        </form>

        <div style={{ display: 'flex', alignItems: 'center', justify: 'center', gap: '6px', fontSize: '0.74rem', color: '#71717a', marginTop: '24px' }}>
          <ShieldCheck size={14} color="#137333" /> Secured Admin Session • FERPA Compliant
        </div>

      </div>
    </div>
  );
}

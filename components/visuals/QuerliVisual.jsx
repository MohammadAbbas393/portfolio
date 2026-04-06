'use client';
import { useEffect, useState } from 'react';

const steps = [
  { type: 'question', text: 'Who are my top 5 customers by revenue?' },
  { type: 'sql', text: 'SELECT name, SUM(total) AS revenue\nFROM orders\nJOIN customers USING (id)\nGROUP BY name\nORDER BY revenue DESC\nLIMIT 5;' },
  { type: 'result', rows: [['Alice Corp', '$84,200'], ['Nova Ltd', '$61,500'], ['Bright Co', '$47,900'], ['Delta Inc', '$39,200'], ['Apex LLC', '$28,700']] },
];

export default function QuerliVisual() {
  const [step, setStep] = useState(0);
  const [typedQ, setTypedQ] = useState('');
  const [typedSQL, setTypedSQL] = useState('');
  const [showRows, setShowRows] = useState(0);

  useEffect(() => {
    const q = steps[0].text;
    let i = 0;
    const t = setInterval(() => {
      setTypedQ(q.slice(0, i + 1));
      i++;
      if (i >= q.length) { clearInterval(t); setTimeout(() => setStep(1), 500); }
    }, 35);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (step !== 1) return;
    const sql = steps[1].text;
    let i = 0;
    const t = setInterval(() => {
      setTypedSQL(sql.slice(0, i + 1));
      i++;
      if (i >= sql.length) { clearInterval(t); setTimeout(() => setStep(2), 400); }
    }, 18);
    return () => clearInterval(t);
  }, [step]);

  useEffect(() => {
    if (step !== 2) return;
    let i = 0;
    const t = setInterval(() => {
      setShowRows(v => v + 1);
      i++;
      if (i >= steps[2].rows.length) clearInterval(t);
    }, 200);
    return () => clearInterval(t);
  }, [step]);

  return (
    <div style={{ background: '#0f0f1a', borderRadius: 16, padding: 24, fontFamily: 'monospace', fontSize: 13, color: '#e2e8f0', border: '1px solid #1e1b4b', minHeight: 320 }}>
      {/* DB badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#a78bfa', boxShadow: '0 0 8px #a78bfa' }} />
        <span style={{ color: '#6b7280', fontSize: 11 }}>postgres://neon.tech/production</span>
        <span style={{ marginLeft: 'auto', background: '#1e1b4b', border: '1px solid #3730a3', borderRadius: 6, padding: '2px 10px', fontSize: 11, color: '#a78bfa' }}>Connected</span>
      </div>

      {/* Question bubble */}
      <div style={{ background: '#1e1b4b', border: '1px solid #3730a3', borderRadius: 10, padding: '10px 14px', marginBottom: 14, color: '#c4b5fd', fontSize: 13 }}>
        {typedQ}<span style={{ borderRight: '2px solid #a78bfa', animation: step === 0 ? 'blink 0.7s infinite' : 'none' }}> </span>
      </div>

      {/* SQL block */}
      {step >= 1 && (
        <div style={{ background: '#0a0a14', border: '1px solid #1e1b4b', borderRadius: 8, padding: '10px 14px', marginBottom: 14 }}>
          <div style={{ color: '#4b5563', fontSize: 10, marginBottom: 6 }}>Generated SQL</div>
          <pre style={{ margin: 0, color: '#7c3aed', fontSize: 11, whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>{typedSQL}</pre>
        </div>
      )}

      {/* Results table */}
      {step >= 2 && (
        <div style={{ background: '#0a0a14', border: '1px solid #1e1b4b', borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', padding: '6px 14px', borderBottom: '1px solid #1e1b4b', color: '#6b7280', fontSize: 11 }}>
            <span>Customer</span><span>Revenue</span>
          </div>
          {steps[2].rows.slice(0, showRows).map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto', padding: '7px 14px', borderBottom: '1px solid #1e1b4b', color: '#e2e8f0', fontSize: 12 }}>
              <span>{row[0]}</span>
              <span style={{ color: '#4ade80', fontWeight: 600 }}>{row[1]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

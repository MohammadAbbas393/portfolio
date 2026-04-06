'use client';
import { useEffect, useState } from 'react';

const vulns = [
  { pkg: 'lodash', ver: '4.17.4', sev: 'CRITICAL', color: '#ef4444' },
  { pkg: 'axios', ver: '0.19.0', sev: 'HIGH', color: '#f97316' },
  { pkg: 'express', ver: '4.16.0', sev: 'HIGH', color: '#f97316' },
  { pkg: 'minimist', ver: '1.2.0', sev: 'MEDIUM', color: '#eab308' },
  { pkg: 'marked', ver: '0.3.6', sev: 'CRITICAL', color: '#ef4444' },
];

export default function PkgSentryVisual() {
  const [visible, setVisible] = useState(0);
  const [scanning, setScanning] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prog = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(prog); setScanning(false); return 100; }
        return p + 3;
      });
    }, 40);
    return () => clearInterval(prog);
  }, []);

  useEffect(() => {
    if (scanning) return;
    let i = 0;
    const timer = setInterval(() => {
      setVisible(v => { if (v >= vulns.length) { clearInterval(timer); return v; } return v + 1; });
      i++;
      if (i >= vulns.length) clearInterval(timer);
    }, 350);
    return () => clearInterval(timer);
  }, [scanning]);

  return (
    <div style={{ background: '#0d1117', borderRadius: 16, padding: 24, fontFamily: 'monospace', fontSize: 13, color: '#e6edf3', border: '1px solid #21262d', minHeight: 320 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
        <span style={{ color: '#8b949e', fontSize: 12 }}>MohammadAbbas393/legacy-api</span>
        <span style={{ marginLeft: 'auto', background: '#161b22', border: '1px solid #30363d', borderRadius: 6, padding: '2px 10px', fontSize: 11, color: '#58a6ff' }}>Scan running</span>
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 11, color: '#8b949e' }}>
          <span>Checking OSV database...</span>
          <span>{progress}%</span>
        </div>
        <div style={{ background: '#21262d', borderRadius: 4, height: 6, overflow: 'hidden' }}>
          <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #22d3ee, #6366f1)', borderRadius: 4, transition: 'width 0.1s' }} />
        </div>
      </div>

      {/* Summary badges */}
      {!scanning && (
        <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
          {[{ label: '2 Critical', bg: '#450a0a', border: '#7f1d1d', color: '#fca5a5' }, { label: '2 High', bg: '#431407', border: '#7c2d12', color: '#fdba74' }, { label: '1 Medium', bg: '#422006', border: '#713f12', color: '#fde047' }].map(b => (
            <span key={b.label} style={{ background: b.bg, border: `1px solid ${b.border}`, color: b.color, borderRadius: 6, padding: '2px 10px', fontSize: 11, fontWeight: 600 }}>{b.label}</span>
          ))}
        </div>
      )}

      {/* Vuln rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {vulns.slice(0, visible).map((v, i) => (
          <div key={i} style={{ background: '#161b22', border: '1px solid #21262d', borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 12, animation: 'fadeIn 0.3s ease' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: v.color, flexShrink: 0 }} />
            <span style={{ color: '#58a6ff', fontWeight: 600 }}>{v.pkg}</span>
            <span style={{ color: '#8b949e' }}>v{v.ver}</span>
            <span style={{ marginLeft: 'auto', color: v.color, fontSize: 11, fontWeight: 700 }}>{v.sev}</span>
          </div>
        ))}
        {scanning && (
          <div style={{ color: '#8b949e', fontSize: 12, display: 'flex', gap: 8, alignItems: 'center', padding: '8px 0' }}>
            <span style={{ animation: 'pulse 1s infinite' }}>...</span> Querying CVE databases
          </div>
        )}
      </div>
    </div>
  );
}

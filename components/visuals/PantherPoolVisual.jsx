export default function PantherPoolVisual() {
  return (
    <div className="pf-window">
      <div className="pf-window-bar">
        <span /><span /><span />
      </div>
      <div className="pf-window-content" style={{ padding: '1.1rem' }}>
        <div className="pp-logo-row">
          <div className="pp-logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17H5a4 4 0 0 1 0-8h1a7 7 0 0 1 13 2v1a3 3 0 0 1 0 5Z"/></svg>
          </div>
          <span className="pp-logo-text">PantherPool</span>
        </div>

        <div className="pp-layout">
          {/* Ride Card */}
          <div className="ride-card">
            <div className="ride-card-header">
              <div className="ride-status-badge">POSTED</div>
              <span className="ride-seats">2 seats</span>
            </div>
            <div className="ride-route">
              <div className="route-point">
                <div className="route-dot route-dot-start" />
                <div className="route-info">
                  <span className="route-label">From</span>
                  <span className="route-place">Middlebury Campus</span>
                </div>
              </div>
              <div className="route-line" />
              <div className="route-point">
                <div className="route-dot route-dot-end" />
                <div className="route-info">
                  <span className="route-label">To</span>
                  <span className="route-place">Burlington Airport</span>
                </div>
              </div>
            </div>
            <div className="ride-card-footer">
              <div className="ride-avatars">
                <div className="avatar av1">A</div>
                <div className="avatar av2">+</div>
              </div>
              <div className="ride-meta">
                <span className="ride-time">Fri 9:00 AM</span>
                <span className="ride-price">$12 offer</span>
              </div>
            </div>
          </div>

          {/* Mini Map */}
          <div className="mini-map">
            <svg viewBox="0 0 120 155" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
              {/* Background */}
              <rect width="120" height="155" fill="var(--map-bg)" />

              {/* Grid streets */}
              {[20, 40, 60, 80, 100].map(x => (
                <line key={`v${x}`} x1={x} y1="0" x2={x} y2="155" stroke="var(--map-street)" strokeWidth="1.5" />
              ))}
              {[20, 40, 60, 80, 100, 120, 140].map(y => (
                <line key={`h${y}`} x1="0" y1={y} x2="120" y2={y} stroke="var(--map-street)" strokeWidth="1.5" />
              ))}

              {/* Green area (campus) */}
              <rect x="8" y="28" width="30" height="22" rx="3" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.2)" strokeWidth="0.75" />
              <text x="23" y="41" textAnchor="middle" fontSize="4.5" fill="rgba(34,197,94,0.6)" fontFamily="monospace">campus</text>

              {/* Route path */}
              <polyline
                points="23,39 23,60 60,60 60,20 95,20"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeDasharray="4 2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.8"
              />

              {/* Start pin */}
              <circle cx="23" cy="39" r="5" fill="var(--accent)" opacity="0.9" />
              <circle cx="23" cy="39" r="2.5" fill="white" opacity="0.95" />

              {/* End pin */}
              <circle cx="95" cy="20" r="5" fill="#ef4444" opacity="0.9" />
              <circle cx="95" cy="20" r="2.5" fill="white" opacity="0.95" />

              {/* Airport label */}
              <rect x="70" y="7" width="40" height="10" rx="2" fill="rgba(239,68,68,0.1)" />
              <text x="90" y="14" textAnchor="middle" fontSize="4" fill="rgba(239,68,68,0.75)" fontFamily="monospace">BTV Airport</text>

              {/* Distance label */}
              <rect x="30" y="54" width="26" height="9" rx="2" fill="var(--accent-dim)" />
              <text x="43" y="60.5" textAnchor="middle" fontSize="4" fill="var(--accent)" fontFamily="monospace">~45 min</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

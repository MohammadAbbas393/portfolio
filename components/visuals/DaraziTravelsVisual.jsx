export default function DaraziTravelsVisual() {
  return (
    <div className="pf-window">
      <div className="pf-window-bar"><span /><span /><span /></div>
      <div className="pf-window-content dt-content">
        <div className="dt-header">
          <span className="dt-logo">Darazi Travels</span>
          <span className="dt-location">Tripoli, Lebanon</span>
        </div>
        <div className="dt-package">
          <div className="dt-package-badge">Most Popular</div>
          <div className="dt-package-name">Turkey — Adha Package</div>
          <div className="dt-package-meta">
            <span>🌙 3 Nights</span>
            <span>🏨 4-Star Hotel</span>
            <span>🍽 Breakfast</span>
          </div>
          <div className="dt-package-price">from <strong>$550</strong>/person</div>
        </div>
        <div className="dt-chat">
          <div className="dt-chat-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Ziggy AI
          </div>
          <div className="dt-msg dt-msg-user">What's included in Turkey?</div>
          <div className="dt-msg dt-msg-bot">The Turkey Adha Package is 3 nights in a 4-star hotel with breakfast, flights, and transfers — $550/person.</div>
        </div>
      </div>
    </div>
  );
}

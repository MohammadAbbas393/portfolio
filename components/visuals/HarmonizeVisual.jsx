export default function HarmonizeVisual() {
  const heights = ['60%', '90%', '40%', '75%', '55%', '85%', '45%', '70%'];
  return (
    <div className="pf-window">
      <div className="pf-window-bar"><span /><span /><span /></div>
      <div className="pf-window-content harmonize-content">
        <div className="music-card">
          {heights.map((h, i) => (
            <div key={i} className="music-bar" style={{ height: h }} />
          ))}
        </div>
        <p className="harmonize-match">98% music match</p>
      </div>
    </div>
  );
}

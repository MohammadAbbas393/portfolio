const awards = [
  {
    year: '2026',
    competition: 'ASA DataFest',
    prizes: ['Best Presentation', 'Best Graph'],
    description: '48-hour data analysis competition hosted by the American Statistical Association. Recognized twice — for the most compelling presentation and the strongest data visualization.',
  },
  {
    year: '2025',
    competition: 'ASA DataFest',
    prizes: ['Best Use of External Data'],
    description: '48-hour data analysis competition. Recognized for creatively sourcing and integrating external datasets to deepen the analysis and strengthen the team\'s findings.',
  },
];

export default function Awards() {
  return (
    <section id="awards" className="section section-alt">
      <div className="container">
        <h2 className="section-title"><span className="section-num">05.</span> Awards</h2>
        <p className="section-sub">Competitions and recognition.</p>
        <div className="awards-grid">
          {awards.map((a, i) => (
            <div key={i} className="award-card">
              <div className="award-card-top">
                <div className="award-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </div>
                <span className="award-year">{a.year}</span>
              </div>
              <h3 className="award-competition">{a.competition}</h3>
              <div className="award-prizes">
                {a.prizes.map(p => (
                  <span key={p} className="award-badge">{p}</span>
                ))}
              </div>
              <p className="award-desc">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

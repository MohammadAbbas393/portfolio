const awards = [
  {
    year: '2026',
    competition: 'ASA DataFest',
    prizes: ['Best Presentation', 'Best Graph'],
    description: 'A 48-hour data analysis competition run by the American Statistical Association. Won two awards that year for how we presented our findings and built our visualizations.',
  },
  {
    year: '2025',
    competition: 'ASA DataFest',
    prizes: ['Best Use of External Data'],
    description: 'A 48-hour data analysis competition. Recognized for pulling in outside datasets and using them in a way that actually added something meaningful to our analysis.',
  },
];

const certs = [
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI & Stanford University',
    date: 'Aug 2023',
    verify: 'https://coursera.org/verify/EAUPFFKXRBN7',
  },
  {
    title: 'MiddCORE Summer Lab',
    issuer: 'Middlebury College',
    date: 'Jul 2025',
    verify: null,
  },
];

const TROPHY_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);

const CERT_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/><polyline points="9 11 12 14 22 4"/>
  </svg>
);

export default function Awards() {
  return (
    <section id="awards" className="section section-alt">
      <div className="container">
        <h2 className="section-title"><span className="section-num">04.</span> Awards & Certifications</h2>
        <p className="section-sub">Competitions, recognition, and courses completed.</p>

        <div className="awards-grid">
          {awards.map((a, i) => (
            <div key={i} className="award-card">
              <div className="award-card-top">
                <div className="award-icon">{TROPHY_ICON}</div>
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

        <h3 className="other-projects-title" style={{ marginTop: '3rem' }}>Certifications</h3>
        <div className="awards-grid">
          {certs.map((c, i) => (
            <div key={i} className="award-card">
              <div className="award-card-top">
                <div className="award-icon">{CERT_ICON}</div>
                <span className="award-year">{c.date}</span>
              </div>
              <h3 className="award-competition">{c.title}</h3>
              <p className="award-desc" style={{ marginTop: '0.25rem' }}>{c.issuer}</p>
              {c.verify && (
                <a href={c.verify} target="_blank" rel="noopener" className="cert-verify">
                  Verify credential
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

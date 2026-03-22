export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title"><span className="section-num">01.</span> About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>I&apos;m a Computer Science student at Middlebury College with a background in full-stack development, economic research, and education technology. I like building things that actually get used, whether that&apos;s a delivery platform for a campus community, a research tool for a professor, or a script that a few hundred people find useful.</p>
            <p>I grew up in Tripoli, Lebanon, where I ranked first in my graduating class and among all UNRWA schools before moving to Vermont. Since then, I&apos;ve worked across software engineering, research, and technical support simultaneously, which means I&apos;m used to context-switching and figuring things out without much hand-holding.</p>
            <p>Outside of work, I tutor Arabic, follow global economics, and think about what it takes to build technology for communities that have historically had the least access to it.</p>
            <div className="about-meta">
              {[['Location', 'Middlebury, VT'], ['Graduating', 'May 2026'], ['Languages', 'English, Arabic']].map(([k, v]) => (
                <div className="about-meta-item" key={k}>
                  <span className="mono">{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-edu">
            <h3>Education</h3>
            <div className="edu-card">
              <div className="edu-header">
                <div>
                  <p className="edu-school">Middlebury College</p>
                  <p className="edu-degree">B.A. Computer Science</p>
                </div>
                <span className="edu-year">2026</span>
              </div>
              <div className="edu-stats">
                <div className="stat"><span className="stat-val">3.9</span><span className="stat-label">Major GPA</span></div>
                <div className="stat"><span className="stat-val">3.55</span><span className="stat-label">Cumulative GPA</span></div>
              </div>
              <p className="edu-courses">Data Structures &amp; Algorithms &bull; NLP &bull; Math Foundation &bull; Calculus</p>
            </div>
            <div className="edu-card">
              <div className="edu-header">
                <div>
                  <p className="edu-school">Nazareth Secondary High School</p>
                  <p className="edu-degree">Tripoli, Lebanon</p>
                </div>
                <span className="edu-year">2022</span>
              </div>
              <p className="edu-courses">#1 in graduating class &bull; #1 in UNRWA Schools &bull; GPA 97.41%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

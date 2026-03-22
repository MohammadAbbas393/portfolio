import PantherPoolVisual from './visuals/PantherPoolVisual';
import SmartCartVisual from './visuals/SmartCartVisual';
import HarmonizeVisual from './visuals/HarmonizeVisual';


const GH_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
);

const featured = [
  {
    label: 'Featured Project',
    title: 'PantherPool',
    desc: [
      'A full-stack rideshare platform for Middlebury College students. Riders post trips, others join with approval, and drivers negotiate and confirm matches. Handles the full ride lifecycle: posting, joining, negotiating, confirming, in-progress, and completed, plus cancellations that auto-update status for remaining participants.',
      'Built with Firebase Auth synced to PostgreSQL via Firebase Admin SDK, Prisma ORM for the data schema, and a REST API layer in Next.js. The data model handles complex multi-party relationships between riders, drivers, matches, and join requests.',
    ],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Firebase Auth', 'Tailwind CSS'],
    gh: 'https://github.com/mohammadabbas393',
    visual: <PantherPoolVisual />,
    reverse: false,
  },
  {
    label: 'Featured Project',
    title: 'SmartCart',
    desc: [
      'A grocery store navigation and coupon app built as a white-label SaaS concept. The demo runs on "Ziggy\'s Grocery," a fully fleshed-out fake store with 60+ products, 10 aisles, 10 coupons, and a 10x8 grid store map.',
      'Key features include a visual store map where users can click aisles to browse items, an optimal route generator that calculates the most efficient path through the store based on cart contents, and automatic coupon application at checkout.',
    ],
    tags: ['React 18', 'React Router', 'Context API', 'CSS', 'Lucide React'],
    gh: 'https://github.com/mohammadabbas393/Smart-Cart',
    visual: <SmartCartVisual />,
    reverse: true,
  },
  {
    label: 'Featured Project',
    title: 'Harmonize',
    desc: [
      'A music-based dating app that uses the Spotify API to match users by music taste compatibility. Users sign in with their Spotify accounts, build profiles centered around their listening habits, and swipe on potential matches surfaced by the compatibility algorithm.',
      'Built with Next.js, NextAuth.js for Spotify OAuth, PostgreSQL for data storage, and Knex.js for migrations. Includes a full swipe interface, match management, and mutual match notifications.',
    ],
    tags: ['Next.js', 'Spotify API', 'NextAuth.js', 'PostgreSQL', 'Knex.js', 'Docker'],
    gh: 'https://github.com/mohammadabbas393/Harmonize-Music-Based-Dating-App',
    visual: <HarmonizeVisual />,
    reverse: false,
  },
];

const others = [
  {
    title: 'Downloads Cleaner',
    desc: 'Python script with a system tray icon that automatically sorts your downloads folder into categorized subfolders by file type. Logs all movements and supports custom mappings. Used by 200+ people.',
    tags: ['Python', 'Automation', 'pystray'],
    gh: 'https://github.com/mohammadabbas393/Downloads-folder-cleaner',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>,
  },
  {
    title: 'Sentiment Classification',
    desc: 'Trained and benchmarked three NLP models (BERT, DistilBERT, Naive Bayes) on diverse datasets. Compared accuracy, speed, and tradeoffs to understand when each model earns its complexity.',
    tags: ['Python', 'NLP', 'BERT', 'Jupyter'],
    gh: 'https://github.com/mohammadabbas393/Sentiment-Classification-with-Naive-Bayes-Distillbert-and-Bert-main',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  },
  {
    title: 'ApScraper',
    desc: 'Python web scraper that pulls apartment listing prices from multiple sources and exports structured data to CSV for side-by-side comparison. Built to solve a personal problem finding off-campus housing.',
    tags: ['Python', 'Web Scraping', 'CSV'],
    gh: 'https://github.com/mohammadabbas393/ApScraper',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
  },
  {
    title: 'Gene Finding Algorithm',
    desc: 'Python algorithm that scans raw DNA sequences and identifies genes by detecting open reading frames (ORFs). Applies core computational biology techniques to locate start/stop codons and report viable gene candidates.',
    tags: ['Python', 'Bioinformatics', 'Algorithms'],
    gh: 'https://github.com/mohammadabbas393/Genesfinder',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>,
  },
  {
    title: 'Word Game',
    desc: 'A Python terminal word game exploring string manipulation, dictionary lookups, and game state logic. Built as a challenge to implement clean game loops without external libraries.',
    tags: ['Python', 'CLI', 'Game Logic'],
    gh: 'https://github.com/mohammadabbas393/wordgame',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>,
  },
  {
    title: 'Memory Card',
    desc: 'A Python-based memory card matching game with a simple GUI. Tracks flips, matches, and game state across a grid of hidden cards.',
    tags: ['Python', 'GUI', 'Game Logic'],
    gh: 'https://github.com/mohammadabbas393/memorycard',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
  },
  {
    title: 'Jarvis',
    desc: 'A Python voice assistant that responds to commands, fetches information, and automates simple tasks. Named after the obvious inspiration.',
    tags: ['Python', 'Voice', 'Automation'],
    gh: 'https://github.com/mohammadabbas393/Jarvis',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
  },
  {
    title: 'DaraziTravels',
    desc: 'A travel website project showcasing destinations and itineraries. Currently in progress — being reworked with a full redesign.',
    tags: ['HTML', 'CSS', 'In Progress'],
    gh: 'https://github.com/mohammadabbas393/Travel',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/><path d="M3.6 9h16.8M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18"/></svg>,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title"><span className="section-num">03.</span> Projects</h2>

        <div className="projects-featured">
          {featured.map((p, i) => (
            <div key={i} className={`project-featured${p.reverse ? ' project-featured-reverse' : ''}`}>
              <div className="pf-content">
                <p className="pf-label">{p.label}</p>
                <h3 className="pf-title">{p.title}</h3>
                <div className="pf-desc-box">
                  {p.desc.map((d, j) => <p key={j}>{d}</p>)}
                </div>
                <div className="pf-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                <div className="pf-links">
                  <a href={p.gh} target="_blank" rel="noopener">{GH_ICON} GitHub</a>
                </div>
              </div>
              <div className="pf-visual">{p.visual}</div>
            </div>
          ))}
        </div>

        <h3 className="other-projects-title">Other Projects</h3>
        <div className="projects-grid">
          {others.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-top">
                <div className="project-icon">{p.icon}</div>
                <a href={p.gh} target="_blank" rel="noopener" className="project-gh" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

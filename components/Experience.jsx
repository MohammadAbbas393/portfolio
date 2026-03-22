'use client';
import { useState } from 'react';

const jobs = [
  {
    role: 'Research Assistant, Economics',
    org: 'Middlebury College — Professor Porteous',
    date: 'May 2025 – Aug 2025',
    summary: 'Worked directly with Professor Porteous on a replication package for published economics research on climate change and African agriculture. The goal was to reproduce and validate the paper\'s findings using real-world datasets, then extend the model to analyze new policy scenarios.',
    bullets: [
      'Built and maintained the full replication package in Python and GAMS, ensuring the research results were reproducible from raw FAO and IIASA datasets.',
      'Modeled how climate change shifts agricultural productivity across sub-Saharan Africa, accounting for crop yields, temperature projections, and regional variation.',
      'Simulated how reducing trade costs between African countries could offset welfare losses caused by climate shocks, using spatial equilibrium modeling.',
      'Used ArcGIS to map trade corridors and visualize how infrastructure improvements could serve as climate adaptation strategies.',
      'Worked independently, reading academic papers, debugging GAMS models, and presenting findings to the professor on a weekly basis.',
    ],
    tags: ['Python', 'GAMS', 'ArcGIS', 'FAO/IIASA Data', 'Spatial Modeling', 'Economics Research'],
  },
  {
    role: 'Software Engineer',
    org: 'MiddDash — Campus Delivery Platform',
    date: 'Jan 2025 – Mar 2025',
    summary: 'MiddDash is a food delivery platform for Middlebury College students, built around deliveries from the campus Grille. I came in as the lead engineer and rebuilt the platform from scratch, replacing what existed with a full Next.js application backed by Supabase.',
    bullets: [
      'Redesigned the entire website in Next.js, rethinking the UI from the ground up to make ordering fast and simple for students placing real-time food orders.',
      'Connected the platform to Supabase for data persistence, handling orders, users, menu items, food categories, and delivery locations in one unified database.',
      'Built an order tracking system so students could follow their delivery status in real time, and managers could see what was live at any moment.',
      'Designed and implemented the revenue split algorithm: every order\'s delivery fee is split 40% to the dasher, 30% to the manager, and 30% back to the organization — replacing manual calculations done by hand.',
      'Built a profits dashboard with live WebSocket updates showing total sales, restaurant earnings, delivery fees, and drink breakdown for admins.',
      'Added location management so delivery zones and pickup points could be configured by staff without touching the code.',
    ],
    tags: ['Next.js', 'React', 'Supabase', 'Prisma', 'WebSockets', 'Tailwind CSS', 'SQL'],
  },
  {
    role: 'Lead Intern',
    org: 'Digital and Learning Inquiry (DLINQ)',
    date: 'May 2023 – Present',
    summary: 'DLINQ is Middlebury\'s center for digital pedagogy and learning technology. As lead intern, I moved from doing individual projects to supervising a team of interns and consulting directly with students and faculty on how to use technology in their work.',
    bullets: [
      'Led a team of interns working on digital projects, assigning work, reviewing output, and making sure everything shipped on time and met quality standards.',
      'Consulted with students and faculty on their own technology projects, helping them choose tools, debug problems, and think through how AI and digital tools fit into their work.',
      'Designed the DLINQ public-facing website to help visitors understand the team\'s programs, services, and role within Davis Library. The site has been visited by 1,000+ users.',
      'Developed 3 Python data visualization tools that let 50+ students with no coding background generate graphs and charts from their own data for academic projects.',
      'Organized and ran 10+ AI and digital literacy workshops, guiding 100+ attendees through tools like Adobe, Microsoft 365, and various AI platforms in hands-on sessions.',
      'Acted as a point of contact for people curious about integrating AI responsibly into research, teaching, and student projects.',
    ],
    tags: ['Python', 'Team Leadership', 'AI Education', 'Web Dev', 'Consulting', 'Adobe', 'Microsoft 365'],
  },
  {
    role: 'Advanced Computer Consultant',
    org: 'ITS Helpdesk, Middlebury College',
    date: 'Sep 2022 – Present',
    summary: 'The ITS Helpdesk is Middlebury\'s primary technical support operation, serving students, faculty, and staff. I handle both walk-in support and remote tickets, covering a wide range of hardware and software problems on a daily basis.',
    bullets: [
      'Staffed the walk-in helpdesk, diagnosing and resolving technical problems in real time for students and faculty, covering software issues, hardware failures, network connectivity, account access, and more.',
      'Managed incoming support tickets in TDNext, triaging by priority and working through a queue of 300+ tickets while maintaining a 95% resolution rate within 24 hours.',
      'Supported 40+ users weekly across walk-in, phone, and email channels, adapting explanations to users with varying technical backgrounds.',
      'Resolved 200+ documented technical issues across platforms including Windows, macOS, mobile, and various college-managed software systems.',
      'Promoted to Advanced Consultant after demonstrating consistent reliability and ability to handle complex, escalated issues independently.',
    ],
    tags: ['Technical Support', 'TDNext', 'Networking', 'macOS', 'Windows', 'Customer Service'],
  },
];

export default function Experience() {
  const [open, setOpen] = useState(null);

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2 className="section-title"><span className="section-num">02.</span> Experience</h2>
        <p className="section-sub">Click any role to read more about what I actually did.</p>
        <div className="exp-list">
          {jobs.map((job, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`exp-item${isOpen ? ' active' : ''}`}>
                <button className="exp-header" onClick={() => setOpen(isOpen ? null : i)}>
                  <div className="exp-header-left">
                    <div className="exp-dot" />
                    <div>
                      <h3 className="exp-role">{job.role}</h3>
                      <p className="exp-org">{job.org}</p>
                    </div>
                  </div>
                  <div className="exp-header-right">
                    <span className="exp-date">{job.date}</span>
                    <svg className={`exp-chevron${isOpen ? ' open' : ''}`} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </button>
                <div className={`exp-body${isOpen ? ' open' : ''}`}>
                  <div className="exp-body-inner">
                    <p className="exp-summary">{job.summary}</p>
                    <ul className="exp-bullets">
                      {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                    <div className="exp-tags">
                      {job.tags.map(t => <span key={t}>{t}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

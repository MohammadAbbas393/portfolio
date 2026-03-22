const groups = [
  { title: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'R', 'HTML / CSS'] },
  { title: 'Frameworks & Libraries', items: ['React', 'Next.js', 'Tailwind CSS', 'Prisma', 'Knex.js', 'NextAuth.js'] },
  { title: 'Tools & Platforms', items: ['Git / GitHub', 'Supabase', 'Firebase', 'PostgreSQL', 'ArcGIS', 'GAMS', 'Tableau', 'Docker'] },
  { title: 'Domains', items: ['Full-Stack Development', 'Data Analysis', 'NLP / ML', 'Economic Modeling', 'Technical Support', 'AI Education'] },
  { title: 'Spoken Languages', items: ['English (Fluent)', 'Arabic (Fluent)', 'Spanish (Beginner)', 'French (Beginner)'] },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title"><span className="section-num">04.</span> Skills</h2>
        <div className="skills-grid">
          {groups.map(g => (
            <div className="skill-group" key={g.title}>
              <h3>{g.title}</h3>
              <div className="skill-tags">
                {g.items.map(item => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

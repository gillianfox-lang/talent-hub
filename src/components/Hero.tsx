import './Hero.css';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const cards = [
  { id: 'guides', icon: '📖', title: 'Reference Guides', desc: 'Searchable guides covering contracts, offers, interviews, and recruitment' },
  { id: 'quick-links', icon: '🔗', title: 'Quick Links', desc: '35+ frequently used resources — forms, templates, guides — all in one place' },
  { id: 'monthly-reminders', icon: '📝', title: 'Monthly Reminders', desc: 'Key updates and reminders for the team this month' },
  { id: 'gem-resources', icon: '✨', title: 'Gemini GEMs', desc: 'AI-powered tools for postings, interview summaries, and sourcing' },
  { id: 'onboarding-schedule', icon: '📅', title: 'Onboarding Schedule', desc: '2026 GEO Launch dates and offer cutoff deadlines' },
];

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-badge">Talent Acquisition</div>
        <h1>Talent Team Resource Hub</h1>
        <p className="hero-subtitle">
          Everything you need in one place — interactive tools, process guides, and quick-reference resources for the Geotab Talent Acquisition team.
        </p>
        <div className="hero-cards">
          {cards.map((c) => (
            <div key={c.id} className="hero-card" onClick={() => onNavigate(c.id)}>
              <div className="hero-card-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

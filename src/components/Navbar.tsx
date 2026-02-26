import { useState } from 'react';
import './Navbar.css';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  onOpenCommandPalette: () => void;
}

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'guides', label: 'Guides' },
  { id: 'quick-links', label: 'Quick Links' },
  { id: 'monthly-reminders', label: 'Reminders' },
  { id: 'gem-resources', label: 'GEMs' },
  { id: 'onboarding-schedule', label: 'Onboarding' },
];

export default function Navbar({ activeSection, onNavigate, onOpenCommandPalette }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a
          href="#hero"
          className="navbar-brand"
          onClick={(e) => { e.preventDefault(); onNavigate('hero'); setOpen(false); }}
        >
          <div className="navbar-brand-icon">T</div>
          <span className="navbar-brand-text">
            Talent Hub
            <span className="navbar-brand-sub">Geotab TA</span>
          </span>
        </a>

        <button
          className="cmd-trigger"
          onClick={onOpenCommandPalette}
        >
          <span className="cmd-trigger-icon">⌘</span>
          <span>Search</span>
          <span className="cmd-palette-kbd">⌘K</span>
        </button>

        <button className="navbar-toggle" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={activeSection === l.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(l.id);
                  setOpen(false);
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

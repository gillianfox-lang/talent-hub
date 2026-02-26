import { useState, useCallback, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Guides from './components/Guides';
import GemResources from './components/GemResources';
import OnboardingSchedule from './components/OnboardingSchedule';
import QuickLinks from './components/QuickLinks';
import MonthlyReminders from './components/MonthlyReminders';
import CommandPalette from './components/CommandPalette';
import Favorites from './components/Favorites';
import PasswordGate from './components/PasswordGate';
import { useFavorites } from './hooks/useFavorites';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [cmdOpen, setCmdOpen] = useState(false);
  const { favorites, removeFavorite, isFavorite, toggleFavorite } = useFavorites();

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Global Cmd+K shortcut
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen(prev => !prev);
      }
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <PasswordGate>
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenCommandPalette={() => setCmdOpen(true)}
      />
      <Hero onNavigate={handleNavigate} />
      <MonthlyReminders />
      <Favorites favorites={favorites} onRemove={removeFavorite} />
      <Guides />
      <QuickLinks isFavorite={isFavorite} onToggleFavorite={toggleFavorite} />
      <GemResources />
      <OnboardingSchedule />
      <CommandPalette
        open={cmdOpen}
        onClose={() => setCmdOpen(false)}
        onNavigate={handleNavigate}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
      <footer className="app-footer">
        <strong>Talent Hub</strong> — Geotab Talent Acquisition Resource Center<br />
        Internal use only. All information is confidential to Geotab.
      </footer>
    </PasswordGate>
  );
}

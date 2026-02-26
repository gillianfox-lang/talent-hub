import { useState, useEffect, useRef, useCallback } from 'react';
import './CommandPalette.css';
import { quickLinks } from '../data/quickLinks';
import { contractCountries } from '../data/contracts';
import { guideTabs } from '../data/guides';
import { onboardingRegions } from '../data/onboarding';
import type { Favorite } from '../hooks/useFavorites';

interface SearchItem {
  label: string;
  description: string;
  group: string;
  icon: string;
  url?: string;
  sectionId?: string;
}

function buildIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  // Quick Links
  for (const link of quickLinks) {
    items.push({
      label: link.label,
      description: link.category,
      group: 'Quick Links',
      icon: '🔗',
      url: link.url,
    });
  }

  // GEMs
  const gems = [
    { name: 'Job Posting Generator', desc: 'Generate Greenhouse job postings', url: 'https://gemini.google.com/gem/1r0wPSoF-QiqkrNvUi_AgoA9eKA2XPXTs?usp=sharing' },
    { name: 'Interview Transcription Summary', desc: 'Summarize interview transcriptions', url: 'https://gemini.google.com/gem/1h7GX8HWGFgKFnWv2iCiEhbHYL66YFWYF?usp=sharing' },
    { name: 'HEADHNT', desc: 'AI sourcing and candidate research', url: 'https://gemini.google.com/gem/1BEKkpPbMDIrReN0OAKH25ElsXUSXHEk5?usp=sharing' },
  ];
  for (const gem of gems) {
    items.push({
      label: gem.name,
      description: gem.desc,
      group: 'Gemini GEMs',
      icon: '✨',
      url: gem.url,
    });
  }

  // Guide sections
  for (const tab of guideTabs) {
    items.push({
      label: tab.label,
      description: tab.description,
      group: 'Reference Guides',
      icon: tab.icon,
      sectionId: 'guides',
    });
  }

  // Contract countries
  for (const c of contractCountries) {
    items.push({
      label: `${c.country} Contract`,
      description: `${c.status} — ${c.documents.length} documents`,
      group: 'Contracts',
      icon: '🌍',
      sectionId: 'guides',
    });
  }

  // Onboarding regions
  for (const r of onboardingRegions) {
    items.push({
      label: `${r.label} Onboarding`,
      description: `${r.dates.length} GEO Launch dates`,
      group: 'Onboarding',
      icon: '📅',
      sectionId: 'onboarding-schedule',
    });
  }

  // Sections
  items.push({ label: 'Onboarding Schedule', description: 'GEO Launch dates and cutoffs', group: 'Sections', icon: '📅', sectionId: 'onboarding-schedule' });
  items.push({ label: 'Quick Links', description: 'Frequently used resources', group: 'Sections', icon: '🔗', sectionId: 'quick-links' });

  return items;
}

const allItems = buildIndex();

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
  favorites: Favorite[];
  onToggleFavorite: (fav: Favorite) => void;
  isFavorite: (url: string) => boolean;
}

export default function CommandPalette({ open, onClose, onNavigate, favorites, onToggleFavorite, isFavorite }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? allItems.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.group.toLowerCase().includes(query.toLowerCase())
      )
    : allItems.filter(item => item.group === 'Sections' || item.group === 'Reference Guides' || item.group === 'Gemini GEMs');

  // Group results
  const grouped: Record<string, SearchItem[]> = {};
  // Put favorites first if no query
  if (!query.trim() && favorites.length > 0) {
    grouped['My Shortcuts'] = favorites.map(f => ({
      label: f.label,
      description: 'Pinned',
      group: 'My Shortcuts',
      icon: '⭐',
      url: f.url,
    }));
  }
  for (const item of filtered) {
    if (!grouped[item.group]) grouped[item.group] = [];
    grouped[item.group].push(item);
  }

  const flatItems: SearchItem[] = Object.values(grouped).flat();

  const handleSelect = useCallback((item: SearchItem) => {
    if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else if (item.sectionId) {
      onNavigate(item.sectionId);
    }
    onClose();
  }, [onClose, onNavigate]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, flatItems.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && flatItems[activeIndex]) {
      e.preventDefault();
      handleSelect(flatItems[activeIndex]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [flatItems, activeIndex, handleSelect, onClose]);

  // Reset on open
  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Reset active index on query change
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // Scroll active item into view
  useEffect(() => {
    const el = listRef.current?.querySelector('.cmd-palette-item.active');
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  // Global keyboard shortcut
  useEffect(() => {
    function handleGlobalKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (open) {
          onClose();
        } else {
          // Will be handled by parent
        }
      }
    }
    if (open) {
      document.addEventListener('keydown', handleGlobalKey);
      return () => document.removeEventListener('keydown', handleGlobalKey);
    }
  }, [open, onClose]);

  if (!open) return null;

  let itemIndex = 0;

  return (
    <div className="cmd-palette-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="cmd-palette" onClick={e => e.stopPropagation()}>
        <div className="cmd-palette-input-wrap">
          <span className="cmd-palette-icon">⌘</span>
          <input
            ref={inputRef}
            className="cmd-palette-input"
            type="text"
            placeholder="Search everything..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <span className="cmd-palette-kbd">ESC</span>
        </div>

        <div className="cmd-palette-results" ref={listRef}>
          {flatItems.length === 0 && (
            <div className="cmd-palette-empty">No results found</div>
          )}
          {Object.entries(grouped).map(([group, items]) => (
            <div key={group} className="cmd-palette-group">
              <div className="cmd-palette-group-label">{group}</div>
              {items.map((item) => {
                const idx = itemIndex++;
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={`${item.label}-${idx}`}
                    className={`cmd-palette-item${isActive ? ' active' : ''}`}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setActiveIndex(idx)}
                  >
                    <div className="cmd-palette-item-icon">{item.icon}</div>
                    <div className="cmd-palette-item-text">
                      <div className="cmd-palette-item-label">{item.label}</div>
                      <div className="cmd-palette-item-desc">{item.description}</div>
                    </div>
                    {item.url && (
                      <button
                        className="fav-star"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite({ label: item.label, url: item.url! });
                        }}
                        title={isFavorite(item.url) ? 'Remove from shortcuts' : 'Add to shortcuts'}
                      >
                        {isFavorite(item.url) ? '★' : '☆'}
                      </button>
                    )}
                    <span className="cmd-palette-item-action">
                      {item.url ? '↗' : '→'}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="cmd-palette-footer">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> open</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}

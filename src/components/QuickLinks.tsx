import { useState } from 'react';
import './QuickLinks.css';
import '../components/Favorites.css';
import { quickLinks, quickLinkCategories } from '../data/quickLinks';
import type { Favorite } from '../hooks/useFavorites';

interface QuickLinksProps {
  isFavorite: (url: string) => boolean;
  onToggleFavorite: (fav: Favorite) => void;
}

export default function QuickLinks({ isFavorite, onToggleFavorite }: QuickLinksProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filtered = quickLinks.filter(l => {
    const matchesCategory = !activeCategory || l.category === activeCategory;
    const matchesSearch = !search || l.label.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const grouped = activeCategory
    ? { [activeCategory]: filtered }
    : quickLinkCategories.reduce((acc, cat) => {
        const items = filtered.filter(l => l.category === cat);
        if (items.length > 0) acc[cat] = items;
        return acc;
      }, {} as Record<string, typeof quickLinks>);

  return (
    <section id="quick-links" className="quick-links">
      <div className="quick-links-inner">
        <h2 className="section-heading">Quick Links</h2>
        <p className="section-subheading">Frequently used resources, all in one place. Star items to add them to your shortcuts.</p>

        <input
          type="text"
          className="ql-search"
          placeholder="Filter links..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="ql-categories">
          <button
            className={`ql-cat${!activeCategory ? ' active' : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            All
          </button>
          {quickLinkCategories.map(cat => (
            <button
              key={cat}
              className={`ql-cat${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {Object.entries(grouped).map(([cat, links]) => (
          <div key={cat} className="ql-group">
            <h3 className="ql-group-title">{cat}</h3>
            <div className="ql-grid">
              {links.map(link => (
                <div key={link.label} className="ql-link">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}
                  >
                    <span className="ql-link-label">{link.label}</span>
                  </a>
                  <button
                    className="fav-star"
                    onClick={() => onToggleFavorite({ label: link.label, url: link.url })}
                    title={isFavorite(link.url) ? 'Remove from shortcuts' : 'Add to shortcuts'}
                  >
                    {isFavorite(link.url) ? '★' : '☆'}
                  </button>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ql-link-arrow"
                    style={{ textDecoration: 'none' }}
                  >
                    ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--color-gray-500)', padding: '24px 0' }}>
            No links match your search.
          </p>
        )}
      </div>
    </section>
  );
}

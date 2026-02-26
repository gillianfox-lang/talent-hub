import './Favorites.css';
import type { Favorite } from '../hooks/useFavorites';

interface FavoritesProps {
  favorites: Favorite[];
  onRemove: (url: string) => void;
}

export default function Favorites({ favorites, onRemove }: FavoritesProps) {
  if (favorites.length === 0) return null;

  return (
    <div className="favorites has-items">
      <div className="favorites-inner">
        <div className="favorites-header">
          <span className="favorites-title">My Shortcuts</span>
        </div>
        <div className="favorites-grid">
          {favorites.map(fav => (
            <span key={fav.url} className="fav-chip">
              <a
                href={fav.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center', gap: 6 }}
              >
                {fav.label}
                <span className="fav-chip-arrow">↗</span>
              </a>
              <button
                className="fav-chip-remove"
                onClick={() => onRemove(fav.url)}
                title="Remove from shortcuts"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

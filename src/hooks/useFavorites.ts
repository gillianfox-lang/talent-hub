import { useState, useCallback } from 'react';

export interface Favorite {
  label: string;
  url: string;
}

const STORAGE_KEY = 'talent-hub-favorites';

function loadFavorites(): Favorite[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveFavorites(favs: Favorite[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Favorite[]>(loadFavorites);

  const addFavorite = useCallback((fav: Favorite) => {
    setFavorites(prev => {
      if (prev.some(f => f.url === fav.url)) return prev;
      const next = [...prev, fav];
      saveFavorites(next);
      return next;
    });
  }, []);

  const removeFavorite = useCallback((url: string) => {
    setFavorites(prev => {
      const next = prev.filter(f => f.url !== url);
      saveFavorites(next);
      return next;
    });
  }, []);

  const isFavorite = useCallback((url: string) => {
    return favorites.some(f => f.url === url);
  }, [favorites]);

  const toggleFavorite = useCallback((fav: Favorite) => {
    if (favorites.some(f => f.url === fav.url)) {
      removeFavorite(fav.url);
    } else {
      addFavorite(fav);
    }
  }, [favorites, addFavorite, removeFavorite]);

  return { favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite };
}

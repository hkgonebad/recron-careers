import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favoritesKey = 'favorites';

  getFavorites(): number[] {
    const favoritesStr = localStorage.getItem(this.favoritesKey);
    return favoritesStr ? JSON.parse(favoritesStr) : [];
  }

  toggleFavorite(jobId: number): number[] {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(jobId);

    if (index === -1) {
      favorites.push(jobId);
    } else {
      favorites.splice(index, 1);
    }

    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    return favorites;
  }
}

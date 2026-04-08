import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { Gif } from '@gifs/interfaces/gif.interfaces';
import { GiphyResponse } from '@gifs/interfaces/giphy.interfaces';
import { GifMapper } from '@gifs/mapper/gif.mapper';
import { map, tap } from 'rxjs';

/*
{
  'spiderman': [gif1, gif2, gif3], 
  'batman': [gif1, gif2, gif3],  
}
Record<string, Gif[]>
*/

@Injectable({
  providedIn: 'root',
})
export class GifsServiceTs {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>({});
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: '20',
        },
      })
      .subscribe((resp) => {
        //console.log('hace la petición');
        //console.log({ resp });
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        console.log({ gifs });
        this.trendingGifs.set(gifs);
      });
  }

  searchGifs(query: string) {
    // mandar el parametro e imprimirlo en consola
    return (
      this.http
        .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
          params: {
            api_key: environment.giphyApiKey,
            limit: '20',
            q: query,
          },
        })
        //.pipe(map((resp) => `Hola mundo: ${resp.data.length}`));
        .pipe(
          map(({ data }) => data),
          map((items) => GifMapper.mapGiphyItemsToGifArray(items)),
          tap((items) => {
            this.searchHistory.update((history) => {
              return {
                ...history,
                [query.toLowerCase()]: items,
              };
            });
          }),
        )
    );
  }

  gethistoryGifs(query: string) {
    return this.searchHistory()[query] ?? [];
  }
}

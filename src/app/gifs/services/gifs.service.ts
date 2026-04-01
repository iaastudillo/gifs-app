import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { Gif } from '@gifs/interfaces/gif.interfaces';
import { GiphyResponse } from '@gifs/interfaces/giphy.interfaces';
import { GifMapper } from '@gifs/mapper/gif.mapper';

@Injectable({
  providedIn: 'root',
})
export class GifsServiceTs {
  constructor() {
    this.loadTrendingGifs();
  }

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);

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
}

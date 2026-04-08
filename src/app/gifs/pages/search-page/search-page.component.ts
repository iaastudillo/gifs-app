import { Component, computed, inject, signal } from '@angular/core';
import { GifsListComponent } from '@gifs/components/gifs-list/gifs-list.component';
import { Gif } from '@gifs/interfaces/gif.interfaces';
import { GifsServiceTs } from '@gifs/services/gifs.service';

@Component({
  selector: 'search-page',
  standalone: true,
  imports: [GifsListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  gifService = inject(GifsServiceTs);
  gifs = signal<Gif[]>([]);
  gifResults = computed(() => this.gifs());

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((resp) => {
      console.log(resp);
      this.gifs.set(resp);
    });
  }
}

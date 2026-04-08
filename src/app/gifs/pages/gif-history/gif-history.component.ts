import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifsServiceTs } from '@gifs/services/gifs.service';
import { GifsListComponent } from '@gifs/components/gifs-list/gifs-list.component';

@Component({
  selector: 'gif-history',
  imports: [GifsListComponent],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryComponent {
  gifsService = inject(GifsServiceTs);

  query = toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['query'])), {
    initialValue: '',
  });

  gifsByKey = computed(() => {
    return this.gifsService.gethistoryGifs(this.query());
  });

  /*
  query = inject(ActivatedRoute).params.subscribe((params) => {
    console.log(params['query']);
  });
  */
}

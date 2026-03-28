import { Component, input } from '@angular/core';
import { GifListItemComponent } from './gif-list-item.component/gif-list-item.component';

@Component({
  selector: 'gifs-list',
  standalone: true,
  imports: [GifListItemComponent],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {
  gifs = input<string[]>([]);
}

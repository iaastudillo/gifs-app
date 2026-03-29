import { Component, input } from '@angular/core';

@Component({
  selector: 'list-item',
  standalone: true,
  imports: [],
  templateUrl: './gif-list-item.component.html',
})
export class GifListItemComponent {
  imageUrl = input('');
}

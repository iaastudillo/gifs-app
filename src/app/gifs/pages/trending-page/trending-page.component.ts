import { Component, inject } from '@angular/core';
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';
import { GifsServiceTs } from '@gifs/services/gifs.service';

//Enviar las imangenes al component list item. Enviar el array de imagenes con input a la lista y luego al item

@Component({
  selector: 'trending-page',
  standalone: true,
  imports: [GifsListComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {
  imageUrls: string[] = [
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
  ];

  gidService = inject(GifsServiceTs);

  constructor() {
    this.gidService.loadTrendingGifs();
  }
}

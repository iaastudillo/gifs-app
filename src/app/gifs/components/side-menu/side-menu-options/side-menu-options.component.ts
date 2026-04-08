import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsServiceTs } from '@gifs/services/gifs.service';

interface MenuOption {
  label: string;
  route: string;
  sublabel: string;
  icon: string;
}

@Component({
  selector: 'side-menu-options',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class GifsSideMenuOptions {
  gifsService = inject(GifsServiceTs);
  searchHistoryKeys = this.gifsService.searchHistoryKeys;

  menuOptions: MenuOption[] = [
    {
      label: 'Trending',
      sublabel: 'Gifs populares',
      route: '/dashboard/trending',
      icon: 'fa-solid fa-chart-line',
    },
    {
      label: 'Buscador',
      sublabel: 'Buscar gifs',
      route: '/dashboard/search',
      icon: 'fa-solid fa-magnifying-glass',
    },
  ];
}

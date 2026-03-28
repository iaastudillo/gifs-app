import { Component } from '@angular/core';
import { GifsSideMenuHeaderComponent } from '../gifs-side-menu-header.component';
import { GifsSideMenuOptions } from '../../side-menu/gifs-side-menu-options/gifs-side-menu-options.component';

@Component({
  selector: 'gifs-side-menu',
  standalone: true,
  imports: [GifsSideMenuHeaderComponent, GifsSideMenuOptions],
  templateUrl: '../gifs-side-menu.component.html',
})
export class GifsSideMenuComponent {}

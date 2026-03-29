import { Component } from '@angular/core';
import { GifsSideMenuHeaderComponent } from './side-menu-header/side-menu-header.component';
import { GifsSideMenuOptions } from './side-menu-options/side-menu-options.component';

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [GifsSideMenuHeaderComponent, GifsSideMenuOptions],
  templateUrl: './side-menu.component.html',
})
export class GifsSideMenuComponent {}

import { Component } from '@angular/core';
import { environment } from '@environments/environment';
// import { environment } from '../../../../environments/environment';

@Component({
  selector: 'side-menu-header',
  standalone: true,
  imports: [],
  templateUrl: './side-menu-header.component.html',
})
export class GifsSideMenuHeaderComponent {
  envs = environment;
}

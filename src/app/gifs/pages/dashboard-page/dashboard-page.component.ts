import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuComponent } from '../../components/gifs-side-menu-header/gifs-side-menu.component/gifs-side-menu.component';

@Component({
  selector: 'dashboard-page',
  standalone: true,
  imports: [RouterOutlet, GifsSideMenuComponent],
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent {}

/*  TAREA 
CREAR DOS COMPONENTES PARA ENLAZAR DOS RUTAS MÁS 
UNA QUE SE LLAMA TRENDING Y OTRA SEARCH
*/

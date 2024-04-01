import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Route, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidemenu.component.html',
  styles: ``
})
export class SidemenuComponent {
  public menuItems: Route[] = routes
  .map( (route) => route.children ?? [] )
  .flat()
  .filter( route => route && route.path )
  .filter( route => !route.path!.includes(':') );

}

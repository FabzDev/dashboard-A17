import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Route, Routes } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
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

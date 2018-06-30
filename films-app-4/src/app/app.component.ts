import { Component } from '@angular/core';

const links: object[] = [
  { path: '/main', label: 'Главная', active: 'button-active', icon: 'home' },
  {
    path: '/films',
    label: 'Все фильмы',
    active: 'button-active',
    icon: 'list_alt'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = links;
}

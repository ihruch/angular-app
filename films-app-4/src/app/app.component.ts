import { Component } from '@angular/core';

const links: object[] = [
  {
    path: '/main',
    label: 'Главная',
    active: 'active',
    icon: 'home'
  },
  {
    path: '/films',
    label: 'Все фильмы',
    active: 'no-active',
    icon: 'view-list'
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

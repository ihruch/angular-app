import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  filmsData: object[];
  typeSort: string;
  countStar: number = 0;
  isCastomWidth: true;
  options = [
    { name: 'По алфавиту: A-Z', value: 'AZ' },
    { name: 'По алфавиту: Z-A', value: 'ZA' }
  ];
  constructor(public filmService: FilmService) {}

  ngOnInit() {
    this.filmsData = this.filmService.getFilmsData();
  }

  sortingHandler() {
    this.filmService.sortingHandler(this.typeSort);
  }

  countFavorite() {
    console.log('object');
    return this.countStar++;
  }
}

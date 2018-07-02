import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from '@angular/core';
import { FilmService } from '../film.service';
import { Dropdown } from '@clr/angular';
import { elementStart } from '@angular/core/src/render3/instructions';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  filmsData: object[];
  isBtn: string;
  countStar = 0;
  isCastomWidth = true;
  countItem: number;
  isHidden = false;
  isEmptysearch = false;
  countFavourite: object[];

  @ViewChild('dropDownSort') dropdown: ElementRef;

  options = [
    { name: 'от А до Я', value: 'AZ' },
    { name: 'от Я до А', value: 'ZA' }
  ];

  constructor(public filmService: FilmService) {}

  ngOnInit() {
    this.filmsData = this.filmService.getFilmsData();
    this.countItem = this.filmService.isMax();
    this.countItemFavourite();
  }
  // при начальной инициализации смотрим есть ли фильмы в избранном
  countItemFavourite() {
    this.countFavourite = this.filmService.getFavourite();
  }

  // от дочернего компонента приходит объект фильм его буре его id  и отправляем в сервис
  updateFavourite(film) {
    this.filmService.changeFavourite(film.id);
    this.countItemFavourite();
  }

  showPage() {
    this.filmsData = [...this.filmsData, ...this.filmService.getFilmsData()];
  }

  // СОРТИРОВКА НАЧАЛО
  sortingHandler(event) {
    this.isBtn = event.target.getAttribute('data-sort');
    if (this.isBtn) {
      this.sortingData(this.isBtn);
      this.changeItemName(event);
    }
  }
  sortingData(isBtn) {
    this.filmService.sortingHandler(isBtn);
    this.resetPage();
  }
  changeItemName(event) {
    this.dropdown.nativeElement.innerHTML = event.target.innerHTML;
  }
  // СОРТИРОВКА КОНЕЦ

  // ПОИСК ФИЛЬМОВ
  searchFilms(searchVal: string) {
    if (searchVal.length >= 3) {
      this.isHidden = true;
      this.filmsData = this.filmService.filmsList.filter(item => {
        return (
          item['name'].toLowerCase().indexOf(searchVal.toLowerCase()) !== -1
        );
      });
      console.log(this.filmsData);
    } else {
      this.resetPage();
    }
  }

  // КОНЕЦ ПОИСК ФИЛЬМОВ

  resetPage() {
    this.filmService.configPage.currentPage = 0;
    this.filmsData = [];
    this.showPage();
    this.isHidden = false;
  }
}

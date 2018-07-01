import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from '@angular/core';
import { FilmService } from '../film.service';
import { Dropdown } from '@clr/angular';

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

  @ViewChild('dropDownSort') dropdown: ElementRef;

  options = [
    { name: 'от А до Я', value: 'AZ' },
    { name: 'от Я до А', value: 'ZA' }
  ];

  constructor(public filmService: FilmService) {}

  ngOnInit() {
    this.filmsData = this.filmService.getFilmsData();
    this.countItem = this.filmService.isMax();
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
    this.filmService.sortingHandler(this.filmsData, isBtn);
  }

  changeItemName(event) {
    this.dropdown.nativeElement.innerHTML = event.target.innerHTML;
  }
  // СОРТИРОВКА КОНЕЦ

  // ПОИСК ФИЛЬМОВ
  searchFilms(str: any) {
    str.length >= 2 ? this.compareValue(str) : this.updatePage();
  }
  compareValue(str) {
    return (this.filmsData = this.filmsData.filter(item => {
      return item['name'].toLowerCase().indexOf(str) !== -1;
    }));
  }
  updatePage() {
    this.filmService.configPage.currentPage = 0;
    this.filmsData = [];
    this.showPage();
  }
  // КОНЕЦ ПОИСК ФИЛЬМОВ
}

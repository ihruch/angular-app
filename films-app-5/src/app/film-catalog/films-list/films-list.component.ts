import {
  Component,
  OnInit,
  OnChanges,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  SimpleChanges
} from '@angular/core';

import { FilmService } from '../film.service';
import { Film } from '../../film';
import { SortOption } from '../../sort-option';
import { SearchComponent } from './search/search.component';

@Component({
  selector: '.films',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  activeView = 'films';

  items: object[] = []; // сохраняем массив фильмов
  isTrue = true;
  favoriteFilmsCount = 0;
  isLoading = false;
  imgPath = this.filmsService.smallBackPath;

  isQuery = false;
  queryValue = '';

  configPage = {
    currentPage: 1,
    totalPages: null,
    totalResults: null,
    lastPage: null
  };

  sortOptions: SortOption[] = [
    { value: 'films', description: 'Фильмы' },
    { value: 'characters', description: 'Актеры' }
  ];

  constructor(public filmsService: FilmService) {}
  @ViewChild(SearchComponent) searchComp: SearchComponent;

  // сохранение данных полученных с сервера
  saveData(items, currentPage, totalPages, totalRes) {
    this.items = this.items.concat(items);
    this.configPage.currentPage = currentPage;
    this.configPage.totalPages = totalPages;
    this.configPage.totalResults = totalRes;
  }

  ngOnInit() {
    this.getPopularFilms();
  } 

  // ПОЛУЧЕНИЕ ДАННЫХ С СЕРВИСА
  getPopularFilms() {
    this.filmsService.getPopularFilms(this.configPage.currentPage).subscribe(
      (filmList: any) => {
        this.isLoading = false;
        this.saveData(
          filmList.results,
          filmList.page,
          filmList.total_pages,
          filmList.total_results
        );
      },
      err => {
        console.log('error');
      }
    );
  } // end func

  getPopularPeoples() {
    this.filmsService.getPopularPeople(this.configPage.currentPage).subscribe(
      (peopleList: any) => {
        this.isLoading = false;
        this.saveData(
          peopleList.results,
          peopleList.page,
          peopleList.total_pages,
          peopleList.total_results
        );
      },
      err => {
        console.log('error');
      }
    );
  } // end func

  getSearchMovies(query?) {
    this.filmsService
      .searchMovies(this.configPage.currentPage, query)
      .subscribe(
        (searchMovies: any) => {
          this.isLoading = false;
          this.saveData(
            searchMovies.results,
            searchMovies.page,
            searchMovies.total_pages,
            searchMovies.total_results
          );
        },
        err => {
          console.log('error');
        }
      );
  } // end func

  getSearcPersone(query) {
    this.filmsService
      .searchPersone(this.configPage.currentPage, query)
      .subscribe(
        (searchPersone: any) => {
          this.isLoading = false;
          this.saveData(
            searchPersone.results,
            searchPersone.page,
            searchPersone.total_pages,
            searchPersone.total_results
          );
        },
        err => {
          console.log('error');
        }
      );
  } // end func
  // ПОЛУЧЕНИЕ ДАННЫХ С СЕРВИСА КОНЕЦ

  // сортировка и файворит
  changeView() {
    if (this.activeView === 'films') {
      this.clearData();
      this.isLoading = true;
      this.getPopularFilms();
      this.searchComp.searchVal = '';
    } else {
      this.clearData();
      this.isLoading = true;
      this.getPopularPeoples();
      this.searchComp.searchVal = '';
    }
  }

  // Обнуляет массив с данными;
  clearData() {
    this.items = [];
    this.configPage.currentPage = 1;
  }

  selectMethod() {
    this.activeView === 'films' && this.getPopularFilms();
    this.activeView === 'characters' && this.getPopularPeoples();
  }

  selectSearchMethod(query?) {
    this.activeView === 'films' && this.getSearchMovies(query);
    this.activeView === 'characters' && this.getSearcPersone(query);
  }

  // делаем переход на последннюю страницу
  moveToLastPage() {
    this.configPage.currentPage = this.configPage.totalPages;
    this.isLoading = true;
    this.selectMethod();
  }

  // переход на первую страницу
  moveToFirstPage() {
    this.clearData();
    this.isLoading = true;
    this.selectMethod();
  }

  // для получения данныйх true или false если это последняя страницы
  isLastPage = () => this.configPage.currentPage === this.configPage.totalPages;

  // загружаем следующую порцию данных
  loadNextPage() {
    this.configPage.currentPage++;

    this.isQuery
      ? this.selectSearchMethod(this.queryValue)
      : this.selectMethod();
    this.isLoading = true;
  }

  // работа с полученной строкой поиска от пользователя
  searchHandler(query) {
    this.queryValue = query;
    if (query.length >= 3) {
      this.clearData();
      this.selectSearchMethod(query);
      this.isQuery = true;
    }

    if (query.length < 3) {
      this.clearData();
      this.selectMethod();
      this.isQuery = false;
    }
  }

  trackByFn(index, item) {
    return item.id;
  }
}

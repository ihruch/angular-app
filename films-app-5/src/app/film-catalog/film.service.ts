import { Injectable } from '@angular/core';
import { Film } from '../film';
import { SortOption } from '../sort-option';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  apiUrl:    string = 'https://api.themoviedb.org/3';
  apiKey:    string = '0994e7679a856150aadcecf7de489bce';
  movieUrl:  string = `${this.apiUrl}/movie`;
  searchUrl: string = `${this.apiUrl}/search`;
  personUrl: string = `${this.apiUrl}/person`;
  params:    string = `&api_key=${this.apiKey}&language=ru-RU`;

  imgPath: string = 'https://image.tmdb.org/t/p';
  midImgPath: string = `${this.imgPath}/w500`;
  smallImgPath: string = `${this.imgPath}/w185`;
  bigBackPath: string = `${this.imgPath}/w1280`;
  midBackPath: string = `${this.imgPath}/w780`;
  smallBackPath: string = `${this.imgPath}/w300`;

  constructor(private http: HttpClient) {}

  getPopularPeople(page?: number) {
    return this.http.get(
      `${this.personUrl}/popular?page=${page}${this.params}`
    );
  }

  getPopularFilms(page?: number) {
    return this.http.get(`${this.movieUrl}/popular?page=${page}${this.params}`);
  }

  searchMovies(page, query) {
    return this.http.get(
      `${this.searchUrl}/movie?page=${page}${this.params}&query=${query}`
    );
  }

  searchPersone(page, query) {
    return this.http.get(
      `${this.searchUrl}/person?page=${page}${this.params}&query=${query}`
    );
  }
}

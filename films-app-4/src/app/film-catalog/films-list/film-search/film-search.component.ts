import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { validateStyleProperty } from '@angular/animations/browser/src/render/shared';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {
  @Output() valSearch = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  saerchHandler(value) {
    this.valSearch.emit(value);
  }
}

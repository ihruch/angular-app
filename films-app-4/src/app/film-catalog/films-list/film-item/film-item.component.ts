import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  constructor() {}
  @Input() film: any;
  @Output() addfavorite = new EventEmitter();

  ngOnInit() {}

  addFilmToFavourite(film) {
    this.addfavorite.emit(film);
  }
}

import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  OnChanges,
  Output,
  ElementRef,
  ViewChild,
  SimpleChanges
} from '@angular/core';

import { Film } from '../../../film';

import { FilmService } from '../../film.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnChanges, OnInit {
  img_poster: string;
  isTrue = true;
  @Input() film: Film;
  @Input() imgPath: string;
  @Input() counter: number;
  // @Output('star') starEmitter = new EventEmitter<Film>();

  constructor(public filmsService: FilmService) {}

  // получаем ссылку на конкретный DOM элемент компонента
  @ViewChild('name', { read: ElementRef })
  nameDiv: ElementRef;

  ngOnInit() {
    console.log('Hook Child, Инициализация дочернего компонента');
  }

  ngOnChanges(changes: SimpleChanges) {
    
    // console.log(changes.film.currentValue);
    // console.log(changes.film.previousValue);
  }
}

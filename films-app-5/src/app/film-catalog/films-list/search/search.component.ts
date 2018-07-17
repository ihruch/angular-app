import {
  Component,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
  Input,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {
  searchVal = '';
  searchLabelText = 'Поиск фильмов';

  constructor() {}
  @Output() search = new EventEmitter();
  @Input() activeView;
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.searchLabelText =
      this.activeView === 'films' ? 'Поиск фильмов' : 'Поиск актеров';
  }

  getValinput() {
    this.search.emit(this.searchVal);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../../character';
import { StringifyOptions } from 'querystring';
@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {
  constructor() {}
  @Input() character: Character;
  @Input() imgPath: String;

  ngOnInit() {
    // console.log(this.character);
  }
}

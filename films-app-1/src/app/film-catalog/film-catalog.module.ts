import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { MainComponent } from './main/main.component';
import { FilmsComponent } from './films/films.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  declarations: [
    MainComponent, 
    FilmsComponent, 
    DetailsComponent
  ]
 })
export class FilmCatalogModule { }

import { NgModule } from '@angular/core';
// import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmItemComponent } from './films-list/film-item/film-item.component';
import { ClarityModule } from '@clr/angular';
import { FilmSearchComponent } from './films-list/film-search/film-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    MatToolbarModule,
    ClarityModule
  ],
  declarations: [
    MainComponent,
    DetailsComponent,
    FilmsListComponent,
    FilmItemComponent,
    FilmSearchComponent
  ]
  // schemas: [
  //   NO_ERRORS_SCHEMA,
  //   CUSTOM_ELEMENTS_SCHEMA
  // ]
})
export class FilmCatalogModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ResultsComponent } from './components/results/results.component';
import { SearchComponent } from './components/search/search.component';
import { SearchHistoryComponent } from './components/search-history/search-history.component';
import { TrendingComponent } from './components/trending/trending.component';
import { GifService } from './services/gifs.service';
import { SharedService } from '../shared/services/shared.service';
import { TrendingService } from './services/trending.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SearchComponent,
    ResultsComponent,
    SearchHistoryComponent,
    TrendingComponent
  ],
  exports: [
    SearchComponent,
    ResultsComponent,
    TrendingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FontAwesomeModule
  ],
  providers: [
    GifService,
    TrendingService,
    SharedService
  ]
})
export class GifsModule { }

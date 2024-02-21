import { Component, EventEmitter, OnInit, Output} from '@angular/core';

import { TrendingService } from '../../services/trending.service';
import { GifService } from '../../services/gifs.service';
import { SharedService } from 'src/app/shared/services/shared.service';

import { faLineChart, faChevronLeft, faChevronRight, faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  faLineChart = faLineChart;
  faLink = faLink
  faLeft = faChevronLeft;
  faRight = faChevronRight

  @Output() sendValue: EventEmitter<string> = new EventEmitter();
  searchValue: string = ''

  get trendingGifs() { return this.trending.trending } 
  get trendingList() { return this.trending.trendingList }

  constructor(
      private gifs: GifService,
      public trending: TrendingService, 
      public shared: SharedService
    ) {}

  ngOnInit(): void {
    this.trending.getTrendingGifs();
    this.trending.getTrendingList();
  }
  
  // Gets gifs from hastags list
  getGifs(name: string): void {
    this.gifs.searchGifs(name);
    this.shared.resultBlock = true;
    
    this.searchValue = name;
    this.sendValue.emit(this.searchValue);
  }

  // Copy gif link
  copyLink(link: string) {
      this.shared.copyLink(link)
  }
}

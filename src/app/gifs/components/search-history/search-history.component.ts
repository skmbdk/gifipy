import { Component, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { GifService } from '../../services/gifs.service';

import { faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent {
  faClose = faXmark
  faTrash = faTrash

  @Output() sendValue: EventEmitter<string> = new EventEmitter();
  searchValue: string = ''
  
  get search() { return this.gifs.search }

  constructor(public gifs: GifService, public shared: SharedService) { }

  // Gets gifs from single search history item
  getGifs(name: string): void {
    this.gifs.searchGifs(name);
    this.shared.resultBlock = true;
    this.shared.showBlock = false;
    
    this.searchValue = name;
    this.sendValue.emit(this.searchValue);
  }

  // Removes single search item
  removeItem(name: string): string[] {
    const index = this.gifs._search.indexOf(name);

    if (index > -1) { 
      this.gifs._search.splice(index, 1); 
      localStorage.setItem('Search history', JSON.stringify(this.gifs._search));
    }
    
    return this.gifs._search
  }

  // Clears all search hitory
  clearSearch(): void {
    this.gifs._search.length = 0;
    localStorage.clear();
  }

}

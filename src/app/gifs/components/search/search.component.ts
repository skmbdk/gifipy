import { Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { GifService } from 'src/app/gifs/services/gifs.service';
import { SharedService } from 'src/app/shared/services/shared.service';

import { faSearch, faXmark, faLink } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  faSearch = faSearch;
  faClock = faClock;
  faClose = faXmark;
  faLink= faLink;
 
  @ViewChild('inputValue') inputValue!:ElementRef<HTMLInputElement>;
  @Output() sendValue: EventEmitter<string> = new EventEmitter()
  searchValue: string = '';

  constructor(public gifs: GifService, public shared: SharedService) { 
    this.sendValue.emit(this.searchValue);
  }

  get search() { return this.gifs.search }

  // Search gifs from search bar
  searchGifs() {
    const value = this.inputValue.nativeElement.value;
    if(value.length === 0) {return}
    this.gifs.searchGifs(value);
    this.shared.resultBlock = true;
    this.shared.showBlock = false;

    this.sendValue.emit(this.searchValue);
  }

  // Gets history item and updates search value and result
  searchItem($event: string) {
    this.searchValue = $event;
    this.sendValue.emit(this.searchValue);
  }
}

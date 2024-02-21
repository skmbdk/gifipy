import { Component } from '@angular/core';
import { SharedService } from './shared/services/shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GIFinder';
  searchValue:string = '';

  constructor(public shared: SharedService) {}

  getValue($event:string) {
    this.searchValue = $event
  }
}

import { Component, Input } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { SharedService } from 'src/app/shared/services/shared.service';

import { faImages, faLink, faArrowLeft} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  faImages = faImages
  faLink = faLink
  faArrowLeft = faArrowLeft

  @Input() searchValue: string =''

  get search() { return this.gifs._search }
  get results() { return this.gifs.results }  

  constructor(public gifs: GifService, public shared: SharedService) {}

  copyLink( link: string ) {
      this.shared.copyLink(link);
  }
}

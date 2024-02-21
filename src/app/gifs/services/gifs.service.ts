import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

import { SharedService } from 'src/app/shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private apiKey: string ='jD33IxJKsAjXswHxdwecods41yTrSFMD';
  private serviceURL: string = 'https://api.giphy.com/v1/gifs';
  public _search: string[] = [];
  public results: Gif[] = [];

  get search() { return [...this._search] }

  constructor (private http: HttpClient, private shared: SharedService) {
    this._search = JSON.parse(localStorage.getItem('Search history')!) || []
    this.results = JSON.parse(localStorage.getItem('Search results')!) || []
  }

  // Connects to Gifs API
  searchGifs(query:string) {
    this.shared.loading = true
    query = query.trim().toLowerCase()

    if(!this._search.includes(query)){
      this._search.unshift(query);
      this._search = this._search.splice(0, 15);
      localStorage.setItem('Search history', JSON.stringify(this._search));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query);
    
    this.http.get<SearchGifsResponse>(`${this.serviceURL}/search`, {params})
      .subscribe((resp) => {
        this.results = resp.data
        this.shared.loading = false
      localStorage.setItem('Search results', JSON.stringify(this.results));
    })
  }
}

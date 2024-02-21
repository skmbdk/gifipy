import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';
import { TrendingListResponse } from '../interface/trending.interface';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  private apiKey: string ='jD33IxJKsAjXswHxdwecods41yTrSFMD';
  private serviceURL: string = 'https://api.giphy.com/v1';
  public trending: Gif[] = [];
  public trendingList: string[]= [];

  constructor(private http:HttpClient, private shared: SharedService) { }

  // Connects to Trending Gifs API
  getTrendingGifs() {
    this.shared.loading = true

    const params = new HttpParams()
      .set('api_key', this.apiKey);
    
    this.http.get<SearchGifsResponse>(`${this.serviceURL}/gifs/trending`, {params})
      .subscribe((resp) => {
        this.trending = resp.data
        this.shared.loading = false
      });
  }

  getTrendingList() {
    const params = new HttpParams()
      .set('api_key', this.apiKey);
    
    this.http.get<TrendingListResponse>(`${this.serviceURL}/trending/searches`, {params})
      .subscribe((resp) => {
        this.trendingList = resp.data.splice(0, 6)
    });
  }
}

import { Injectable } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  showBlock: boolean = false; // Search history dropdown
  resultBlock: boolean = false; // Display block on search
  notificationOn: boolean = false; // Notification
  loading: boolean = false; // Loading animation

  constructor(private clipboard: Clipboard) { }

  // Copy gifs links
  copyLink(link: string) {
    this.clipboard.copy(link);
    this.notificationOn = true; 

    setTimeout(() => {this.notificationOn = false}, 3000);
  }
}

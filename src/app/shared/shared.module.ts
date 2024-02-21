import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLoadingModule } from 'ngx-loading'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedService } from './services/shared.service';
import { NotificationComponent } from './notification/notification.component';
import { LoadingComponent } from './loading/loading.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    NotificationComponent,
    LoadingComponent,
    NotFoundComponent
  ],
  exports: [
    NotificationComponent,
    LoadingComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NgxLoadingModule.forRoot({}),
    FontAwesomeModule
  ],
  providers: [
    SharedService
  ]
})
export class SharedModule { }

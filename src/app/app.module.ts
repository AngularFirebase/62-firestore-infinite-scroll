import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ScrollableDirective } from './scrollable.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PaginationService } from './pagination.service';

@NgModule({
  declarations: [
    AppComponent,
    ScrollableDirective,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

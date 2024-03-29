import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FoglalasokGETComponent } from './foglalasok-get/foglalasok-get.component';
import { FoglalasokPOSTComponent } from './foglalasok-post/foglalasok-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoglalasokGETComponent,
    FoglalasokPOSTComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

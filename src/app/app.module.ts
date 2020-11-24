import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubpageComponent } from './subpage/subpage.component';

import {RouteModule} from './route/route.module';

@NgModule({
  declarations: [
    AppComponent,
    SubpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

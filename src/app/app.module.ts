import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from "./music/player.component";
import { MusicService } from "./service/index";
import { HttpModule } from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }

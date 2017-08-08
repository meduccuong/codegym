import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerComponent } from "./music/player.component";
import { MusicService, Song } from "./service/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild(PlayerComponent) playerComponent: PlayerComponent;

  public listSongs: Song[] = [];
  private _service: MusicService;

  constructor(service: MusicService) {
    this._service = service;
  }

  public ngOnInit() {
    this._service.getListSong().subscribe((response)=> {
        this.listSongs = response;
        if (this.listSongs && this.listSongs.length > 0) {
            let defaultSong = this.listSongs[0];
            this.playerComponent.setAudio(defaultSong);
        }
    });
  }

  public selectSong(item: Song) {
    this.playerComponent.setAudio(item);
  }

  public clickNext(event: any) {
      if (this.listSongs && this.listSongs.length > 1) {
              let index = this.listSongs.findIndex(x=>x.id == event);
              if (index >= 0 && (index < (this.listSongs.length -1))) {
                  index = index + 1;
                  let song = this.listSongs[index];
                  this.playerComponent.setAudio(song);
              }
      }
  }

  public previousClick(event: any) {
      if (this.listSongs && this.listSongs.length > 1) {
              let index = this.listSongs.findIndex(x=>x.id == event);
              if (index >= 1) {
                  index = index - 1;
                  let song = this.listSongs[index];
                  this.playerComponent.setAudio(song);
              }
      }
  }
}

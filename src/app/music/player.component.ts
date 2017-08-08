import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, OnChanges } from '@angular/core';
import { Song } from "../service/index";

@Component({
  selector: 'player',
  templateUrl: './player.component.html'
})

export class PlayerComponent implements OnInit {
  @ViewChild('player') audio: ElementRef;

  public urlAudio: string;
  public isPlay: boolean = true;
  public currentAudio: Song = {
      id: "",
      name: "",
      url: "../assets/data/Dem-Ngay-Xa-Em-OnlyC-Lou-Hoang.mp3",
      singer: ""
  };

  @Output() nextEmit: EventEmitter<string> = new EventEmitter<string>();
  @Output() previousEmit: EventEmitter<string> = new EventEmitter<string>();

  public ngOnInit() {
  }

  public playAudio() {
      this.audio.nativeElement.load();
      this.audio.nativeElement.play();
  }

  public loadUrl(url: string) {
     this.urlAudio = url;
  }

  public processState(event: any) {
      let control = event;
      if (this.isPlay) {
          this.audio.nativeElement.pause();
          this.isPlay = false;
          this.setPauseIcon();
      }else {
          this.audio.nativeElement.play();
          this.isPlay = true;
          this.setPlayIcon();
      }
  }

  public setAudio(audio: Song) {
        this.currentAudio = audio;
        this.urlAudio = audio.url;
        this.playAudio();
        this.setPlayIcon();
  }

  public setPlayIcon() {
      let control = document.getElementById("state");
      control.classList.remove("glyphicon-play");
      control.classList.add("glyphicon-pause");
  }

  public setPauseIcon() {
      let control = document.getElementById("state");
      control.classList.remove("glyphicon-pause");
      control.classList.add("glyphicon-play");
  }

  public previousAction() {
        this.previousEmit.emit(this.currentAudio.id);
  }

  public nextAction() {
        this.nextEmit.emit(this.currentAudio.id);
  }
}

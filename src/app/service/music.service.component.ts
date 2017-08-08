import { Injectable } from "@angular/core";
import { Observable }     from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Song } from "./song-model";

@Injectable() 
export class MusicService {
    
    private _http: Http;
    private _baseUrl: string = "./assets/data/data.json";
    constructor(private http: Http) {
        this._http = http;
    }

    public getListSong(): Observable<Song[]> {
        
        let value = this.http
               .get(this._baseUrl)
               .map((response) => response.json() as Song[]);
        return value;
    }
} 
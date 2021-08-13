import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  constructor(public http: HttpClient) { }
  key = environment.KEY;

  buscar(palabra: string) {
    return this.http.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=' + palabra + '&key=' + this.key)
  }
} 

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Server } from '../shared/server';
import { map } from 'rxjs/operators';
import { ServerMessage } from '../shared/server-message';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  options: any;
  headers: HttpHeaders;
  
  constructor(private _http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'
    });

    this.options = {
      headers: this.headers
    };
   }

  getServers() : Observable<Server[]> {
    return this._http.get("http://localhost:5000/api/server")
    .pipe(map((res: any) => res));
  }

  HandleServerMessage(msg: ServerMessage): Observable<any> {
    const url = 'http://localhost:5000/api/server/' + msg.id;
    return this._http.put(url, msg, this.options).pipe(map(res => res));
  }
}

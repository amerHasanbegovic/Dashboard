import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Server } from '../shared/server';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private _http: HttpClient) { }

  getServers() : Observable<Server[]> {
    return this._http.get("http://localhost:5000/api/server")
    .pipe(map((res: any) => res));
  }
}

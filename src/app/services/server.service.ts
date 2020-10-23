import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerMessage } from '../shared/server-message';
import { Server } from '../shared/server';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }
}

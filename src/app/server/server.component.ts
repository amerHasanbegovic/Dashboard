import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServerService } from '../services/server.service';
import { Server } from '../shared/server';
import { ServerMessage } from '../shared/server-message';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  constructor(private _serverService: ServerService) {}

  color: string;
  buttonText: string;
  isLoading: boolean;
  serverStatus: string;

  @Input() serverInput: Server;
  @Output() serverAction = new EventEmitter<ServerMessage>();

  ngOnInit(): void {
    this.SetServerStatus(this.serverInput.isOnline);
  }

  SetServerStatus(isOnline: boolean) {
    if (isOnline) {
      this.serverInput.isOnline = true;
      this.serverStatus = 'Online';
      this.color = '#66BB6A';
      this.buttonText = 'Shut Down';
    } else {
      this.serverInput.isOnline = false;
      this.serverStatus = 'Offline';
      this.color = '#FF6B6B';
      this.buttonText = 'Start';
    }
  };

  MakeLoading() {
    this.color = '#FFCA28';
    this.buttonText = 'Pending..';
    this.isLoading = true;
    this.serverStatus = 'Loading';
  }

  SendServerAction(isOnline: boolean) {
    this.MakeLoading();
    const payload = this.BuildPayload(isOnline);
    this.serverAction.emit(payload);
  }

  BuildPayload(isOnline: boolean): ServerMessage {
    if (isOnline) {
      return {
        id: this.serverInput.id,
        payload: 'deactivate',
      };
    } else {
      return {
        id: this.serverInput.id,
        payload: 'activate',
      };
    }
  }
}

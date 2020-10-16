import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../shared/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  constructor() {}

  color: string;
  buttonText: string;

  @Input() serverInput: Server;
  ngOnInit(): void {
    this.SetServerStatus(this.serverInput.IsOnline);
  }

  SetServerStatus = (isOnline: boolean) => {
    if (isOnline) {
      this.serverInput.IsOnline = true;
      this.color = '#66BB6A';
      this.buttonText = 'Shut Down';
    } else {
      this.serverInput.IsOnline = false;
      this.color = '#FF6B6B';
      this.buttonText = 'Start';
    }
  };
  ToggleStatus = (onlineStatus: boolean) => {
    this.SetServerStatus(!onlineStatus);
  };
}

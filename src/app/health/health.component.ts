import { Component, OnInit, OnDestroy } from '@angular/core';
import { Server } from '../shared/server';
import { ServerService } from '../services/server.service';
import { timer } from 'rxjs';
import { ServerMessage } from '../shared/server-message';

// const sample_servers = [
//   { Id: 1, Name: 'dev-web', IsOnline: true },
//   { Id: 2, Name: 'dev-mail', IsOnline: false },
//   { Id: 3, Name: 'prod-web', IsOnline: false },
//   { Id: 4, Name: 'prod-mail', IsOnline: true },
//   { Id: 5, Name: 'prod', IsOnline: true },
// ];

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
})
export class HealthComponent implements OnInit, OnDestroy {
  constructor(private _serverService: ServerService) {}

  servers: Server[];
  timerSubscription: any;

  ngOnInit(): void {
    this.RefreshData();
    this._serverService.getServers().subscribe((res) => {
      this.servers = res;
    });
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  RefreshData() {
    this._serverService.getServers().subscribe((res) => {
      this.servers = res;
    });
    this.SubscribedToData();
  }

  SubscribedToData() {
    const time = timer(5000);
    this.timerSubscription = time.subscribe(() => this.RefreshData());
  }

  SendMessage(msg: ServerMessage){
    this._serverService.HandleServerMessage(msg)
    .subscribe(res => console.log("Message sent!", res), err => console.log(err));
  }
}

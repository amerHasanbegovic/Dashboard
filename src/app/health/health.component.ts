import { Component, OnInit } from '@angular/core';
import { Server } from '../shared/server';

const sample_servers = [
  { Id: 1, Name: 'dev-web', IsOnline: true },
  { Id: 2, Name: 'dev-mail', IsOnline: false },
  { Id: 3, Name: 'prod-web', IsOnline: false },
  { Id: 4, Name: 'prod-mail', IsOnline: true },
];
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
})
export class HealthComponent implements OnInit {
  constructor() {}

  servers: Server[] = sample_servers;
  ngOnInit(): void {}
}

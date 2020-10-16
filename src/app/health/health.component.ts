import { Component, OnInit } from '@angular/core';
import { Server } from '../shared/server';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor() { }

  server: Server[];
  ngOnInit(): void {
  }

}

import { Routes } from '@angular/router';
import { HealthComponent } from './app/health/health.component';
import { OrdersComponent } from './app/orders/orders.component';
import { SalesComponent } from './app/sales/sales.component';

export const appRoutes: Routes = [
  { path: 'sales', component: SalesComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'health', component: HealthComponent },
  { path: '', redirectTo: '/sales', pathMatch: 'full' },
];

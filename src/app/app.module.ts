import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SalesComponent } from './sales/sales.component';
import { OrdersComponent } from './orders/orders.component';
import { HealthComponent } from './health/health.component';
import { appRoutes } from 'src/routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SalesComponent,
    OrdersComponent,
    HealthComponent,
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

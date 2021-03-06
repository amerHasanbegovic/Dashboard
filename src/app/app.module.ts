import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SalesComponent } from './sales/sales.component';
import { OrdersComponent } from './orders/orders.component';
import { HealthComponent } from './health/health.component';
import { appRoutes } from 'src/routes';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ServerComponent } from './server/server.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SalesDataService } from './services/sales-data.service';
import { ServerService } from './services/server.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SalesComponent,
    OrdersComponent,
    HealthComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    ServerComponent,
    PaginationComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), ChartsModule, HttpClientModule],
  providers: [SalesDataService, ServerService],
  bootstrap: [AppComponent],
})
export class AppModule {}

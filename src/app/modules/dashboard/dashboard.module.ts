import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DASHBOARD_ROUTING } from './dashboard.router';
import { HeaderComponent } from '../core/components/header/header.component';

const DASHBOARD_DECLARATIONS = [HeaderComponent, DashboardComponent];

@NgModule({
  imports: [
    CommonModule,
    DASHBOARD_ROUTING,
  ],
  declarations: [...DASHBOARD_DECLARATIONS]
})
export class DashboardModule { }

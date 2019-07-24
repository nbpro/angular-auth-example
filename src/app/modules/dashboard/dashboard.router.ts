import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { DashboardComponent } from './dashboard.component';

const DASHBOARD_ROUTES: Routes = [
  { path: '' , component: DashboardComponent}
];

export const DASHBOARD_ROUTING: ModuleWithProviders = RouterModule.forChild(DASHBOARD_ROUTES);
